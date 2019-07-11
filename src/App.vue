<template>
  <div id="app">
    <ul>
      <li v-for="item in Cates" :key="item.cid">
        <span>商品：{{item.cname}}</span>
        <span>描述：{{item.cdesc}}</span>
      </li>
    </ul>
    <router-view/>
  </div>
</template>
<script>
import api from "./api"


export default {
  data(){
    return {
      Cates:[]
    }
  },
  mounted(){
   api.getCate().then(res=>{
     this.Cates=res
     console.log(this.Cates);
   })
   

  
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
