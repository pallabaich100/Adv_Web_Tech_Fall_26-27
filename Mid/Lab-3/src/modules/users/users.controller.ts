
import { Controller, Post, Body } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  @Post('register')
  register(@Body() createUserDto: CreateUserDto) {
    const { fullName, email, age, accountType } = createUserDto;

    return {
      message: 'User registered successfully',
      user: {
        fullName,
        email,
        age,
        accountType,
      },
    };
  }
}

