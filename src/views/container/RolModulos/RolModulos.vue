<template>
  <v-container
    id="data-tables"
    tag="section"
  >
    <base-material-card
      color="#45818E"
      icon="mdi-account-details-outline"
      inline
      class="px-5 py-3"
    >
      <template v-slot:after-heading>
        <div class="title">
          {{ title }}
        </div>
      </template>
      <div class="row">
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        class="ml-auto"
        label="BUSCAR"
        hide-details
        single-line
        style="max-width: 250px;"
      />

      </div>

      <v-divider class="mt-3" />

      <v-data-table
        :headers="headers"
        :items="items"
        :search.sync="search"
        :sort-by="['name', 'office']"
        :sort-desc="[false, true]"
        multi-sort
        class="elevation-1"
      >

      <template v-slot:item.actions="{ item }">
          <v-fab-transition>

          </v-fab-transition>
          <v-fab-transition>
            <v-tooltip top>
           <template v-slot:activator="{ on }">
          <v-icon
            :key="3"
            small
            fab
            color="primary"
            class="px-1 ml-1"
            v-on="on"
            @click="editRolModulo(item)"
          >
           mdi-pencil
          </v-icon>
         </template>
         <span>{{ $t("tooltip.edit") }}</span>
         </v-tooltip>
         </v-fab-transition>
      </template>
          
       </v-data-table>
    </base-material-card>
  </v-container>
</template>

<script>
  import { getRoles } from '@/api/modules'
  import i18n from '@/i18n'

  export default {
    name: 'RolModulo',
    data: () => ({
      hidden: false,
      title: 'Asignación de módulo al rol',
      headers: [
        {
          text: i18n.t('ID'),
          value: 'id',
        },
        {
          text: i18n.t('Nombre'),
          value: 'nombre',
        },

        {
          sortable: false,
          text: 'Acciones',
          value: 'actions',
        },
      ],
      items: [],
      search: undefined,
    }),
    async mounted () {
      // window.getApp.$emit("SHOW_ERROR", "34534535")
       this.loadRolesData();
    },
    methods: {
      async loadRolesData () {
        console.log('mounted');
        let serviceResponse = await getRoles();
        this.items = Object.values(serviceResponse);
        console.log(this.items);
    },
      createRolModulo () {
        console.log('create')
        this.$router.push({
          name: 'RolModulosForm',
          params: {
            option: 1, // option 1 to create
          },
        })
      },
      showRolModulo (item) {
        console.log(item)
        this.$router.push({
          name: 'ModulosForm',
          params: {
            option: 2, // option 2 to show
            //rolmoduloData: item,
          },
        })
      },
      editRolModulo (item) {
        console.log(item)
        this.$router.push({
          name: 'RolModulosForm',
          params: {
            option: 3, // option 3 to edit
           profileData: item,
          },
        })
      },
      
    },
  }
</script>

<style>
/* .theme--dark.v-card {
  background: #ffff !important;
} */
.modules {
  text-transform: uppercase;
  color: #45818E;
  font-size: 2vw;
  font-family: ''Georgia, 'Times New Roman', Times, serif;
  font-weight: 900;
}
/* .v-input__slot{
  background: #45818E !important;
}
.theme--dark.v-input:not(.v-input--is-disabled) input {
  color: black !important;
}
.theme--dark.v-data-table {
  background: #45818E!important;
} */
</style>