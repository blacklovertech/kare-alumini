import * as graphql from "@nestjs/graphql";
import { MentorshipProgramResolverBase } from "./base/mentorshipProgram.resolver.base";
import { MentorshipProgram } from "./base/MentorshipProgram";
import { MentorshipProgramService } from "./mentorshipProgram.service";

@graphql.Resolver(() => MentorshipProgram)
export class MentorshipProgramResolver extends MentorshipProgramResolverBase {
  constructor(protected readonly service: MentorshipProgramService) {
    super(service);
  }
}
