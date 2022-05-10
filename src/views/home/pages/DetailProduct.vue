<template>
  <v-container
    id="detail"
    fluid
    tag="section"
  >
    <div class="row">
      <!--CARRUCEL DEL PRODUCTO-->
      <div class="col-md-4 col-sm-4 col-xs-12">
        <v-carousel>
          <v-carousel-item
            :src="require('@/assets/img/slider4.jpg')"
            @click="$vuetify.goTo(0)"
          />
          <v-carousel-item
            :src="require('@/assets/img/slider2.jpg')"
            @click="$vuetify.goTo(0)"
          />
          <v-carousel-item
            :src="require('@/assets/img/slider3.jpg')"
            @click="$vuetify.goTo(0)"
          />
          <v-carousel-item
            :src="require('@/assets/img/slider1.jpg')"
            @click="$vuetify.goTo(0)"
          />
        </v-carousel>
      </div>
      <div class="col-md-8 col-sm-8 col-xs-12">
        <div class="pl-6">
          <p
            class="font-weight-light mt-1"
            style="color:#3c4858; font-size: 25px"
          >
            Modern Black T-Shirt
          </p>
          <v-card-actions class="pa-0">
            <p class="headline font-weight-light pt-3">
              $65.00
              <del
                style=""
                class="subtitle-1 font-weight-thin"
              >
                $80.00
              </del>
            </p>
            <v-spacer />
            <v-rating
              v-model="rating"
              class=""
              background-color="warning lighten-3"
              color="secondary"
              dense
            />
            <span
              class="font-weight-thin"
            >
              25 REVIEWS
            </span>
          </v-card-actions>
          <p
            class="font-weight-light mt-1"
            style="color:#3c4858; font-size: 15px; justified"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Tincidunt arcu non sodales neque sodales ut etiam. Lectus arcu bibendum at varius vel pharetra. Morbi tristique senectus et netus et malesuada.
          </p>
          <p class="title">
            SIZE
          </p>
          <v-radio-group v-model="row">
            <v-radio
              label="XS"
              value="XS"
            />
            <v-radio
              label="S"
              value="s"
            />
            <v-radio
              label="M"
              value="m"
            />
            <v-radio
              label="L"
              value="l"
            />
            <v-radio
              label="XL"
              value="xl"
            />
          </v-radio-group>
          <p class="title">
            ITEMS
          </p>
          <v-text-field
            outlined
            style="width:100px"
            :value="1"
            dense
          />
          <v-btn
            class="accent white--text"
            outlined
            tile
            dense
          />
          <v-icon>mdi-cart</v-icon>
          ADD TO CART
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      rating: 4.5,
      item: 5,
      items: [
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: 'Lorem ipsum dolor?',
          subtitle: "<span class='text--primary'>Ali Connors</span> &mdash; Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Tincidunt arcu non sodales neque sodales ut etiam. Lectus arcu bibendum at varius vel pharetra. Morbi tristique senectus et netus et malesuada.\n" +
            '\n',
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          title: 'Lorem ipsum dolor <span class="grey--text text--lighten-1">4</span>',
          subtitle: "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n" +
            '\n',
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          title: 'Lorem ipsum dolor',
          subtitle: "<span class='text--primary'>Sandra Adams</span> &mdash; Lorem ipsum dolor sit amet, consectetur adipiscing elit\n" +
            '\n',
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
          title: 'Lorem ipsum dolor',
          subtitle: "<span class='text--primary'>Sandra Adams</span> &mdash; Lorem ipsum dolor sit amet, consectetur adipiscing elit\n" +
            '\n',
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
          title: 'Lorem ipsum dolor',
          subtitle: "<span class='text--primary'>Sandra Adams</span> &mdash; Lorem ipsum dolor sit amet, consectetur adipiscing elit\n" +
            '\n',
        },
      ],
    }),
  }
</script>
