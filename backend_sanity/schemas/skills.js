export default {
  name: "skills",
  title: "Skills",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "bgColor",
      title: "Background Color",
      type: "string",
    },
    {
      name: "icon",
      title: "Icon",
      type: "image",
      option: {
        hotspot: true,
      },
    },
  ],
};
