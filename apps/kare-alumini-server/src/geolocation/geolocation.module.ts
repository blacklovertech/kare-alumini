import { Module } from "@nestjs/common";
import { GeolocationModuleBase } from "./base/geolocation.module.base";
import { GeolocationService } from "./geolocation.service";
import { GeolocationController } from "./geolocation.controller";
import { GeolocationResolver } from "./geolocation.resolver";

@Module({
  imports: [GeolocationModuleBase],
  controllers: [GeolocationController],
  providers: [GeolocationService, GeolocationResolver],
  exports: [GeolocationService],
})
export class GeolocationModule {}
