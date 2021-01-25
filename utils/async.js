import Loading from '~/components/Loading'
import Error from '~/components/Error'

export { AsyncComponent }

function AsyncComponent(component) {
  return () => ({
    component,
    loading: Loading,
    error: Error,
    delay: 200,
    timeout: 3000,
  })
}
