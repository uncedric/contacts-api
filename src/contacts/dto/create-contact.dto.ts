import { IsNotEmpty, MinLength } from 'class-validator';

export class CreateContactDto {
  @IsNotEmpty()
  @MinLength(2, {
    message: 'Name is too short',
  })
  firstName?: string;
  @MinLength(2, {
    message: 'Name is too short',
  })
  lastName?: string;

  @IsNotEmpty()
  email?: string;

  @IsNotEmpty()
  phone?: string;
}
