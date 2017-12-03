<template>
  <div id="app">
    <h1> Welcome to AMVAN </h1>
    <navbar/>
    <router-view/>
  </div>
</template>

<script>
import navbar from '@/components/navbar'
import './firebase'
export default {
  components: {
    navbar
  },
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
