<template>
  <header>
    <h1>Task Tracker {{title}}</h1>
    <Button text="Add tasker" color="green"/>
  </header>
</template>

<script>
import Button from './Button'
  export default {
    // eslint-disable-next-line
    name: 'Header',
    props: {
      title: String
    },
    components: {
      Button
    }
  }
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
</style>