<template>
  <div>
    <h1>mpvue todolist</h1>
    <TodoList />
  </div>
</template>

<script>
import TodoList from '@/components/TodoList'

export default {
  components: {
    TodoList
  }
}
</script>

<style>
  h1{
    color: red;
  }
</style>

