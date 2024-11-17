import Accordion from "./Accordion";

export default {
  title: "Components/Accordion",
  component: Accordion,
};

const Template = (args) => <Accordion {...args} />;

export const Faqs = Template.bind({});

Faqs.args = {
  data: [
    {
      title: "what is witt",
      content: "witt witt witt witt witt witt witt witt witt witt ",
    },

    {
      title: "what is the use of  witt",
      content: "witt witt witt witt witt witt witt witt witt witt ",
    },

    {
      title: "who are is the use of  witt",
      content: "witt witt witt witt witt witt witt witt witt witt ",
    },
  ],
};
