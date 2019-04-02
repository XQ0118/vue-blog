<template>
  <div id="show-blogs">
    <h1>博客总览</h1>
    <input type="text" class="search" placeholder="搜索"
    v-model="search">
    <div class="single-blog" v-for="blog in filterBlogs" :key="blog.id">
        <h3 v-rainbow>{{blog.title | to-uppercase}}</h3>
        <article>
            {{blog.body | snippet}}
        </article>
    </div>
  </div>
</template>

<script>
export default {
  name: "show-blogs",
  data() {
      return {
          blogs: [],
          search:''
      }
  },
  created() {
      this.$http.get("http://jsonplaceholder.typicode.com/posts")
      .then(function(data) {
          this.blogs = data.body.slice(0, 10);
          console.log(this.blogs);
      })
  },
  //计算属性
  computed: {
      filterBlogs: function() {
          //ES6有一个filter属性match属性
          return this.blogs.filter((blog) => {
              return blog.title.match(this.search)
          })
      }
  },
  //局部filter
  filters: {
      'to-uppercase': function(value) {
          return value.toUpperCase();
      },
      //ES6写法
      snippet(value) {
          return value.slice(0, 100) + '...';
      }
  },
  directives: {
      'rainbow': {
          bind(el) {
             el.style.color = '#' + Math.random().toString(16).slice(2, 8);  
          }
      }
  }
};
</script>

<style>
#show-blogs {
    max-width: 800px;
    margin:0 auto;
}

.single-blog {
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background-color: #eee;
}

</style>
