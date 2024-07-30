import { Module } from "@nestjs/common";
import { UserProfileModule } from "./userProfile/userProfile.module";
import { NetworkingToolsModule } from "./networkingTools/networkingTools.module";
import { DonationModule } from "./donation/donation.module";
import { EventModule } from "./event/event.module";
import { JobBoardModule } from "./jobBoard/jobBoard.module";
import { ResourceLibraryModule } from "./resourceLibrary/resourceLibrary.module";
import { GeolocationModule } from "./geolocation/geolocation.module";
import { NewsAnnouncementModule } from "./newsAnnouncement/newsAnnouncement.module";
import { DiscussionForumModule } from "./discussionForum/discussionForum.module";
import { MentorshipProgramModule } from "./mentorshipProgram/mentorshipProgram.module";
import { AdminModule } from "./admin/admin.module";
import { JobModule } from "./job/job.module";
import { NewsModule } from "./news/news.module";
import { UserModule } from "./user/user.module";
import { EventItemModule } from "./eventItem/eventItem.module";
import { MessageModule } from "./message/message.module";
import { RoleModule } from "./role/role.module";
import { UserRoleModule } from "./userRole/userRole.module";
import { EventRegistrationModule } from "./eventRegistration/eventRegistration.module";
import { ProfileModule } from "./profile/profile.module";
import { NotificationModule } from "./notification/notification.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  controllers: [],
  imports: [
    ACLModule,
    AuthModule,
    UserProfileModule,
    NetworkingToolsModule,
    DonationModule,
    EventModule,
    JobBoardModule,
    ResourceLibraryModule,
    GeolocationModule,
    NewsAnnouncementModule,
    DiscussionForumModule,
    MentorshipProgramModule,
    AdminModule,
    JobModule,
    NewsModule,
    UserModule,
    EventItemModule,
    MessageModule,
    RoleModule,
    UserRoleModule,
    EventRegistrationModule,
    ProfileModule,
    NotificationModule,
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
