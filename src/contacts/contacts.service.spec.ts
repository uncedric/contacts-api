import { Test, TestingModule } from '@nestjs/testing';
import { ContactsService } from './contacts.service';
import {
  ERROR_ID_MOCK,
  INSERTED_ID_MOCK,
  validContactMock,
} from './contact.mock';
import { toContactEntity } from './contact.mapper';

// mock toContactEntity function to simulate an ID being added to the contact
jest.mock('./contact.mapper', () => ({
  toContactEntity: jest.fn(),
}));

describe('ContactsService', () => {
  let service: ContactsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContactsService],
    }).compile();

    service = module.get<ContactsService>(ContactsService);

    // reset contacts array before each test
    service.contacts = [];
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create contact', () => {
    it('should add a contact to the contacts array', () => {
      expect(service.create(validContactMock)).toBe(
        'Contact added successfully',
      );
      expect(service.contacts.length).toBe(1);
    });
  });

  describe('list contacts', () => {
    it('should return an array ', () => {
      expect(service.findAll()).toBe(service.contacts);
    });
  });

  describe('get contact', () => {
    it('should return a contact with the specified id', () => {
      const mockContactEntity = {
        id: INSERTED_ID_MOCK,
        ...validContactMock,
      };

      // Mock the implementation of toContactEntity
      (toContactEntity as jest.Mock).mockReturnValue(mockContactEntity);

      service.create(validContactMock);

      expect(service.findOne(INSERTED_ID_MOCK)).toBe(mockContactEntity);
    });

    it('should throw an error if the contact is not found', () => {
      expect(() => service.findOne(ERROR_ID_MOCK)).toThrow(
        `User with ID ${ERROR_ID_MOCK} not found`,
      );
    });
  });

  describe('update contact', () => {
    it('should update a contact with the specified id', () => {
      service.create(validContactMock);
      expect(service.update(INSERTED_ID_MOCK, validContactMock)).toBe(
        'User updated successfully',
      );
    });

    it('should throw an error if the contact is not found', () => {
      expect(() => service.update(ERROR_ID_MOCK, validContactMock)).toThrow(
        `User with ID ${ERROR_ID_MOCK} not found`,
      );
    });
  });

  describe('delete contact', () => {
    it('should delete a contact with the specified id', () => {
      service.create(validContactMock);
      expect(service.contacts.length).toBe(1);
      service.remove(INSERTED_ID_MOCK);
      expect(service.contacts.length).toBe(0);
    });

    it('should throw an error if the contact is not found', () => {
      expect(() => service.remove(ERROR_ID_MOCK)).toThrow(
        `User with ID ${ERROR_ID_MOCK} not found`,
      );
    });
  });
});
