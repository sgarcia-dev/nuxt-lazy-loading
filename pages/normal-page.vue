<template>
  <div class="container">
    <div>
      <h1 @click="showHeavyComponent = !showHeavyComponent">
        This is a normal page that loads a heavy component. Click me to render a
        heavy component.
      </h1>
      <h2 @click="showClonedHeavyComponent = !showClonedHeavyComponent">
        Or click me to render a heavy component with a loading state
      </h2>
      <AsyncHeavyComponent v-if="showHeavyComponent" />
      <AsyncHeavierComponent v-if="showClonedHeavyComponent" />
    </div>
  </div>
</template>

<script>
import { AsyncComponent } from '~/utils/async'
// import Loading from '~/components/Loading'
// import Error from '~/components/Error'
const AsyncHeavyComponent = () =>
  import(/* webpackPrefetch: true */ '~/components/HeavyComponent')
// const AsyncHeavierComponent = () => ({
//   component: import('~/components/HeavierComponent.vue'),
//   loading: Loading,
//   error: Error,
//   delay: 200,
//   timeout: 3000,
// })
const AsyncHeavierComponent = AsyncComponent(
  import('~/components/HeavierComponent')
)

export default {
  components: { AsyncHeavyComponent, AsyncHeavierComponent },
  data() {
    return {
      showHeavyComponent: false,
      showClonedHeavyComponent: false,
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
