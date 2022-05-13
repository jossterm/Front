<template>
  <v-container
    id="data-tables"
    tag="section"
  >
    <base-material-card
      color="indigo"
      icon="mdi-vuetify"
      inline
      class="px-5 py-3"
    >
      <template v-slot:after-heading>
        <div class="roles">
          {{ title }}
        </div>
      </template>

      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        class="ml-auto"
        label="BUSCAR"
        hide-details
        single-line
        style="max-width: 250px;"
      />

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
          <v-btn

            :key="1"
            color="blue"
            fab
            class="px-1 ml-1"
            x-small
            @click="showRole(item)"
          >
            <v-icon
              small
              v-text="'mdi-eye'"
            />
          </v-btn>
          <v-btn

            :key="2"
            color="primary"
            fab
            class="px-1 ml-1"
            x-small
            @click="editRole(item)"
          >
            <v-icon
              small
              v-text="'mdi-pencil'"
            />
          </v-btn>
          <v-btn

            :key="3"
            color="secondary"
            fab
            class="px-1 ml-1"
            x-small
            @click="deleteRoles(item)"
          >
            <v-icon
              small
              v-text="'mdi-delete'"
            />
          </v-btn>
        </template>
      </v-data-table>
      <v-card-text style="height: 100px; position: relative">
        <v-fab-transition>
          <v-btn
            fab
            dark
            large
            color="primary"
            fixed
            right
            bottom
            @click="createRole"
          >
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </v-fab-transition>
      </v-card-text>
    </base-material-card>
  </v-container>
</template>

<script>
  import { getRoles, deleteRoles } from '@/api/modules'
  
  import i18n from '@/i18n'

  export default {
    name: 'DashboardDataTables',
    
    data: () => ({
      hidden: false,
      title:'Roles',
      headers: [
        {
          text: i18n.t('ID'),
          value: 'id',
        },
        {
          text: i18n.t('NOMBRE'),
          value: 'nombre',
        },

        {
          sortable: false,
          text: 'ACCIONES',
          value: 'actions',
        },
      ],
      items: [],
      search: undefined,
    }),
    async mounted () {
      // window.getApp.$emit("SHOW_ERROR", "34534535")
        await this.loadRolesData();
    },
    methods: {
      async loadRolesData () {
        let serviceResponse = await getRoles()
        if (serviceResponse) {
          this.items = Object.values(serviceResponse)
        } else {

          const params = { text: serviceResponse.message.text }
          window.getApp.$emit('SHOW_ERROR', params)
        }
      },
      createRole () {
        console.log('create')
        this.$router.push({
          name: 'RolesForm',
          params: {
            option: 1, // option 1 to create
            
          },
        })
      },
      showRole (item) {
        console.log(item)
        this.$router.push({
          name: 'RolesForm',
          params: {
            option: 2, // option 2 to show
            roleData: item,
          },
        })
      },
      editRole (item) {
        console.log(item)
        this.$router.push({
          name: 'RolesForm',
          params: {
            option: 3, // option 3 to edit
            roleData: item,
          },
        })
      },
      async deleteRoles (item) {
         if (confirm("¿Seguro que desea eliminar este Item?")) {
        let serviceResponse = await deleteRoles(item);
        if (serviceResponse) {
          window.getApp.$emit("SHOW_MESSAGE", { text: "Item eliminado" });
          this.loadRolesData();
        } else {
          const params = { text: "Error: Registro no eliminado" };
          window.getApp.$emit("SHOW_ERROR", params);
        }
      }
      },
    },
  }
</script>

<style>
/* .theme--dark.v-card {
  background: #ffff !important;
} */
.roles {
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
