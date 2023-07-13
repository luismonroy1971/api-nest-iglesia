import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schemas/user.schema';

import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { SignUpDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';
import { UserUpdateDto } from './dto/userUpdate.dto';
import { Query  } from 'express-serve-static-core';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<User>,
    private jwtService: JwtService,
  ) {}

  async signUp(signUpDto: SignUpDto): Promise<{ token: string }> {
    const { name, email, password } = signUpDto;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await this.userModel.create({
      name,
      email,
      password: hashedPassword,
    });

    const token = this.jwtService.sign({ id: user._id });

    return { token };
  }

  async login(loginDto: LoginDto): Promise<{ token: string }> {
    const { email, password } = loginDto;

    const user = await this.userModel.findOne({ email });

    if (!user) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const isPasswordMatched = await bcrypt.compare(password, user.password);

    if (!isPasswordMatched) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const token = this.jwtService.sign({ id: user._id });

    return { token };
  }

  async findAll(query: Query): Promise<User[]> {
       
    const resPerPage = 10
    const currentPage = Number(query.page) || 1
    const skip = resPerPage * (currentPage - 1)
   
   
    const keyword = query.keyword ? {
        name:{
            $regex : query.keyword,
            $options: 'i'
        }
    }:{}

    const user = await this.userModel.find({ ...keyword }).limit(resPerPage).skip(skip);
    return user
}

    async findOne(id:string){
        const user = await this.userModel.findById(id);
        return user;
    }

    async delete(id:string){
        return await this.userModel.findByIdAndDelete(id);
    }

    async update(id:string, body: UserUpdateDto){
        return await this.userModel.findByIdAndUpdate(id, body, { new: true, runValidators: true });
    }
}