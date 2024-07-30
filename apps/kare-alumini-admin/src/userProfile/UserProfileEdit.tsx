import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
  NumberInput,
} from "react-admin";

export const UserProfileEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="CurrentCompany" source="currentCompany" />
        <TextInput label="CurrentRole" source="currentRole" />
        <TextInput label="DeptOfStudy" source="deptOfStudy" />
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="GithubUrl" source="githubUrl" />
        <TextInput label="InstagramUrl" source="instagramUrl" />
        <TextInput label="LinkedInUrl" source="linkedInUrl" />
        <TextInput label="MoreAboutUser" multiline source="moreAboutUser" />
        <TextInput label="Name" source="name" />
        <BooleanInput label="Notifications" source="notifications" />
        <NumberInput step={1} label="PassesOutYear" source="passesOutYear" />
        <TextInput label="PhoneNumber" source="phoneNumber" />
        <BooleanInput label="PostEvents" source="postEvents" />
        <BooleanInput label="PostNews" source="postNews" />
      </SimpleForm>
    </Edit>
  );
};
