import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserProfileList } from "./userProfile/UserProfileList";
import { UserProfileCreate } from "./userProfile/UserProfileCreate";
import { UserProfileEdit } from "./userProfile/UserProfileEdit";
import { UserProfileShow } from "./userProfile/UserProfileShow";
import { NetworkingToolsList } from "./networkingTools/NetworkingToolsList";
import { NetworkingToolsCreate } from "./networkingTools/NetworkingToolsCreate";
import { NetworkingToolsEdit } from "./networkingTools/NetworkingToolsEdit";
import { NetworkingToolsShow } from "./networkingTools/NetworkingToolsShow";
import { DonationList } from "./donation/DonationList";
import { DonationCreate } from "./donation/DonationCreate";
import { DonationEdit } from "./donation/DonationEdit";
import { DonationShow } from "./donation/DonationShow";
import { JobBoardList } from "./jobBoard/JobBoardList";
import { JobBoardCreate } from "./jobBoard/JobBoardCreate";
import { JobBoardEdit } from "./jobBoard/JobBoardEdit";
import { JobBoardShow } from "./jobBoard/JobBoardShow";
import { ResourceLibraryList } from "./resourceLibrary/ResourceLibraryList";
import { ResourceLibraryCreate } from "./resourceLibrary/ResourceLibraryCreate";
import { ResourceLibraryEdit } from "./resourceLibrary/ResourceLibraryEdit";
import { ResourceLibraryShow } from "./resourceLibrary/ResourceLibraryShow";
import { GeolocationList } from "./geolocation/GeolocationList";
import { GeolocationCreate } from "./geolocation/GeolocationCreate";
import { GeolocationEdit } from "./geolocation/GeolocationEdit";
import { GeolocationShow } from "./geolocation/GeolocationShow";
import { EventList } from "./event/EventList";
import { EventCreate } from "./event/EventCreate";
import { EventEdit } from "./event/EventEdit";
import { EventShow } from "./event/EventShow";
import { NewsAnnouncementList } from "./newsAnnouncement/NewsAnnouncementList";
import { NewsAnnouncementCreate } from "./newsAnnouncement/NewsAnnouncementCreate";
import { NewsAnnouncementEdit } from "./newsAnnouncement/NewsAnnouncementEdit";
import { NewsAnnouncementShow } from "./newsAnnouncement/NewsAnnouncementShow";
import { DiscussionForumList } from "./discussionForum/DiscussionForumList";
import { DiscussionForumCreate } from "./discussionForum/DiscussionForumCreate";
import { DiscussionForumEdit } from "./discussionForum/DiscussionForumEdit";
import { DiscussionForumShow } from "./discussionForum/DiscussionForumShow";
import { MentorshipProgramList } from "./mentorshipProgram/MentorshipProgramList";
import { MentorshipProgramCreate } from "./mentorshipProgram/MentorshipProgramCreate";
import { MentorshipProgramEdit } from "./mentorshipProgram/MentorshipProgramEdit";
import { MentorshipProgramShow } from "./mentorshipProgram/MentorshipProgramShow";
import { AdminList } from "./admin/AdminList";
import { AdminCreate } from "./admin/AdminCreate";
import { AdminEdit } from "./admin/AdminEdit";
import { AdminShow } from "./admin/AdminShow";
import { JobList } from "./job/JobList";
import { JobCreate } from "./job/JobCreate";
import { JobEdit } from "./job/JobEdit";
import { JobShow } from "./job/JobShow";
import { NewsList } from "./news/NewsList";
import { NewsCreate } from "./news/NewsCreate";
import { NewsEdit } from "./news/NewsEdit";
import { NewsShow } from "./news/NewsShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { EventItemList } from "./eventItem/EventItemList";
import { EventItemCreate } from "./eventItem/EventItemCreate";
import { EventItemEdit } from "./eventItem/EventItemEdit";
import { EventItemShow } from "./eventItem/EventItemShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Kare Alumini"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="UserProfile"
          list={UserProfileList}
          edit={UserProfileEdit}
          create={UserProfileCreate}
          show={UserProfileShow}
        />
        <Resource
          name="NetworkingTools"
          list={NetworkingToolsList}
          edit={NetworkingToolsEdit}
          create={NetworkingToolsCreate}
          show={NetworkingToolsShow}
        />
        <Resource
          name="Donation"
          list={DonationList}
          edit={DonationEdit}
          create={DonationCreate}
          show={DonationShow}
        />
        <Resource
          name="JobBoard"
          list={JobBoardList}
          edit={JobBoardEdit}
          create={JobBoardCreate}
          show={JobBoardShow}
        />
        <Resource
          name="ResourceLibrary"
          list={ResourceLibraryList}
          edit={ResourceLibraryEdit}
          create={ResourceLibraryCreate}
          show={ResourceLibraryShow}
        />
        <Resource
          name="Geolocation"
          list={GeolocationList}
          edit={GeolocationEdit}
          create={GeolocationCreate}
          show={GeolocationShow}
        />
        <Resource
          name="Event"
          list={EventList}
          edit={EventEdit}
          create={EventCreate}
          show={EventShow}
        />
        <Resource
          name="NewsAnnouncement"
          list={NewsAnnouncementList}
          edit={NewsAnnouncementEdit}
          create={NewsAnnouncementCreate}
          show={NewsAnnouncementShow}
        />
        <Resource
          name="DiscussionForum"
          list={DiscussionForumList}
          edit={DiscussionForumEdit}
          create={DiscussionForumCreate}
          show={DiscussionForumShow}
        />
        <Resource
          name="MentorshipProgram"
          list={MentorshipProgramList}
          edit={MentorshipProgramEdit}
          create={MentorshipProgramCreate}
          show={MentorshipProgramShow}
        />
        <Resource
          name="Admin"
          list={AdminList}
          edit={AdminEdit}
          create={AdminCreate}
          show={AdminShow}
        />
        <Resource
          name="Job"
          list={JobList}
          edit={JobEdit}
          create={JobCreate}
          show={JobShow}
        />
        <Resource
          name="News"
          list={NewsList}
          edit={NewsEdit}
          create={NewsCreate}
          show={NewsShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="EventItem"
          list={EventItemList}
          edit={EventItemEdit}
          create={EventItemCreate}
          show={EventItemShow}
        />
      </Admin>
    </div>
  );
};

export default App;
