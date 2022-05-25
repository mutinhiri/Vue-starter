<template>
  <h3> {{ task.text }}</h3>
  <p>{{ task.day }} </p>
</template>

<script>
export default {
  name: 'Task',
  props: {
    task: Object
  }
}
</script>