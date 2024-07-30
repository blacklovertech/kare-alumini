import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { EventRegistrationModuleBase } from "./base/eventRegistration.module.base";
import { EventRegistrationService } from "./eventRegistration.service";
import { EventRegistrationController } from "./eventRegistration.controller";
import { EventRegistrationResolver } from "./eventRegistration.resolver";

@Module({
  imports: [EventRegistrationModuleBase, forwardRef(() => AuthModule)],
  controllers: [EventRegistrationController],
  providers: [EventRegistrationService, EventRegistrationResolver],
  exports: [EventRegistrationService],
})
export class EventRegistrationModule {}
