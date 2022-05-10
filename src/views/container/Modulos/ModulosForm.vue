<template>
  <v-container
    id="module"
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
                    md="12"
                  >
                    <v-text-field
                      v-model="moduleData.nombre"
                      class="purple-input"
                      :label="$t('NOMBRE')"
                      :disabled="option===2?true:false"
                    />
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
                      {{ getTitleButton }}
                    </v-btn>
                  </v-col>
                </v-row>
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
  import { editModulos, createModulos } from '@/api/modules'
  export default {
    data: () => ({
      tabs: 0,
      option: 0,
      title: '',
      moduleData: {
        nombre: '',
      },
    }),
    computed: {
      getTitle () {
        if (this.option === 1) return i18n.t('modules.create')
        else if (this.option === 2) return i18n.t('modules.show')
        else if (this.option === 3) return i18n.t('modules.edit')
        else return i18n.t('modules.title')
      },
      getTitleButton () {
        if (this.option === 1) return i18n.t('crud.create')
        else if (this.option === 2) return i18n.t('crud.show')
        else if (this.option === 3) return i18n.t('crud.edit')
        else return i18n.t('modules.title')
      },
    },
    mounted () {
      // console.log($t('roles.title'))
      this.initialize()
    },
    methods: {
      initialize () {

        this.option = this.$route.params.option
        if (this.option === 3 || this.option === 2) {
          this.moduleData = this.$route.params.moduleData
          console.log(this.moduleData)
        }
      },
      async submit () {
        if (this.option === 1) {
          let serviceResponse = await createModulos(this.moduleData);
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
          let serviceResponse = await editModulos(this.moduleData);
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
    }, 
  }
</script>