<template>
  <v-container
    id="data-tables"
    tag="section" 
  >
    <base-material-card
      color="#45818E"
      icon="mdi-account-supervisor"
      inline
      class="px-5 py-3"      
    >
      <template v-slot:after-heading>
        <div class="users">
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
            @click="showUser(item)"
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
            @click="editUser(item)"
          >
            <v-icon
              small
              v-text="'mdi-pencil'"
            />
          </v-btn>
          <v-btn

            :key="3"
            color="#CC0000"
            fab
            class="px-1 ml-1"
            x-small
            @click="deleteUser(item)"
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
            color="#45818E"
            fixed
            right
            bottom
            @click="createUser"
          >
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </v-fab-transition>
      </v-card-text>
    </base-material-card>
  </v-container>
</template>

<script>
  import { getUsers, deleteUsers} from '@/api/modules'
  import i18n from '@/i18n'

  export default {
    name: 'DashboardDataTables',

    data: () => ({
      hidden: false,
      title: 'Usuarios',
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
          text: i18n.t('APELLIDO'),
          value: 'apellido',
        },
        {
          text: i18n.t('CORREO'),
          value: 'correo',
        },
        {
          text: i18n.t('TELÉFONO'),
          value: 'telefono',
        },
        {
          text: i18n.t('CARGO'),
          value: 'cargo',
        },
        {
          text: i18n.t('ROL'),
          value: 'idRol',
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
      await this.loadUsersData();
    },
    methods: {
      async loadUsersData () {
        let serviceResponse = await getUsers();
         if (serviceResponse) {
          this.items = Object.values(serviceResponse);
           //console.log(this.items)
         } else {
           //console.log(serviceResponse)
           const params = { text: serviceResponse.message.text }
           window.getApp.$emit('SHOW_ERROR', params)
         }
      },
      createUser () {
        console.log('create')
        this.$router.push({
          name: 'UsersFrom',
          params: {
            option: 1, // option 1 to create
          },
        })
      },
      showUser (item) {
        console.log(item)
        this.$router.push({
          name: 'UsersFrom',
          params: {
            option: 2, // option 2 to show
            userData: item,
          },
        })
      },
      editUser (item) {
        console.log(item)
        this.$router.push({
          name: 'UsersFrom',
          params: {
            option: 3, // option 3 to edit
            userData: item,
          },
        })
      },
     async deleteUser (item) {
        if (confirm("¿Seguro que desea eliminar este Usuario?")) {
        let serviceResponse = await deleteUsers(item);
        if (serviceResponse) {
          window.getApp.$emit("SHOW_MESSAGE", { text: "Usuario eliminado" });
          this.loadUsersData();
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
.users {
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
