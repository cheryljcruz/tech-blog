const { Post } = require("../models");

const postdata = [
  {
    title: "AI takes over the world",
    body_text: "Here they come!",
    user_id: 1,
  },
  {
    title: "Big tech takes over the world",
    body_text: "It's here!",
    user_id: 2,
  },
  {
    title: "Technology takes over the world",
    body_text: "What is new?!",
    user_id: 3,
  },
  {
    title: "Machine learning takes over the world",
    body_text: "Pretty cool stuff actually",
    user_id: 4,
  },
  {
    title: "The release of Breath of the Wild 2 leaves fans in suspense",
    body_text: "C'mon now",
    user_id: 5,
  },
  {
    title:
      "New technology that turns gas emissions into chocolate takes over the world",
    body_text: "Should we eat it?",
    user_id: 6,
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
