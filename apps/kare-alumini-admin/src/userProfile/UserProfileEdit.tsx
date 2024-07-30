import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  SelectInput,
  BooleanInput,
  NumberInput,
} from "react-admin";

export const UserProfileEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Address" multiline source="address" />
        <SelectInput
          source="bloodGroup"
          label="BloodGroup"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
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
        <TextInput label="RegNo" source="regNo" />
      </SimpleForm>
    </Edit>
  );
};
