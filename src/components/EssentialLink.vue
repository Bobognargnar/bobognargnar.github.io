<template>
  <q-item
    clickable
    tag="a"
    :target="target"
    :href="routeName"
  >
    <q-item-section
      v-if="icon"
      avatar
    >
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label caption>{{ caption }}</q-item-label>
    </q-item-section>
  </q-item>
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
