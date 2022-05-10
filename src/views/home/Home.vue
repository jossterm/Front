<template>
  <v-container
    id="home"
    fluid
    tag="section"
  >
    <!--SECCION DEL CARRUCEL-->
    <v-row>
      <v-col cols="12">
        <v-carousel hide-delimiters>
          <v-carousel-item
            v-for="(item,i) in items"
            :key="i"
            :src="item.src"
          />
        </v-carousel>
      </v-col>
      <!--SECCION DE LAS 3 IMAGENES-->
      <v-col
        cols="12"
      >
        <div
          class="font-weight-light mt-1"
          style="color:#3c4858; font-size: 25px"
        >
          Manage Listings
          <v-divider />
        </div>
      </v-col>

      <v-col
        sm="12"
        md="4"
      >
        <base-material-card
          color="transparent"
          image
          hover-reveal
        >
          <template v-slot:image>
            <v-img
              src="https://demos.creative-tim.com/vue-material-dashboard-pro/img/card-2.jpg"
            />
          </template>

          <template v-slot:reveal-actions>
            <v-tooltip bottom>
              <template v-slot:activator="{ attrs, on }">
                <v-btn
                  class="mx-1"
                  v-bind="attrs"
                  icon
                  v-on="on"
                >
                  <v-icon>mdi-view-split-vertical</v-icon>
                </v-btn>
              </template>

              <span>View</span>
            </v-tooltip>

            <v-tooltip bottom>
              <template v-slot:activator="{ attrs, on }">
                <v-btn
                  v-bind="attrs"
                  class="mx-1"
                  color="success"
                  light
                  icon
                  v-on="on"
                >
                  <v-icon class="success--text">
                    mdi-pencil
                  </v-icon>
                </v-btn>
              </template>

              <span>Edit</span>
            </v-tooltip>

            <v-tooltip bottom>
              <template v-slot:activator="{ attrs, on }">
                <v-btn
                  v-bind="attrs"
                  class="mx-1"
                  color="error"
                  light
                  icon
                  v-on="on"
                >
                  <v-icon class="error--text">
                    mdi-close
                  </v-icon>
                </v-btn>
              </template>

              <span>Remove</span>
            </v-tooltip>
          </template>

          <v-card-title class="justify-center font-weight-light">
            Cozy 5 Stars Apartment
          </v-card-title>

          <v-card-text class="body-1 text-center mb-3 font-weight-light grey--text">
            The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the life in Barcelona.
          </v-card-text>

          <template v-slot:actions>
            <div class="display-2 font-weight-light grey--text">
              $899/night
            </div>

            <v-spacer />

            <span class="caption grey--text font-weight-light">
              <v-icon small>mdi-map-marker</v-icon>

              Barcelona, Spain
            </span>
          </template>
        </base-material-card>
      </v-col>

      <v-col
        sm="12"
        md="4"
      >
        <base-material-card
          color="transparent"
          hover-reveal
          image
        >
          <template v-slot:image>
            <v-img
              src="https://demos.creative-tim.com/vue-material-dashboard-pro/img/card-3.jpg"
            />
          </template>

          <template v-slot:reveal-actions>
            <v-tooltip bottom>
              <template v-slot:activator="{ attrs, on }">
                <v-btn
                  class="mx-1"
                  v-bind="attrs"
                  icon
                  v-on="on"
                >
                  <v-icon>mdi-view-split-vertical</v-icon>
                </v-btn>
              </template>

              <span>View</span>
            </v-tooltip>

            <v-tooltip bottom>
              <template v-slot:activator="{ attrs, on }">
                <v-btn
                  v-bind="attrs"
                  class="mx-1"
                  color="success"
                  light
                  icon
                  v-on="on"
                >
                  <v-icon class="success--text">
                    mdi-pencil
                  </v-icon>
                </v-btn>
              </template>

              <span>Edit</span>
            </v-tooltip>

            <v-tooltip bottom>
              <template v-slot:activator="{ attrs, on }">
                <v-btn
                  v-bind="attrs"
                  class="mx-1"
                  color="error"
                  light
                  icon
                  v-on="on"
                >
                  <v-icon class="error--text">
                    mdi-close
                  </v-icon>
                </v-btn>
              </template>

              <span>Remove</span>
            </v-tooltip>
          </template>

          <v-card-title class="justify-center font-weight-light">
            Office Studio
          </v-card-title>

          <v-card-text class="body-1 text-center mb-3 font-weight-light grey--text">
            The place is close to Metro Station and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the night life in London, UK.
          </v-card-text>

          <template v-slot:actions>
            <div class="display-2 font-weight-light grey--text">
              $1.119/night
            </div>

            <v-spacer />

            <span class="caption grey--text font-weight-light">
              <v-icon small>mdi-map-marker</v-icon>

              London, UK
            </span>
          </template>
        </base-material-card>
      </v-col>

      <v-col
        sm="12"
        md="4"
      >
        <base-material-card
          color="transparent"
          hover-reveal
          image
        >
          <template v-slot:image>
            <v-img
              src="https://demos.creative-tim.com/vue-material-dashboard-pro/img/card-1.jpg"
            />
          </template>

          <template v-slot:reveal-actions>
            <v-tooltip bottom>
              <template v-slot:activator="{ attrs, on }">
                <v-btn
                  class="mx-1"
                  v-bind="attrs"
                  icon
                  v-on="on"
                >
                  <v-icon>mdi-view-split-vertical</v-icon>
                </v-btn>
              </template>

              <span>View</span>
            </v-tooltip>

            <v-tooltip bottom>
              <template v-slot:activator="{ attrs, on }">
                <v-btn
                  v-bind="attrs"
                  class="mx-1"
                  color="success"
                  light
                  icon
                  v-on="on"
                >
                  <v-icon class="success--text">
                    mdi-pencil
                  </v-icon>
                </v-btn>
              </template>

              <span>Edit</span>
            </v-tooltip>

            <v-tooltip bottom>
              <template v-slot:activator="{ attrs, on }">
                <v-btn
                  v-bind="attrs"
                  class="mx-1"
                  color="error"
                  light
                  icon
                  v-on="on"
                >
                  <v-icon class="error--text">
                    mdi-close
                  </v-icon>
                </v-btn>
              </template>

              <span>Remove</span>
            </v-tooltip>
          </template>

          <v-card-title class="justify-center font-weight-light">
            Beautiful Castle
          </v-card-title>

          <v-card-text class="body-1 text-center mb-3 font-weight-light grey--text">
            The place is close to Metro Station and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Milan.
          </v-card-text>

          <template v-slot:actions>
            <div class="display-2 font-weight-light grey--text">
              $459/night
            </div>

            <v-spacer />

            <span class="caption grey--text font-weight-light">
              <v-icon small>mdi-map-marker</v-icon>

              Milan, Italy
            </span>
          </template>
        </base-material-card>
      </v-col>

      <!--SECCION DE LAS 4 IMAGENES-->
      <v-col :cols="12">
        <v-card-text
          class=""
          tile
          outlined
        >
          <v-card-title class="subheading ">
            Deals of the Day
          </v-card-title>
          <v-divider />
          <div class="row">
            <div class="col-12 col-md-3 col-sm-6 col-xs-6 text-center">
              <v-hover
                v-slot:default="{ hover }"
                open-delay="200"
              >
                <v-card
                  :elevation="hover ? 16 : 2"
                >
                  <v-img
                    class="white--text align-end"
                    height="200px"
                    :src="require('@/assets/img/deal1.jpg')"
                    @click="$vuetify.goTo(0)"
                  >
                    <v-card-title>Bags & Purses </v-card-title>
                  </v-img>

                  <v-card-text class="text--primary text-center">
                    <div>Upto 60% + Extra 10%</div>
                    <div>Baggit, Zara, Fossil</div>
                  </v-card-text>

                  <div class="text-center">
                    <v-btn
                      href=""
                      class="ma-2"
                      outlined
                      color="info"
                    >
                      Explore
                    </v-btn>
                  </div>
                </v-card>
              </v-hover>
            </div>
            <div class="col-12 col-md-3 col-sm-6 col-xs-6 text-center">
              <v-hover
                v-slot:default="{ hover }"
                open-delay="200"
              >
                <v-card
                  :elevation="hover ? 16 : 2"
                >
                  <v-img
                    class="white--text align-end"
                    height="200px"
                    :src="require('@/assets/img/deal2.jpg')"
                    @click="$vuetify.goTo(0)"
                  >
                    <v-card-title>T-Shirt </v-card-title>
                  </v-img>

                  <v-card-text class="text--primary text-center">
                    <div>Upto 50%</div>
                    <div>Zara, Selected, Celio</div>
                  </v-card-text>

                  <div class="text-center">
                    <v-btn
                      href=""
                      class="ma-2"
                      outlined
                      color="info"
                    >
                      Explore
                    </v-btn>
                  </div>
                </v-card>
              </v-hover>
            </div>
            <div class="col-12 col-md-3 col-sm-6 col-xs-6 text-center">
              <v-hover
                v-slot:default="{ hover }"
                open-delay="200"
              >
                <v-card
                  :elevation="hover ? 16 : 2"
                >
                  <v-img
                    class="white--text align-end"
                    height="200px"
                    :src="require('@/assets/img/deal3.jpg')"
                    @click="$vuetify.goTo(0)"
                  >
                    <v-card-title>Jeans </v-card-title>
                  </v-img>

                  <v-card-text class="text--primary text-center">
                    <div>Upto 60% + Extra 10%</div>
                    <div>Jack & Jones, Levis</div>
                  </v-card-text>

                  <div class="text-center">
                    <v-btn
                      href=""
                      class="ma-2"
                      outlined
                      color="info"
                    >
                      Explore
                    </v-btn>
                  </div>
                </v-card>
              </v-hover>
            </div>
            <div class="col-12 col-md-3 col-sm-6 col-xs-6 text-center">
              <v-hover
                v-slot:default="{ hover }"
                open-delay="200"
              >
                <v-card
                  :elevation="hover ? 16 : 2"
                >
                  <v-img
                    class="white--text align-end"
                    height="200px"
                    :src="require('@/assets/img/deal4.jpg')"
                    @click="$vuetify.goTo(0)"
                  >
                    <v-card-title>Shoes </v-card-title>
                  </v-img>

                  <v-card-text class="text--primary text-center">
                    <div>Upto 60% + Extra 10%</div>
                    <div>Nike, Adidas, Puma</div>
                  </v-card-text>

                  <div class="text-center">
                    <v-btn
                      href=""
                      class="ma-2"
                      outlined
                      color="info"
                    >
                      Explore
                    </v-btn>
                  </div>
                </v-card>
              </v-hover>
            </div>
          </div>
        </v-card-text>
      </v-col>

      <!--SECCION DE 3-->
      <v-col class="col-12 col-md-4 col-sm-12">
        <v-row>
          <v-col class="col-12 col-sm-3 pr-4">
            <v-icon class="display-2">
              mdi-truck
            </v-icon>
          </v-col>
          <v-col class="col-12 col-sm-9 pr-4">
            <h3 class="font-weight-light">
              FREE SHIPPING & RETURN
            </h3>
            <p class="font-weight-thin">
              Free Shipping over $300
            </p>
          </v-col>
        </v-row>
      </v-col>
      <v-col class="col-12 col-md-4 col-sm-12">
        <v-row>
          <v-col class="col-12 col-sm-3 pr-4 float-right">
            <v-icon class="display-2">
              mdi-cash-usd
            </v-icon>
          </v-col>
          <v-col class="col-12 col-sm-9 pr-4">
            <h3 class="font-weight-light">
              MONEY BACK GUARANTEE
            </h3>
            <p class="font-weight-thin">
              30 Days Money Back Guarantee
            </p>
          </v-col>
        </v-row>
      </v-col>
      <v-col class="col-12 col-md-4 col-sm-12">
        <v-row>
          <v-col class="col-12 col-sm-3 pr-4">
            <v-img
              height="50%"
              class="mr-3"
              :src="require('@/assets/img/4.jpg')"
              @click="$vuetify.goTo(0)"
            />
          </v-col>
          <v-col class="col-12 col-sm-9 pr-4">
            <h3 class="font-weight-light">
              020-800-456-747
            </h3>
            <p class="font-weight-thin">
              24/7 Available Support
            </p>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'HomeHome',
    data () {
      return {
        items: [
          {
            src: require('@/assets/img/heineken9.jpg'),
          },
          {
            src: require('@/assets/img/heineken11.jpeg'),
          },
          {
            src: require('@/assets/img/heineken6.jpg'),
          },
          {
            src: require('@/assets/img/Heineken1.jpg'),
          },
        ],
      }
    },
  }
</script>
