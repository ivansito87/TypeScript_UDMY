import faker from "faker";

export const Faker = {
  getFirstName: (gender: number): string => {
    return gender === 0 ? faker.name.firstName(gender) : faker.name.firstName();
  },
  getLastName: (): string => {
    return faker.name.firstName();
  },
  getLongitude: (): number => {
    return parseFloat(faker.address.latitude());
  },
  getLatitude: (): number => {
    return parseFloat(faker.address.latitude());
  },
  catchPrashe: (): string => {
    return faker.company.companyName();
  },
  getcatchPrashe: (): string => {
    return faker.company.catchPhrase();
  }
};
