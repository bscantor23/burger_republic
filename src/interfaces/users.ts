import { faker } from "@faker-js/faker";
import bcrypt from "bcryptjs";

export interface User {
  id?: string;
  avatar: string;
  fullName: string;
  email: string;
  address: string;
  phoneNumber: string;
  jobTitle: string;
  password: string;
}

const generateUser = (): User => {
  return {
    id: faker.string.uuid(),
    avatar: faker.image.avatar(),
    fullName: faker.person.fullName(),
    email: faker.internet.email(),
    address: faker.location.streetAddress(),
    phoneNumber: faker.phone.number(),
    jobTitle: faker.person.jobTitle(),
    password: bcrypt.hashSync(faker.internet.password(), 10),
  };
};

const addUsersData = (number: number): User[] => {
  const users: User[] = faker.helpers.multiple(generateUser, {
    count: number,
  });
  return users;
};

export default addUsersData;
