import TextInput from "./TextInput";

export default {
  title: "Components/TextInput",
  component: TextInput,
  argTypes: {
    name: { control: "text" },
    label: { control: "text" },
    type: {
      options: ["text", "password", "email", "date"],
      control: { type: "select" },
    },
    placeholder: { control: "text" },
  },
};

const Template = (args) => <TextInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: "default-input",
  label: "Default Input",
  type: "text",
  placeholder: "Enter text...",
};

export const Password = Template.bind({});
Password.args = {
  name: "password-input",
  label: "Password",
  type: "password",
  placeholder: "Enter password",
};

export const Required = Template.bind({});
Required.args = {
  name: "required-input",
  label: "Required Field",
  type: "text",
  placeholder: "This field is required",
  required: true,
};
