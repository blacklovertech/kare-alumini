import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GeolocationServiceBase } from "./base/geolocation.service.base";

@Injectable()
export class GeolocationService extends GeolocationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
