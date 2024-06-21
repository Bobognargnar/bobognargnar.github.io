<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <!-- <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        /> -->

        <q-toolbar-title>
          <q-toolbar inset>
            <q-toolbar-title class="toolbar-name">
              Fabrizio La Rosa
            </q-toolbar-title>
          </q-toolbar>
          <q-toolbar inset>
              <q-toolbar-title class="toolbar-job">
                Backend Developer - Software Engineer
              </q-toolbar-title>
          </q-toolbar>
          <q-toolbar inset>
              <q-toolbar-title class="toolbar-links">
                <q-avatar flat round dense icon="phone" class="q-mr-xs"/>
                <q-text style="margin-right: 2%;" >+39 349 8661112</q-text>
                <q-avatar flat round dense icon="mail" class="q-mr-xs"/>
                <q-text style="margin-right: 2%;" >fbr.larosa@gmail.com</q-text>
                <q-btn flat round dense icon="fa-brands fa-github" class="q-mr-xs" @click="openGithub"/>
                <q-btn flat round dense icon="fab fa-linkedin" class="q-mr-xs" @click="openLinkedIn"/>
              </q-toolbar-title>
          </q-toolbar>
        </q-toolbar-title>

        <q-tabs
          v-model="tab"
          shrink
          narrow-indicator
        >
          <!-- <EssentialTab
            v-for="link in essentialLinks"
            :key="link.title"
            v-bind="link"
          ></EssentialTab> -->
        </q-tabs>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      :show-if-above="false"
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Essential Links
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
// import { defineComponent } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'
// import EssentialTab from 'components/EssentialTab.vue'

const linksList = [
  {
    title: 'Home',
    caption: '',
    icon: 'home',
    routeName: 'home'
  },
  {
    title: 'Github',
    caption: 'github.com/bobognargnar',
    icon: 'fa-brands fa-github',
    target: '_blank',
    routeName: 'https://github.com/Bobognargnar'
  },
  {
    title: 'Linkedin',
    caption: 'fabrizio-la-rosa-a369839',
    icon: 'fab fa-linkedin',
    target: '_blank',
    routeName: 'https://www.linkedin.com/in/fabrizio-la-rosa-a369839/'
  },
  {
    title: 'Three Demo',
    caption: 'a page',
    icon: 'code',
    routeName: 'three'
  }
]

export default {
  name: 'MainLayout',

  components: {
    EssentialLink
    // ,EssentialTab
  },
  data () {
    return {
      leftDrawerOpen: undefined
    }
  },
  methods: {
    openLinkedIn () {
      window.open('https://www.linkedin.com/in/fabrizio-la-rosa-a369839/', '_blank')
    },
    openGithub () {
      window.open('https://github.com/Bobognargnar', '_blank')
    }
  },
  setup () {
    // const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      // leftDrawerOpen,
      toggleLeftDrawer () {
        console.log('toggle drwaer')
        console.log('status was ' + this.leftDrawerOpen.value)
        this.leftDrawerOpen.value = !this.leftDrawerOpen.value
      }
    }
  }
}
</script>

<style>

.q-toolbar__title {
    text-align: center;
    /* font-size: xx-large; */
  }

.toolbar-name {
    /* text-align: center; */
    font-size: 5rem;
  }
.toolbar-job {
    font-size: 2rem;
  }

.toolbar-links {
  text-align: center;
  vertical-align: middle;
  font-size: 1.2rem;

  vertical-align: middle;
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>
