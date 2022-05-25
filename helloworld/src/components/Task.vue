<template>
  <div :class="[task.reminder ? 'reminder' : '', 'task']">
    <h3> {{ task.text }} 
      <i @click="onDelete" class="fas fa-times"></i>
    </h3>
    <p>{{ task.day }} </p>
  </div>
</template>

<script>
export default {
  name: 'Task',
  props: {
    task: Object
  },
  methods: {
    onDelete(id) {
      this.$emit('delete-task', id )
    }
  }
}
</script>

<style scoped>
.fas {
  color: red
}

.reminder {
  color: green
}

</style>