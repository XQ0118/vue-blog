<template>
  <div id="show-blogs">
    <h1>博客总览</h1>
    <input type="text" class="search" placeholder="搜索" v-model="search">
    <div class="single-blog" v-for="blog in filterBlogs" :key="blog.id">
      <router-link v-bind:to="'/blog/' + blog.id">
        <h3 v-rainbow>{{blog.title | to-uppercase}}</h3>
      </router-link>
      <article>{{blog.content | snippet}}</article>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "show-blogs",
  data() {
    return {
      blogs: [],
      search: ""
    };
  },
  created() {
    axios
      .get("/posts.json") //返回对象
      .then(function(data) {
        console.log(data.data);
        return data.data;
      })
      .then(data => {
        var blogsArray = [];
        for (let key in data) {
          //   console.log( key)
          //   console.log(data[key])
          data[key].id = key;
          blogsArray.push(data[key]);
        }
        console.log(blogsArray);
        this.blogs = blogsArray;
        console.log(this.blogs);
      });
  },
  //计算属性
  computed: {
    filterBlogs: function() {
      //ES6有一个filter属性match属性
      return this.blogs.filter(blog => {
        return blog.title.match(this.search);
      });
    }
  },
  //局部filter
  filters: {
    "to-uppercase": function(value) {
      return value.toUpperCase();
    },
    //ES6写法
    snippet(value) {
      return value.slice(0, 100) + "...";
    }
  },
  directives: {
    rainbow: {
      bind(el) {
        el.style.color =
          "#" +
          Math.random()
            .toString(16)
            .slice(2, 8);
      }
    }
  }
};
</script>

<style>
#show-blogs {
  max-width: 800px;
  margin: 0 auto;
}

.single-blog {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background-color: #eee;
  border: 1px dotted #aaa;
}

#show-blogs a {
  /* color: #444; */
  text-decoration: none;
}

input[type="text"] {
  padding: 8px;
  width: 100%;
  box-sizing: border-box;
}
</style>
