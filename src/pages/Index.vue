<template>
  <q-page class="flex flex-center">
    
    
    <img
      @click="showDialog"
      alt="Quasar logo"
      src="~assets/quasar-logo-full.svg"
    >


  </q-page>
</template>

<script>
import { Dialog } from 'quasar'

export default {
  name: 'PageIndex',
  methods: {
    showDialog () {
      Dialog.create({
        component: 'DialogWrapper',
        dialogProps: { class: 'q-pa-lg' },
        slotComponent: 'CustomErrorWarning',
        slotEvents: (dialogWrapper) => ({
          'pressed-ok': (inputText) => {
            console.log(`inputText → `, inputText)
            dialogWrapper.hide()
          }
        }),
      })
    }
  },
}
</script>
