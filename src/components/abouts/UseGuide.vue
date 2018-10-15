<template>
  <div class="hello">
    <h1>&copy;{{ info }}</h1>
    
  </div>
</template>

<script>
export default {
  name: 'UseGuide',
  data () {
    return {
      info: '这里是用户使用手册'
    }
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
