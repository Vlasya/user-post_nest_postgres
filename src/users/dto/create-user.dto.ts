import { IsString, Length ,IsEmail} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateUserDto {
  @ApiProperty({
    example: 'email@gmail.com',
    description: 'Email',
    required: true,
  })
  @IsString({ message: 'Should be string' })
  @IsEmail({},{message:'Incorrect email '})
  readonly email: string;

  @ApiProperty({ example: '123355', description: 'password', required: true })
  @Length(4, 16, { message: 'No less 4 and no more than 16 symbols' })
  readonly password: string;
}
