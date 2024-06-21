<template>
  <q-page padding class="">
    <div class="card-container">
    <q-card bordered class="">
      <q-card-section>
        <div class="text-h6">About Me</div>
      </q-card-section>
      <q-card-section>
        {{ bio }}
      </q-card-section>
    </q-card>
    <q-separator vertical inset></q-separator>
    <q-card bordered class="">
      <q-card-section>
        <div class="text-h6">Experience</div>
        <div class="text-subtitle2">by John Doe</div>
      </q-card-section>
      <q-card-section>
        {{ bio }}
      </q-card-section>
    </q-card>
  </div>
  </q-page>
</template>

<script>

export default {
  name: 'IndexPage',
  setup () {
    return {
      bio: 'I am a software engineer with 9 years of experience working multiple roles in the oil&gas andmedia fields. I love writing beautiful, clean code and solving complex real world problems. I’m not afraid to challenge myself and go outside of my comfort zone.'
    }
  }
}
</script>

<style scoped>
.card-container {
}
</style>
