const { Post } = require('../models');

const postdata = [
  {
    post_title: 'Donec',
    post_text: 'hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc',
    user_id: 10
  },
  {
    post_title: 'Morbi',
    post_text: 'quam pharetra magna ac consequat metus sapien ut nunc vestibulum',
    user_id: 8
  },
  {
    post_title: 'Donec',
    post_text: 'dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat',
    user_id: 1
  },
  {
    post_title: 'Nunc purus.',
    post_text: 'quam pharetra magna ac consequat metus sapien ut nunc vestibulum',
    user_id: 4
  },
  {
    post_title: 'Pellentesque',
    post_text: 'nulla sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum',
    user_id: 7
  },
  {
    post_title: 'Lorem ipsum',
    post_text: 'volutpat dui maecenas tristique est et tempus semper est quam pharetra magna ac',
    user_id: 4
  },
  {
    post_title: 'habitasse',
    post_text: 'curae duis faucibus accumsan odio curabitur convallis duis consequat dui',
    user_id: 1
  },
  {
    post_title: 'Morbi',
    post_text: 'volutpat dui maecenas tristique est et tempus semper est quam pharetra magna ac',
    user_id: 1
  },
  {
    post_title: 'Duis ac nibh.',
    post_text: 'dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat',
    user_id: 9
  },
  {
    post_title: 'Curabitur',
    post_text: 'dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat',
    user_id: 5
  },
  {
    post_title: 'In hac habitasse',
    post_text: 'curae duis faucibus accumsan odio curabitur convallis duis consequat dui',
    user_id: 3
  },
  {
    post_title: 'Morbi odio odio',
    post_text: 'potenti in eleifend quam a odio in hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt',
    user_id: 10
  },
  {
    post_title: 'Donec dapibus.',
    post_text: 'nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in',
    user_id: 8
  },
  {
    post_title: 'Nulla tellus.',
    post_text: 'augue a suscipit nulla elit ac nulla sed vel enim sit',
    user_id: 3
  },
  {
    post_title: 'Cras mi pede',
    post_text: 'potenti in eleifend quam a odio in hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt',
    user_id: 3
  },
  {
    post_title: 'Vestibulum',
    post_text: 'potenti in eleifend quam a odio in hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt',
    user_id: 7
  },
  {
    post_title: 'In hac habitasse',
    post_text: 'curae duis faucibus accumsan odio curabitur convallis duis consequat dui',
    user_id: 6
  },
  {
    post_title: 'Etiam justo.',
    post_text: 'dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat',
    user_id: 4
  },
  {
    post_title: 'Nulla',
    post_text: 'risus praesent lectus vestibulum quam sapien varius ut blandit non interdum in ante vestibulum ante ipsum primis in faucibus',
    user_id: 6
  },
  {
    post_title: 'Integer',
    post_text: 'nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in',
    user_id: 7
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
