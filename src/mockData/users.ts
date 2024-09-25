import { faker } from "@faker-js/faker";

export interface User {
  id?: string;
  avatar: string;
  fullName: string;
  email: string;
  address: string;
  phoneNumber: string;
  jobTitle: string;
  supervisor: string;
}

const generateUser = (): User => {
  return {
    avatar: faker.image.avatar(),
    fullName: faker.person.fullName(),
    email: faker.internet.email(),
    address: faker.location.streetAddress(),
    phoneNumber: faker.phone.number(),
    jobTitle: faker.person.jobDescriptor(),
    supervisor: faker.person.fullName(),
  };
};

const UsersMock: User[] = faker.helpers.multiple(generateUser, {
  count: 50,
});

export default UsersMock;
