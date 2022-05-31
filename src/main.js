import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports'; 
Amplify.configure(awsconfig);
Auth.configure(awsconfig)

createApp(App).use(router).mount('#app')
