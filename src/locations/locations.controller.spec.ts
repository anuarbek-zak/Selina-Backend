import { Test, TestingModule } from '@nestjs/testing';
import { LocationsController } from './locations.controller';
import { LocationsService } from './locations.service';
import { locationsStub } from './test/locations.stub';
import { LocationsServiceMock } from './test/locations.service.mock';
import { LocationDocument } from './entities/location.entity';


describe('LocationsController', () => {
  let controller: LocationsController;
  let service: LocationsService;

  beforeEach(async () => {

    const module: TestingModule = await Test.createTestingModule({
      controllers: [LocationsController],
      providers: [
        {
          provide: LocationsService,
          useValue: LocationsServiceMock
        }
      ],
      imports: []
    }).compile();

    controller = module.get<LocationsController>(LocationsController);
    service = module.get<LocationsService>(LocationsService);

    jest.clearAllMocks();
  });

  it('LocationsController should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    describe('when findAll is called', () => {
      let locations: LocationDocument[];

      beforeEach(async () => {
        locations = await controller.findAll();
      })

      test('then it should call LocationServiceMock', () => {
        expect(service.findAll).toHaveBeenCalled();
      })

      test('then it should return locations', () => {
        expect(locations).toEqual(locationsStub())
      })
    })
  })

});
