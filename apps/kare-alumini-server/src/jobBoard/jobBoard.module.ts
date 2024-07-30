import { Module } from "@nestjs/common";
import { JobBoardModuleBase } from "./base/jobBoard.module.base";
import { JobBoardService } from "./jobBoard.service";
import { JobBoardController } from "./jobBoard.controller";
import { JobBoardResolver } from "./jobBoard.resolver";

@Module({
  imports: [JobBoardModuleBase],
  controllers: [JobBoardController],
  providers: [JobBoardService, JobBoardResolver],
  exports: [JobBoardService],
})
export class JobBoardModule {}
