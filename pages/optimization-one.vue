<template>
  <div class="container">
    <div>
      <b-button @click="showHeavyComponent = !showHeavyComponent">
        Click me to load heavy component!
      </b-button>
      <br />
      <i>Component is loaded on demand</i>
      <br />
    </div>
    <AsyncHeavyComponent v-if="showHeavyComponent" />
  </div>
</template>

<script>
const AsyncHeavyComponent = () => import('~/components/HeavyComponent')

export default {
  components: { AsyncHeavyComponent },
  data: () => ({
    showHeavyComponent: false,
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
</style>
