import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const MessageEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="receiverId" source="receiverId" />
        <TextInput label="senderId" source="senderId" />
        <DateTimeInput label="sentAt" source="sentAt" />
        <TextInput label="text" multiline source="text" />
      </SimpleForm>
    </Edit>
  );
};
