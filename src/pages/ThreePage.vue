<template>
  <q-page class="flex flex-center">
    <div>This is the three page</div>
    <ThreeScene />
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import ThreeScene from 'components/ThreeScene.vue'

export default defineComponent({
  name: 'ThreePage',
  components: {
    ThreeScene
  }
})
</script>
