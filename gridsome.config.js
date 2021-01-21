// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    // {
    //   use: '@gridsome/source-strapi',
    //   options: {
    //     apiURL: 'http://localhost:1337',
    //     queryLimit: 1000, // Defaults to 100
    //     // contentTypes: ['article', 'user'],  //查询的数据类型
    //     contentTypes: ['post'],
    //     typeName: 'Strapi',
    //     // singleTypes: ['impressum'],  //查询的单个节点
    //     // Possibility to login with a Strapi user,
    //     // when content types are not publicly available (optional).
    //     // loginData: {  //被保护的数据，通过登录拿到
    //     //   identifier: '',
    //     //   password: ''
    //     // }
    //   }
    // }
  ],
  // templates: {
  //   StrapiPost: [{  //StrapiPost,不是随意命名，结合plugins的typeName和contentTypes
  //     path: "/post",
  //     component: './src/templates/Post.vue'
  //   }]
  // }
}
