import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const MessageCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="receiverId" source="receiverId" />
        <TextInput label="senderId" source="senderId" />
        <DateTimeInput label="sentAt" source="sentAt" />
        <TextInput label="text" multiline source="text" />
      </SimpleForm>
    </Create>
  );
};
