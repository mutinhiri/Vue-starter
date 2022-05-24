const change = Vue.createApp({
  template: '<h1>Hello World </h1>'
})


const app = Vue.createApp({
  // template: '<h1>Hello {{firstName}} </h1>',
  data() {
    return {
      firstName: 'John',
      lastName: 'Mafuta',
      email: 'john@gmail.com',
      gender: 'male',
      picture: 'https://randomuser.me/api/portraits/men/10.jpg'

    }
  },
  methods: {
    getUser() {
      console.log('user logged in ')
      // template: '<h1>Hello World</h1>'
    }
  }
})

let x= 1

if (x < 2) {
  app.mount('#app')
}
else {
  change.mount('#app')
}

