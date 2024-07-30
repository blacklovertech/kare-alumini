import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { GeolocationService } from "./geolocation.service";
import { GeolocationControllerBase } from "./base/geolocation.controller.base";

@swagger.ApiTags("geolocations")
@common.Controller("geolocations")
export class GeolocationController extends GeolocationControllerBase {
  constructor(protected readonly service: GeolocationService) {
    super(service);
  }
}
