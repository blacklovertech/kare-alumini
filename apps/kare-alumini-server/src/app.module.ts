import { Module } from "@nestjs/common";
import { NetworkingToolsModule } from "./networkingTools/networkingTools.module";
import { UserProfileModule } from "./userProfile/userProfile.module";
import { DonationModule } from "./donation/donation.module";
import { EventModule } from "./event/event.module";
import { JobBoardModule } from "./jobBoard/jobBoard.module";
import { ResourceLibraryModule } from "./resourceLibrary/resourceLibrary.module";
import { GeolocationModule } from "./geolocation/geolocation.module";
import { NewsAnnouncementModule } from "./newsAnnouncement/newsAnnouncement.module";
import { MentorshipProgramModule } from "./mentorshipProgram/mentorshipProgram.module";
import { DiscussionForumModule } from "./discussionForum/discussionForum.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    NetworkingToolsModule,
    UserProfileModule,
    DonationModule,
    EventModule,
    JobBoardModule,
    ResourceLibraryModule,
    GeolocationModule,
    NewsAnnouncementModule,
    MentorshipProgramModule,
    DiscussionForumModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
