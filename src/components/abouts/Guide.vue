<template>
  <div class="hello">
    <h1>&copy;{{ info }}</h1>
    
  </div>
</template>

<script>
export default {
  name: 'Guide',
  data () {
    return {
      info: 'Copyright 这里是法律条款'
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
