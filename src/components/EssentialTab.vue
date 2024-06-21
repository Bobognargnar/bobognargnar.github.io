<template>
  <q-tab
    :icon=icon
    name="something"
  >
  </q-tab>
</template>

<script>

export default {
  name: 'EssentialLink',
  props: {
    title: {
      type: String,
      required: true
    },

    caption: {
      type: String,
      default: ''
    },

    target: {
      type: String,
      default: '_self'
    },

    icon: {
      type: String,
      default: ''
    },
    routeName: {
      type: String,
      default: ''
    }
  }
}
</script>
