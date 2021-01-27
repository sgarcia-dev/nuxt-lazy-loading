<template>
  <div class="container">
    <div>
      <button @click="showHeavyComponent = !showHeavyComponent">
        Click me to load heavy component!
      </button>
    </div>
    <HeavyComponent v-if="showHeavyComponent" />
  </div>
</template>

<script>
import HeavyComponent from '~/components/HeavyComponent'
import e from '~/data/1mb-e.json'

export default {
  components: { HeavyComponent },
  created() {
    this.json = { e }
  },
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
