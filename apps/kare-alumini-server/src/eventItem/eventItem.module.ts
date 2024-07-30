import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { EventItemModuleBase } from "./base/eventItem.module.base";
import { EventItemService } from "./eventItem.service";
import { EventItemController } from "./eventItem.controller";
import { EventItemResolver } from "./eventItem.resolver";

@Module({
  imports: [EventItemModuleBase, forwardRef(() => AuthModule)],
  controllers: [EventItemController],
  providers: [EventItemService, EventItemResolver],
  exports: [EventItemService],
})
export class EventItemModule {}
