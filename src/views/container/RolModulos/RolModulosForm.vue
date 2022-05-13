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
                    sm="6"
                  > 
       <v-data-table
        v-model= "optionsSelect"
        :headers="headers"
        :items="items"
        :sort-by="['name', 'office']"
        :sort-desc="[false, true]"
        item-key="idModulo"
        show-select
        multi-sort
        class="elevation-1"
        @toggle-select-all="selectAllPermissions"
      >

      <template v-slot:[`item.data-table-select`]= "{select,item}">
            
         <v-simple-checkbox
         v-model="item.id"
         color="primary"
         style="margin-top: 0px; margin-bottom: 0px"
        @input="select(selectCheck(item, $event))"
        :ripple="false" />
                    
   </template>

         </v-data-table> 
                  </v-col>

                  
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
                     Guardar
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
import { getModulos, editRolModulo, getRolModulo } from '@/api/modules'

  export default {
    
    data: () => ({
      tabs: 0,
      option: 0,
      title: '',
      optionsSelect:[],
       headers: [
         {
        text:"ID",
        value:"id",
        },
        {
          text:"MÓDULO",
          value:"nombre",
        },
       ],
       profileData:{
         idRol:0,
         nombre:'',
       },
       items:[],
       initialItems:[],
       searchLabel:"Buscar",
    
      }),
    computed: {},
      
    async mounted () {
      this.initialize();
      this.loadItemsData();
    },
    methods: {
      selectAllPermissions(e){
        if(e.value){
          this.items.forEach((item) => {item.default=true; item.id = true})

        }else{
          this.items.forEach((item) => {item.default = true; item.id = false})
        }
      },

      async loadItemsData(){
        let serviceResponse = await getModulos();
        if(serviceResponse){
          let modules = Object.values(serviceResponse)
            modules =  modules.map((el,index) => {return{
            idModulo: el.id,
            nombre: el.nombre,
            default: true
          }})
         
          this.items= modules
          // this.filterItemsSelectables(this.initialItems);
          let serviceResponse2 = await getRolModulo(this.profileData.idRol);
          let ModulosbyID = Object.values(serviceResponse2)
            ModulosbyID = ModulosbyID.map((el) => {return{
            idModulo: el.id,
            nombreModulo: el.nombre,
            default: false
          }})
          console.log (ModulosbyID)
          this.optionsSelect = ModulosbyID
          this.items = this.items.map((item) => {
            let a = item
            this.optionsSelect.forEach((selectedItem) => {
              if(item.idModulo === selectedItem.idModulo){
                a = {...selectedItem,
                  nombre: item.nombre,
                  default: true,
                  }
                }
            })
            return a
          })
          console.log(this.optionsSelect);
        } else{
          console.log(serviceResponse);
          const params = { text: serviceResponse.message};
          window.getApp.$emit("SHOW_ERROR",params);
        }
      },
      initialize () {
        this.profileData = this.$route.params.profileData;
        console.log(this.profileData);
        this.title = "Rol:" + this.profileData.nombre;    
      },

      selectCheck(item, selection){
        item.default = false;
        if(selection){
          item.id = true;
          this.optionsSelect.push(item);
        }else {item.id = false;}
        return selection
      },
      async submit () {
        let body =[];
        console.log(this.optionsSelect);
       /*this.optionsSelect.map((item) => {
         body.push({
            perfilId: this.profileData.id,
            idModulo: item.idModulo,
            activo: true,
            permisoId: item.permisoId
            
          });*/

          this.items.forEach((item) => {
            if(item.default){
              body.push({
                idRol: this.profileData.idRol,
                id : item.id,
                activo: item.permiso,
                permisoId: item.permisoId

              });
            }
          })
          let serviceResponse = await editRolModulo(this.profileData.idRol);
          console.log(serviceResponse);
          if(serviceResponse){
            window.getApp.$emit("SHOW_MESSAGE", { text: "Guardado con éxito" });
            this.$router.go(-1);
          }else{
            const params = { text: serviceResponse.message };
            window.getApp.$emit("SHOW_ERROR", params);
          }
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
     
  };   
</script>
