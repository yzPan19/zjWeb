<template>
  <div class="hello">
    <h2>非父子组件间的传值</h2>
    <p>
      非父子组件间的传值：使用公共汽车(bus)
      需要写一个bus.js文件
    </p>
    <login></login>
    <hr>
    <detail></detail>
  </div>
</template>

<script>
import Login from './login'
import Detail from './common/header_details'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    'login': Login,
    'detail': Detail
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
