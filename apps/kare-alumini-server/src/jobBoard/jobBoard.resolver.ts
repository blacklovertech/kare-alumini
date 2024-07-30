import * as graphql from "@nestjs/graphql";
import { JobBoardResolverBase } from "./base/jobBoard.resolver.base";
import { JobBoard } from "./base/JobBoard";
import { JobBoardService } from "./jobBoard.service";

@graphql.Resolver(() => JobBoard)
export class JobBoardResolver extends JobBoardResolverBase {
  constructor(protected readonly service: JobBoardService) {
    super(service);
  }
}
