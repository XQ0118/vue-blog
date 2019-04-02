<template>
  <div id="add-blog">
    <h2>add-blog</h2>
    <form v-if="!submited">
      <label>Title</label>
      <input type="text" v-model="blog.title" required>
      <label>Content</label>
      <textarea v-model="blog.content"></textarea>

      <div id="checkbox">
        <label>Vue.js</label>
        <input type="checkbox" value="Vue.js" v-model="blog.categories">
        <label>React.js</label>
        <input type="checkbox" value="React.js" v-model="blog.categories">
        <label>Node.js</label>
        <input type="checkbox" value="Node.js" v-model="blog.categories">
        <label>Angular.js</label>
        <input type="checkbox" value="Angular.js" v-model="blog.categories">
      </div>

      <label>Author:</label>
      <select v-model="blog.author">
          <option v-for="author in authors" :key="author.id">
              {{ author }}
          </option>
      </select>

      <button @click.prevent="post" >添加博客</button>
    </form>

    <div v-if="submited">
        <h3>您的博客发布成功</h3>
    </div>
    <hr>

    <div id="preview">
      <h3>博客总览</h3>
      <p>title: {{ blog.title }}</p>
      <p>content</p>
      <p>{{ blog.content }}</p>
      <p>博客分类</p>
      <ul>
          <li v-for="category in blog.categories" :key="category.id">
              {{ category }}
          </li>
      </ul>
      <p>作者: {{blog.author}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "add-blog",
  data() {
    return {
      blog: {
        title: "",
        content: "",
        categories: [], //分类数组
        author: '',
      },
      authors: ['whh', 'shuan dan', '77', 'xq'],
      submited: false,
    };
  },
  methods: {
      //http://jsonplaceholder.typicode.com/
      post: function() {
          this.$http.post("http://jsonplaceholder.typicode.com/posts", {
              title: this.blog.title,
              body: this.blog.content,
              userId: 1
          })
          .then(function(data) {
              console.log(data);
              this.submited = true;
          });
      }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#add-blog * {
    box-sizing: border-box;
}

#add-blog {
    margin: 0px auto;
    max-width: 600px;
    padding: 20px;
}

label {
    display: block;
    margin: 20px 0 10px 0;
}

input[type="text"], textarea, select {
    display: block;
    width: 100%;
    padding: 8px;
}

textarea {
    height: 200px;
}

#checkbox label {
    display: inline-block;
    margin-top: 0;
}

#checkbox input {
    display: inline-block;
    margin-right: 10px;
}

button {
    display: block;
    margin: 20px 0;
    background: #0e922f;
    color: aliceblue;
    border: 0;
    padding: 12px;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
}

#preview {
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}

h3 {
    margin-top: 10px;
}
</style>
