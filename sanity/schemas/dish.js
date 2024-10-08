export default {
  name: "dish",
  title: "Dish",
  type: "document",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name of dish",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "short_description",
      type: "string",
      tile: "Short description",
      validation: (Rule) => Rule.max(200),
    },
    {
      name: "price",
      type: "number",
      title: "Price of the dish in G8P",
    },
    {
      name: "image",
      type: "image",
      title: "Image of the Dish",
    },
  ],
};
