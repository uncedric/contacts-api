import { Contact } from './entities/contact.entity';

/**
 * This function takes a CreateContactDto object and returns a Contact object which would be what we would save in the database.
 * @param createContactDto - CreateContactDto object
 * @returns Contact object
 */
export const toContactEntity = (createContactDto) => {
  const contact = new Contact();

  // we are hardcoding the id here, but in a real-world application, you would generate a unique id or use an auto-incrementing id from a database
  contact.id = Math.floor(Math.random() * 100);
  contact.firstName = createContactDto.firstName;
  contact.lastName = createContactDto.lastName;
  contact.email = createContactDto.email;
  contact.phone = createContactDto.phone;
  return contact;
};
