<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">This is a heavy page</h1>
      <pre>{{ JSON.stringify(jsonData[0], null, 2) }}</pre>
      <b-button>Bulma Button</b-button>
    </div>
  </div>
</template>

<script>
import jsonData from '~/data.json'

export default {
  data: () => ({
    jsonData,
  }),
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
</style>
