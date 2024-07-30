import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MentorshipProgramService } from "./mentorshipProgram.service";
import { MentorshipProgramControllerBase } from "./base/mentorshipProgram.controller.base";

@swagger.ApiTags("mentorshipPrograms")
@common.Controller("mentorshipPrograms")
export class MentorshipProgramController extends MentorshipProgramControllerBase {
  constructor(protected readonly service: MentorshipProgramService) {
    super(service);
  }
}
