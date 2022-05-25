<template>
  <div class="container">
    <h1>Hello world </h1>
    <Header title="tasker"/>
    <Tasks @delete-task='deleteTask' :tasks="tasks"/>
  </div>
  
</template>

<script>
import Header from './components/Header'
import Tasks from './components/Tasks'


export default {
  name: 'App',
  components: {
    Header,
    Tasks
  },

  data() {
    return {
      tasks: []
    }
  },
  methods: {
    deleteTask(id){
      console.log('task', id)
    }
  },
  created() {
    this.tasks = [
      {
        id: 1,
        text: 'Doctors Appointment',
        day: 'March 1 2022',
        reminder: true
      }, 

      {
        id: 2,
        text: 'Meeting at work',
        day: 'June 1 2022',
        reminder: true 
      },

      {
        id: 3,
        text: 'Go to Shopping',
        day: 'July 4 2022',
        reminder: false
      }
    ]
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
