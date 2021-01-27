<template>
  <div class="container">
    <div>
      <b-button @click="showHeavyComponent = !showHeavyComponent">
        Click me to load heavy component!
      </b-button>
      <br />
      <i>Component is loaded on demand with loading indicator</i>
      <br />
    </div>
    <AsyncHeavyComponent v-if="showHeavyComponent" />
  </div>
</template>

<script>
import Loading from '~/components/Loading'
import Error from '~/components/Error'
const AsyncHeavyComponent = () => ({
  component: import('~/components/HeavyComponent.vue'),
  loading: Loading,
  error: Error,
  delay: 200,
  timeout: 3000,
})

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
