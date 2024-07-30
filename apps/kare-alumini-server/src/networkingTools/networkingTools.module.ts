import { Module } from "@nestjs/common";
import { NetworkingToolsModuleBase } from "./base/networkingTools.module.base";
import { NetworkingToolsService } from "./networkingTools.service";
import { NetworkingToolsController } from "./networkingTools.controller";
import { NetworkingToolsResolver } from "./networkingTools.resolver";

@Module({
  imports: [NetworkingToolsModuleBase],
  controllers: [NetworkingToolsController],
  providers: [NetworkingToolsService, NetworkingToolsResolver],
  exports: [NetworkingToolsService],
})
export class NetworkingToolsModule {}
