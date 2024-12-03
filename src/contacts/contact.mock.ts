import { CreateContactDto } from './dto/create-contact.dto';

export const validContactMock: CreateContactDto = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'john@doe.com',
  phone: '1234567890',
};

export const INSERTED_ID_MOCK = 100;

export const ERROR_ID_MOCK = 999999;

export const INVALID_ID = 'XXXX';
