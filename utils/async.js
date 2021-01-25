import Loading from '~/components/Loading'
import Error from '~/components/Error'

export { AsyncComponent }

function AsyncComponent(path) {
  return () => ({
    // The component to load (should be a Promise)
    component: () => import(path),
    // A component to use while the async component is loading
    loading: Loading,
    // A component to use if the load fails
    error: Error,
    // Delay before showing the loading component. Default: 200ms.
    delay: 200,
    // The error component will be displayed if a timeout is
    // provided and exceeded. Default: Infinity.
    timeout: 3000,
  })
}
