<template>
  <div id="app">
    <input type="text" v-model="mytodo" @keyup.enter="handleClick" />
    <button @click="handleClick">添加</button>
    <ul>
      <li :class="{'done': todo.done}" @click="toggle(index)" v-for="(todo, index) in todos" :key="index">{{index}}.{{todo.text}}</li>
    </ul>
    <p>{{remains}}/{{todos.length}}</p>
    <button @click="handleClear">清空</button>
  </div>
</template>

<script>
export default {
  name: "TodoList",
  data() {
    return {
      mytodo: "",
      todos: [
        { text: "吃饭", done: false },
        { text: "睡觉", done: false },
        { text: "打豆豆", done: false }
      ]
    };
  },
  computed: {
    remains() {
      return this.todos.filter(v => !v.done).length;
    }
  },
  methods: {
    handleClick() {
      this.todos.push({ text: this.mytodo, done: false });
      this.mytodo = "";
    },
    toggle(i) {
      this.todos[i].done = !this.todos[i].done;
    },
    handleClear() {
      this.todos = this.todos.filter(todo => !todo.done);
    }
  }
};
</script>

<style>
ol,
ul {
  list-style: none;
}
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
li {
  text-align: center;
}
li.done {
  text-decoration: line-through;
}
</style>
