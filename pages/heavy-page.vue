<template>
  <div class="container">
    <div>
      <b-button @click="showHeavyComponent = !showHeavyComponent">
        Click me to show heavy component
      </b-button>
      <br />
      <i>Component is loaded with the page</i>
      <br />
    </div>
    <HeavyComponent v-if="showHeavyComponent" />
  </div>
</template>

<script>
import HeavyComponent from '~/components/HeavyComponent'
import e from '~/data/1mb-e.json'

export default {
  components: { HeavyComponent },
  data: () => ({
    showHeavyComponent: false,
  }),
  created() {
    this.json = { e }
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
</style>
