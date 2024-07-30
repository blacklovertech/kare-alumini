import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { JobBoardService } from "./jobBoard.service";
import { JobBoardControllerBase } from "./base/jobBoard.controller.base";

@swagger.ApiTags("jobBoards")
@common.Controller("jobBoards")
export class JobBoardController extends JobBoardControllerBase {
  constructor(protected readonly service: JobBoardService) {
    super(service);
  }
}
