<template>
  <v-app-bar
    absolute
    app
    color="primary"
    flat
    height="75"
    style="width: auto;"
  >
    <v-toolbar-title
      style="width: 150px"
    >
      <!--LOGO DE LA EMPRESA-->
      <v-img
        :src="require('@/assets/img/Imagen1.png')"
        class="mr-5"
        contain
        height="350"
        width="500"
        max-width="150"
        @click="$vuetify.goTo(0)"
      />
    </v-toolbar-title>
    <!--OPCIONES DE NAVEGACION-->
    <div class="text-left">
      <v-btn
        class="ml-2"
        min-width="0"
        text
        to="/p/home"
      >
        Home
        <v-icon right>
          mdi-home
        </v-icon>
      </v-btn>
      <v-btn
        class="ml-2"
        min-width="0"
        text
        to=""
      >
        About
        <v-icon right>
          mdi-home-modern
        </v-icon>
      </v-btn>
      <v-btn
        class="ml-2"
        min-width="0"
        text
        to="/p/catalogue"
      >
        Catalogue
        <v-icon right>
          mdi-cart
        </v-icon>
      </v-btn>
      <v-btn
        class="ml-2"
        min-width="0"
        text
        to=""
      >
        Dashboard
        <v-icon right>
          mdi-view-dashboard
        </v-icon>
      </v-btn>
    </div>
    <!--BUSCADOR-->
    <v-text-field
      flat
      solo-inverted
      hide-details
      prepend-inner-icon="mdi-magnify"
      label="Search"
      class="hidden-sm-and-down pl-10 ml-4"
    />
    <div class="mx-3" />
    <v-btn
      class="ml-2"
      min-width="0"
      text
      to=""
    >
      Sing up
      <v-icon right>
        mdi-account-circle
      </v-icon>
    </v-btn>
    <v-btn
      class="ml-2"
      min-width="0"
      text
      to=""
    >
      Sing in
      <v-icon right>
        mdi-account
      </v-icon>
    </v-btn>
    <v-menu
      bottom
      left
      min-width="200"
      offset-y
      origin="top right"
      transition="scale-transition"
    >
      <template v-slot:activator="{ attrs, on }">
        <v-btn
          min-width="0"
          text
          v-bind="attrs"
          style="backgraung:cornflowerblue"
          v-on="on"
        >
          <v-icon>mdi-account</v-icon>
        </v-btn>
      </template>

      <v-list
        :tile="false"
        flat
        nav
      >
        <template v-for="(p, i) in profile">
          <v-divider
            v-if="p.divider"
            :key="`divider-${i}`"
            class="mb-2 mt-2"
          />

          <app-bar-item
            v-else
            :key="`item-${i}`"
            to="/home/users/profile"
          >
            <v-list-item-title v-text="p.title" />
          </app-bar-item>
        </template>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
  // Components
  import { VHover, VListItem } from 'vuetify/lib'

  // Utilities
  import { mapState, mapMutations, mapGetters } from 'vuex'

  export default {
    name: 'HomeCoreAppBar',

    components: {
      AppBarItem: {
        render (h) {
          return h(VHover, {
            scopedSlots: {
              default: ({ hover }) => {
                return h(VListItem, {
                  attrs: this.$attrs,
                  class: {
                    'black--text': !hover,
                    'white--text secondary elevation-12': hover,
                  },
                  props: {
                    activeClass: '',
                    dark: hover,
                    link: true,
                    ...this.$attrs,
                  },
                }, this.$slots.default)
              },
            },
          })
        },
      },
    },

    props: {
      value: {
        type: Boolean,
        default: false,
      },
    },

    data: () => ({
      notifications: [
        'Mike John Responded to your email',
        'You have 5 new tasks',
        `You're now friends with Andrew`,
        'Another Notification',
        'Another one',
      ],
      profile: [
        { title: 'Profile' },
        { title: 'Settings' },
        { divider: true },
        { title: 'Log out' },

      ],
    }),

    computed: {
      ...mapState(['drawer']),
      ...mapGetters(['links']),
    },

    methods: {
      ...mapMutations({
        setDrawer: 'SET_DRAWER',
      }),
    },
  }
</script>
