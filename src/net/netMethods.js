import { $get, $post, $upload, $all } from './netInit'

const requests = {
  $get,
  $post,
  $upload,
  $all
}

export default {
  install (Vue) {
    Object.keys(requests).forEach(key => {
      Vue.prototype[key] = requests[key]
    })
  }
}
