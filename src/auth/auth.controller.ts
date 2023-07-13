import { Body, Controller, Delete, Get, HttpCode, NotFoundException, Param, Post, Put, UseGuards, Query } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { SignUpDto } from './dto/signup.dto';
import { ApiParam, ApiQuery, ApiTags} from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { UserUpdateDto } from './dto/userUpdate.dto';
import { User } from '../auth/schemas/user.schema';
import { Query as ExppressQuery } from 'express-serve-static-core';

@ApiTags('Autorización')
@Controller('users')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(AuthGuard())
  @Post('/signup')
  signUp(@Body() signUpDto: SignUpDto): Promise<{ token: string }> {
    return this.authService.signUp(signUpDto);
  }

  @Get('/login')
  login(@Body() loginDto: LoginDto): Promise<{ token: string }> {
    return this.authService.login(loginDto);
  }


  @ApiParam({
    name: 'id'
  })
  @Get(':id')
  async findOne(@Param('id') id:string){
    const usuario = await this.authService.findOne(id);
    if (!usuario) throw new NotFoundException('usuario no existe');
    return  usuario;
  }

  @ApiQuery({
    name: 'nombre usuario'
  })
  @Get()
  async findAll(@Query() query: ExppressQuery): Promise<User[]>{
      return this.authService.findAll(query);
  }

  @ApiParam({
      name: 'id'
  })
  @Delete(':id')
  @HttpCode(204)
  @UseGuards(AuthGuard())
  async deleted(@Param('id') id:string ){
      const user = await this.authService.delete(id);
      if (!user) throw new NotFoundException('Usuario no existe');
      return user;
  }

  @ApiParam({
      name: 'id'
  })
  @Put(':id')
  @UseGuards(AuthGuard())
  async update(@Param('id') id:string, @Body() body:UserUpdateDto){
      const user = await this.authService.update(id, body);
      if (!user) throw new NotFoundException('Usuario no existe');
      return  user;

  }

}