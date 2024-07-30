import { Module } from "@nestjs/common";
import { MentorshipProgramModuleBase } from "./base/mentorshipProgram.module.base";
import { MentorshipProgramService } from "./mentorshipProgram.service";
import { MentorshipProgramController } from "./mentorshipProgram.controller";
import { MentorshipProgramResolver } from "./mentorshipProgram.resolver";

@Module({
  imports: [MentorshipProgramModuleBase],
  controllers: [MentorshipProgramController],
  providers: [MentorshipProgramService, MentorshipProgramResolver],
  exports: [MentorshipProgramService],
})
export class MentorshipProgramModule {}
