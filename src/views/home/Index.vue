<template>
  <v-app>
    <home-core-app-bar v-model="expandOnHover" />

    <home-core-view />

    <home-core-footer v-model="expandOnHover" />
  </v-app>
</template>

<script>
  export default {
    name: 'HomeIndex',

    components: {
      HomeCoreAppBar: () => import('./components/core/AppBar'),
      HomeCoreView: () => import('./components/core/View'),
      HomeCoreFooter: () => import('./components/core/Footer'),
    },

    data: () => ({
      expandOnHover: false,
    }),
  }
</script>
