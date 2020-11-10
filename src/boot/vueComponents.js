import DialogWrapper from '../components/dialogs/DialogWrapper.vue'
import CustomErrorWarning from '../components/CustomErrorWarning.vue'

export default ({ Vue }) => {
  Vue.component('DialogWrapper', DialogWrapper)
  Vue.component('CustomErrorWarning', CustomErrorWarning)
}
