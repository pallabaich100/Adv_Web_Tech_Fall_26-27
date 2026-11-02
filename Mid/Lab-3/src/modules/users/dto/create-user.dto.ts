
import {
  IsString,
  IsNotEmpty,
  MinLength,
  IsEmail,
  IsInt,
  Min,
  Max,
  Matches,
  IsIn,
  IsOptional,
} from 'class-validator';

import { Type } from 'class-transformer';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  fullName!: string;

  @IsEmail()
  @IsNotEmpty()
  email!: string;

  @IsString()
  @MinLength(8)
  @Matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
  )
  password!: string;

  @Type(() => Number)
  @IsInt()
  @Min(18)
  @Max(60)
  age!: number;

  @IsString()
  @Matches(/^01\d{9}$/)
  phone!: string;

  @IsIn(['student', 'teacher'])
  accountType!: string;

  @IsOptional()
  @IsString()
  @MinLength(10)
  address?: string;
}
