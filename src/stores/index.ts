// 使用createPinia创建pinia实例
import { createPinia } from 'pinia'
import { createPersistedState } from 'pinia-plugin-persistedstate'

const pinia = createPinia()
const piniaPluginPersistedstate = createPersistedState({
  storage: window.sessionStorage,
})
export { pinia, piniaPluginPersistedstate }
