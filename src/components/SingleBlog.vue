<template>
    <div id="single-blog">
        <h1>{{ blog.title}}</h1>
        <article>{{ blog.content }}</article>
        <p>作者：{{blog.author}}</p>
        <p>分类：
            <ul>
                <li v-for="category in blog.categories" :key="category">{{ category }}</li>
            </ul>
        </p>
        <button @click="deleteSingleBlog">删除</button>
        <router-link v-bind:to="'/edit/'+ id"><button>编辑</button></router-link>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'single-blog',
    data() {
        return {
            id: this.$route.params.id,
            blog: {}
        }
    },
    created() {
       axios.get('/posts/'
        + this.id + '.json')
            .then((data) => {
                // console.log(data)
                // this.blog = data.body;
                // return data.data; //这里的data是一个对象
                this.blog = data.data;
            })
    },
    methods: {
        deleteSingleBlog() {
            axios.delete('/posts/'
                + this.id + '.json')
                .then(response => {
                    this.$router.push({ path:'/' })
                })
        }
    },
}
</script>

<style scoped>
#single-blog {
    max-width: 960px;
    margin: 0 auto;
    padding: 20px;
    background: #eee;
    border: 1px dotted #aaa;
}

</style>