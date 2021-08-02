import { RoomsService } from './../rooms/rooms.service';
import { Test, TestingModule } from '@nestjs/testing';
import { Location, LocationDocument } from './entities/location.entity';
import { LocationsService } from './locations.service';
import { Model } from 'mongoose';
import { getModelToken } from '@nestjs/mongoose';
import { locationsStub } from './test/locations.stub';

describe('LocationsService', () => {
  let service: LocationsService;
  let model: Model<LocationDocument>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        LocationsService,
        {
          provide: getModelToken(Location.name),
          useValue: {
            find: jest.fn().mockResolvedValue(locationsStub()),
          }
        },
        {
          provide: RoomsService,
          useValue: {
            aggregate: jest.fn().mockResolvedValue([]),
          }
        }
      ],
    }).compile();

    service = module.get<LocationsService>(LocationsService);
    model = module.get<Model<LocationDocument>>(getModelToken(Location.name));

    jest.clearAllMocks();
  });

  it('LocationsService should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('find', () => {
    describe('when find is called', () => {
      let locations: LocationDocument[];

      beforeEach(async () => {
        jest.spyOn(model, 'find');
        locations = await model.find();
      })

      test('then it should call the model', () => {
        expect(model.find).toHaveBeenCalled();
      })

      test('then it should return locations', () => {
        expect(locations).toEqual(locationsStub());
      })
    })
  })

});
