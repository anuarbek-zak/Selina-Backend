"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationsServiceMock = void 0;
const locations_stub_1 = require("./locations.stub");
exports.LocationsServiceMock = {
    findAll: jest.fn().mockImplementation(() => Promise.resolve(locations_stub_1.locationsStub()))
};
//# sourceMappingURL=locations.service.mock.js.map