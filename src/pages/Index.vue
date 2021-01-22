<template>
  <Layout>
    <h1>lg-gridsome预渲染页面2.0</h1>
    <ul>
      <!-- <li v-for="post in $page.posts.edges" :key="post.node.id" @click="handleRoute(post.node.id)">
        <div class="title">{{ post.node.title }}</div>
        <div class="content">{{ post.node.content }}</div>
        <div class="date">{{ post.node.create_at }}</div>
      </li>   -->
      <li>
        <div class="title">标题</div>
        <div class="content">内容</div>
        <div class="date">2020:21:21 23:32:32</div>
      </li>  
      <li>
        <div class="title">标题</div>
        <div class="content">内容</div>
        <div class="date">2020:21:21 23:32:32</div>
      </li>  
        <li>
        <div class="title">标题</div>
        <div class="content">内容</div>
        <div class="date">2020:21:21 23:32:32</div>
      </li>  
      <li>
        <div class="title">标题</div>
        <div class="content">内容</div>
        <div class="date">2020:21:21 23:32:32</div>
      </li> 
          <li>
        <div class="title">标题</div>
        <div class="content">内容</div>
        <div class="date">2020:21:21 23:32:32</div>
      </li>  
      <li>
        <div class="title">标题</div>
        <div class="content">内容</div>
        <div class="date">2020:21:21 23:32:32</div>
      </li>  
    </ul>    
    <!-- <Pager :info="$page.posts.pageInfo" /> -->
  </Layout>
</template>
<script>
// <page-query>
// query ($page: Int){
//   posts: allStrapiPost (perPage: 2, page: $page) @paginate {
//      pageInfo {
//       totalPages
//       currentPage
//     }
//     edges {
//       node {
//         id
//         title
//         content
//         created_at
//       }
//     }
//   }
// }
// </page-query>
// import { Pager } from 'gridsome'
export default {
  // components: {
  //   Pager
  // },
  name: "PageHome",
  metaInfo: {
    title: 'Hello, world!'
  },
  methods: {
    handleRoute(id) {
      this.$router.push(`/post/${id}`)
    }
  }
}
</script>

<style>
a {
  margin-right:20px;
}
li {
  padding: 30px 0;
  border-bottom: 1px solid #ccc;
}
</style>
