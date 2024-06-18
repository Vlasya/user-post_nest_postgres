import { ApiProperty } from '@nestjs/swagger';
export class CreateUserDto {
  @ApiProperty({
    example: 'email@gmail.com',
    description: 'Email',
    required: true,
  })
  readonly email: string;
  @ApiProperty({ example: '123355', description: 'password', required: true })
  readonly password: string;
}
