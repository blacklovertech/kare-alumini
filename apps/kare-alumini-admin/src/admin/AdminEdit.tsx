import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
  DateTimeInput,
  SelectInput,
} from "react-admin";

export const AdminEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Email" source="email" type="email" />
        <BooleanInput label="IsActive" source="isActive" />
        <DateTimeInput label="LastLogin" source="lastLogin" />
        <TextInput label="Name" source="name" />
        <TextInput label="Password" source="password" />
        <TextInput label="PhoneNumber" source="phoneNumber" />
        <SelectInput
          source="role"
          label="Role"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Edit>
  );
};
