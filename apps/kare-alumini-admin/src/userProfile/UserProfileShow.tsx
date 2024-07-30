import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";

export const UserProfileShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Address" source="address" />
        <TextField label="BloodGroup" source="bloodGroup" />
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
        <TextField label="RegNo" source="regNo" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
