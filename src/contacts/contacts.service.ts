import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { Contact } from './entities/contact.entity';
import { toContactEntity } from './contact.mapper';

@Injectable()
export class ContactsService {
  contacts: Contact[] = [];
  create(createContactDto: CreateContactDto) {
    const createdContact = toContactEntity(createContactDto);
    this.contacts.push(createdContact);
    return createdContact;
  }

  /*
   * Returns all the contacts in the database
   * @returns Contact[] - An array of Contact objects
   */
  findAll() {
    return this.contacts;
  }

  /*
   * Returns a single contact with the specified id or throws an error if the contact is not found
   * @param id - The id of the contact to return
   * @returns Contact - The contact with the specified id
   * @throws NotFoundException - If the contact with the specified id is not found
   */
  findOne(id: number) {
    const contact = this.contacts.find((contact) => contact.id === id);
    if (!contact) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return contact;
  }

  /*
   * Updates a contact with the specified id with the values in the updateContactDto
   * @param id - The id of the contact to update
   * @param updateContactDto - The values to update the contact with
   * @returns string - A success message
   * @throws NotFoundException - If the contact with the specified id is not found
   * */

  update(id: number, updateContactDto: UpdateContactDto) {
    const contact = this.contacts.find((contact) => contact.id === id);

    if (!contact) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    const updatedContact = { ...contact, ...updateContactDto };

    this.contacts = this.contacts.map((contact) =>
      contact.id == id ? updatedContact : contact,
    );

    return updatedContact;
  }

  /*
   * Deletes a contact with the specified id
   * @param id - The id of the contact to delete
   * @returns string - A success message
   * @throws NotFoundException - If the contact with the specified id is not found
   * */
  remove(id: number) {
    const contact = this.contacts.find((contact) => contact.id === id);

    if (!contact) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    this.contacts = this.contacts.filter((contact) => contact.id !== id);
    return 'User deleted successfully';
  }
}
