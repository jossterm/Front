<template>
  <v-container
    id="user-profile"
    fluid
    tag="section"
  >
    <v-row justify="center">
      <base-material-card icon="mdi-account-outline">
        <template v-slot:heading>
          <v-tabs
            v-model="tabs"
            background-color="#6AA84F"
            slider-color="#6AA84F"
          >
            <v-tab class="mr-3">
              <v-icon class="mr-2">
                mdi-account
              </v-icon>
              {{ getTitleButton }}
            </v-tab>
            
          </v-tabs>
        </template>

        <v-card-text style="height: 100px; position: relative">
          <v-fab-transition>
            <v-btn
              fab
              dark
              small
              color="secondary"
              absolute
              right
              top
              @click="$router.go(-1)"
            >
              <v-icon>mdi-arrow-left</v-icon>
            </v-btn>
          </v-fab-transition>
        </v-card-text>
        <v-tabs-items
          v-model="tabs"
          class="transparent"
        >
          <v-tab-item :kei="0">
            <v-form>
              <v-container class="py-0">
                <v-row>
                  
                   <v-col
                    cols="12"
                    md="6"
                  >
                    <v-text-field
                      v-model="userData.nombre"
                      :label="'Nombre'"
                      class="purple-input"
                      :disabled="option===2?true:false"
                    />
                  </v-col>

                  <v-col
                    cols="12"
                    md="6"
                  >
                    <v-text-field
                      v-model="userData.apellido"
                      :label="'Apellido'"
                      class="purple-input"
                      :disabled="option===2?true:false"
                    />
                  </v-col>

                  <v-col
                    cols="12"
                    md="6"
                  >
                    <v-text-field
                      v-model="userData.correo"
                      :label="'Correo'"
                      class="purple-input"
                      :disabled="option===2?true:false"
                    />
                  </v-col>

                   <v-col
                    cols="12"
                    md="6"
                  >
                    <v-text-field
                      v-model="userData.telefono"
                      :label="'Teléfono'"
                      class="purple-input"
                      :disabled="option===2?true:false"
                    />
                  </v-col>

                  <v-col
                    cols="12"
                    md="6"
                  >
                    <v-text-field
                      v-model="userData.cargo"
                      :label="'Cargo'"
                      class="purple-input"
                      :disabled="option===2?true:false"
                    />
                  </v-col>

                  <v-col
                    cols="12"
                    sm="12"
                    md="6"
                  >
                    <v-select
                      v-model="userData.idRol"
                      :items="role"
                      :label="'Roles'"
                      item-text="nombre"
                      item-value="id"
                      color="secondary"
                      item-color="secondary"
                      :disabled="option === 2 ? true : false"
                      :rules="[(v) => !!v || 'Debe seleccionar un Rol']"
                      
                    >
                      <template v-slot:item="{ attrs,item, on }">
                        <v-list-item
                          v-bind="attrs"
                          active-class="secondary elevation-4 white--text"
                          class="mx-3 mb-2 v-sheet"
                          elevation="0"
                          v-on="on"
                        >
                          <v-list-item-content>
                            <v-list-item-title v-text="item.nombre" />
                          </v-list-item-content>

                          <v-scale-transition>
                            <v-list-item-icon
                              v-if="attrs.inputValue"
                              class="my-3"
                            >
                              <v-icon>mdi-check</v-icon>
                            </v-list-item-icon>
                          </v-scale-transition>
                        </v-list-item>
                      </template>
                    </v-select>
                  </v-col>

                  
                </v-row>
                <v-col
                  cols="12"
                  class="text-right"
                >
                  <v-btn
                    v-if="option!==2"
                    color="#6AA84F"
                    class="mr-0"
                    @click="submit"
                  >
                    {{ getTitleButton }}
                  </v-btn>
                </v-col>
              </v-container>
            </v-form>
          </v-tab-item>
          
        </v-tabs-items>
      </base-material-card>
    </v-row>
  </v-container>
</template>

<script>
  import i18n from '@/i18n'
  import { editUsers, createUsers, getRoles } from '@/api/modules'
  import userjson from './user.json'
  export default {
    data: () => ({
      userInput: userjson.inputs,
      tabs: 0,
      option: 0,
      title: '',
      userData: {
        nombre: '',
        apellido: '',
        correo: '',
        telefono:'',
        cargo: '',
        idRol: '',
          },
      role: [],
      }
      ),
    computed: {
      getTitle () {
        if (this.option === 1) return i18n.t('users.create')
        else if (this.option === 2) return i18n.t('users.show')
        else if (this.option === 3) return i18n.t('users.edit')
        else return i18n.t('users.title')
      },
      getTitleButton () {
        if (this.option === 1) return i18n.t('crud.create')
        else if (this.option === 2) return i18n.t('crud.show')
        else if (this.option === 3) return i18n.t('crud.edit')
        else return i18n.t('users.title')
      },
    },
    mounted () {
      // console.log($t('users.title'))
      this.initialize()
      this.loadRolesData()
      
    },
    methods: {
      initialize () {
        this.option = this.$route.params.option
        if (this.option === 3 || this.option === 2) {
          this.userData = this.$route.params.userData
        }
      },
      async submit () {
        if (this.option === 1) {
          let serviceResponse = await createUsers(this.userData)
          if (serviceResponse) {
            window.getApp.$emit('SHOW_MESSAGE', { text: 'Guardado con éxito'});
            this.$router.go(-1);
            console.log(serviceResponse)
          } else {
            console.log(serviceResponse)
            const params = { text: serviceResponse.message.text }
            window.getApp.$emit('SHOW_ERROR', params)
          }
        } else if (this.option === 3) {
          let serviceResponse = await editUsers(this.userData)
          if (serviceResponse) {
            window.getApp.$emit('SHOW_MESSAGE', { text: 'Modificado con éxito'});
            this.$router.go(-1);
            console.log(serviceResponse)
          } else {
            console.log(serviceResponse)
            const params = { text: serviceResponse.message.text }
            window.getApp.$emit('SHOW_ERROR', params)
          }
        }
      },
        async loadUsersData () {
        let serviceResponse = await getUsers()
        if (serviceResponse) {
          this.items = serviceResponse;
        } else {

          const params = { text: serviceResponse.message.text }
          window.getApp.$emit('SHOW_ERROR', params)
        }
      },

      async loadRolesData () {
        let serviceResponse = await getRoles()
        if (serviceResponse) {
          this.role = Object.values(serviceResponse);
        } else {
          const params = { text: serviceResponse.message.text }
          window.getApp.$emit('SHOW_ERROR', params)
        }
      },
    }, 
  }
</script>
