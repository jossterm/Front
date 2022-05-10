<template>
  <v-container
    id="role-profile"
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
                mdi-account-key
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
                    sm="4"
                  >
                    <v-text-field
                      v-model="roleData.nombre"
                      class="purple-input"
                      :label="$t('NOMBRE')"
                      :disabled="option===2?true:false"
                    />
                  </v-col>

                  <!-- <v-col
                    cols="12"
                    sm="6"
                  > 
       <v-data-table
        v-model= selectedTasks
        :headers="headers"
        :items="modulos"
        :search.sync="search"
        :sort-by="['name', 'office']"
        :sort-desc="[false, true]"
        item-key="id"
        show-select
        multi-sort
        class="elevation-1"
      >

      <template v-slot:body="{ items }">
            <tbody>
                <tr v-for="item in items" :key="item.id">
                    <td>
                        <v-checkbox v-model="selectedTasks" :value="items" style="margin:0px;padding:0px"
                            hide-details />
                    </td>
                    <td>{{ item.id }}</td>
                    <td>
                        <v-btn text >
                          {{item.nombre}}
                        </v-btn>
                    </td>
                </tr>
            </tbody>
            </template>

         
      </v-data-table> 
                  </v-col> -->

                  
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
                </v-row>
              </v-container>
            </v-form>
            
          </v-tab-item>
             <v-tab-item :kei="1">
               <v-row>    
              </v-row>
          </v-tab-item>
        </v-tabs-items>
      </base-material-card>
    </v-row>
    
  </v-container>
</template>

<script>
  import i18n from '@/i18n'
  import { editRoles, createRoles } from '@/api/modules'

  export default {
    
    data: () => ({
      tabs: 0,
      option: 0,
      title: '',
      roleData:{
        id:'',
        nombre:''
      },
    
     
    }),
    computed: {
      getTitle () {
        if (this.option === 1) return i18n.t('roles.create')
        else if (this.option === 2) return i18n.t('roles.show')
        else if (this.option === 3) return i18n.t('roles.edit')
        else return i18n.t('roles.title')
      },
      getTitleButton () {
        if (this.option === 1) return i18n.t('crud.create')
        else if (this.option === 2) return i18n.t('crud.show')
        else if (this.option === 3) return i18n.t('crud.edit')
        else return i18n.t('roles.title')
      },
    },
    mounted () {
      this.initialize()
      this.loadModulosData()
    },
    methods: {
      initialize () {
        this.option = this.$route.params.option
        if (this.option === 3 || this.option === 2) {
          this.roleData = this.$route.params.roleData
          console.log(this.roleData)
        }
      },
      async submit () {
        if (this.option === 1) {
          let serviceResponse = await createRoles(this.roleData)
          if (serviceResponse) {
            console.log(serviceResponse)
            window.getApp.$emit('SHOW_MESSAGE', { text: 'Guardado con éxito'});
            this.$router.go(-1);
          } else {
            console.log(serviceResponse)
            const params = { text: serviceResponse.message.text }
            window.getApp.$emit('SHOW_ERROR', params)
          }
        } else if (this.option === 3) {
          let serviceResponse = await editRoles(this.roleData)
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
      
     async loadModulosData () {
   let serviceResponse = await getModulos()
     if (serviceResponse) {
     this.modulos = Object.values(serviceResponse);
  } else {
      const params = { text: serviceResponse.message.text }
          window.getApp.$emit('SHOW_ERROR', params)
         }
      },

       async GuardarRolModulo() {
       if (this.option === 1) {
      let serviceResponse = await createRolModulo(this.roleData.id,this.modulos.id)
         if (serviceResponse) {
         console.log(serviceResponse)
           window.getApp.$emit('SHOW_MESSAGE', { text: 'Guardado con éxito'});
           this.$router.go(-1);
        }
     }
   }, 

    async loadRolModulosData () {
        let serviceResponse = await getRolModulos(this.roleData.id)
        if (serviceResponse) {
        this.rolmodulos = Object.values(serviceResponse);
        } else {
        const params = { text: serviceResponse.message.text }
          window.getApp.$emit('SHOW_ERROR', params)
        }
      },

   }
    }
    
</script>
