<template>
<Layout>
  <div class="page-detail">
    <!-- <div class="title">{{ post.title }}</div>
    <div class="content" v-html="post.content"></div>
    <div class="date">{{ post.created_at }}</div> -->
    <!-- <div class="img">
      <img src="https://img.yzcdn.cn/vant/cat.jpeg" />
    </div> -->
    <div class="title">title</div>
    <div class="content">content</div>
    <div class="date">2021-01-21 12:32:32</div>
    <div class="img">
      <img src="https://img.yzcdn.cn/vant/cat.jpeg" />
    </div>
  </div>
</Layout>
</template>

<script>
// <page-query>
// query ($id: ID!) {
//   post: strapiPost(id: $id) {
//     id
//     content
//     title
//     created_at
//   }
// }
// </page-query>
export default {
 computed: {
  //  post () {
  //    return this.$page.post
  //  }
 }
}
</script>

<style>
.page-detail {
  width: 1170px;
  margin: 100px auto;
}
.title {
  text-align: center;
}
.content {
  margin: 20px 0;
}

.img {
  text-align: center;
  margin-top: 20px;
}
</style>