<template>
  <div class="container">
    <div>
      <h1 class="title" @click="showHeavyComponent = !showHeavyComponent">
        This is a normal page that loads a heavy component. Click me to render a
        heavy component.
      </h1>
      <HeavyComponent v-if="showHeavyComponent" />
    </div>
  </div>
</template>

<script>
const HeavyComponent = () => import('~/components/HeavyComponent')

export default {
  components: { HeavyComponent },
  data() {
    return {
      showHeavyComponent: false,
    }
  },
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
