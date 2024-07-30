import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const UserProfileList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"UserProfiles"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="CurrentCompany" source="currentCompany" />
        <TextField label="CurrentRole" source="currentRole" />
        <TextField label="DeptOfStudy" source="deptOfStudy" />
        <TextField label="Email" source="email" />
        <TextField label="GithubUrl" source="githubUrl" />
        <TextField label="ID" source="id" />
        <TextField label="InstagramUrl" source="instagramUrl" />
        <TextField label="LinkedInUrl" source="linkedInUrl" />
        <TextField label="MoreAboutUser" source="moreAboutUser" />
        <TextField label="Name" source="name" />
        <BooleanField label="Notifications" source="notifications" />
        <TextField label="PassesOutYear" source="passesOutYear" />
        <TextField label="PhoneNumber" source="phoneNumber" />
        <BooleanField label="PostEvents" source="postEvents" />
        <BooleanField label="PostNews" source="postNews" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
