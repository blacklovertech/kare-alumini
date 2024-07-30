import * as graphql from "@nestjs/graphql";
import { GeolocationResolverBase } from "./base/geolocation.resolver.base";
import { Geolocation } from "./base/Geolocation";
import { GeolocationService } from "./geolocation.service";

@graphql.Resolver(() => Geolocation)
export class GeolocationResolver extends GeolocationResolverBase {
  constructor(protected readonly service: GeolocationService) {
    super(service);
  }
}
