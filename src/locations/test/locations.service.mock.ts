import { locationsStub } from "./locations.stub";

export const LocationsServiceMock = {
  findAll: jest.fn().mockImplementation(()=> Promise.resolve(locationsStub()))
}