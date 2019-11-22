import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Hello from '../components/Hello'
import LoginForm from '../components/LoginForm'

Vue.use(Router)

export default new Router({
    routes: [
        { path: '/', component: Home },
        { path: '/hello', component: Hello },
        { path: '/login', component: LoginForm },
      ]
})