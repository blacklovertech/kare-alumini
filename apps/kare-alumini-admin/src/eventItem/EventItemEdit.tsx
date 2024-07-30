import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const EventItemEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="date" source="date" />
        <TextInput label="description" multiline source="description" />
        <TextInput label="location" source="location" />
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Edit>
  );
};
