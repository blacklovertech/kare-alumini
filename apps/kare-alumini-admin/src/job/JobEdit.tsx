import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const JobEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="applicationURL" source="applicationUrl" />
        <TextInput label="company" source="company" />
        <TextInput label="description" multiline source="description" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
