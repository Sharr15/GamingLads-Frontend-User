<template>
  <div id="match">
    <v-app id="matches">
      <v-container class="d-flex justify-center">
        <v-card class="mt-3" width="35%">
          <v-img
            contain
            src="@/assets/edit.jpg"
            width="100%"
            height="200px"
          ></v-img>
          <v-divider></v-divider>
          <!-- <v-card-title> {{user.username}} </v-card-title> -->
          <v-card-title>
            Sharony
          </v-card-title>

          <v-card-subtitle>
            Valorant, League of Legends
          </v-card-subtitle>
          <v-card-subtitle>Normal, Competitive</v-card-subtitle>
          <v-card-subtitle>{{ this.text }}</v-card-subtitle>

          <v-btn class="mx-2" fab dark color="red">
            <v-icon large v-on:click="$router.push('Profile')" color="white"
              >mdi-thumb-down</v-icon
            > </v-btn
          ><v-btn class="mx-2" fab dark color="green">
            <v-icon large v-on:click="$router.push('Profile')" color="white"
              >mdi-thumb-up</v-icon
            ></v-btn
          >

          <v-spacer></v-spacer>
        </v-card>
      </v-container>
    </v-app>
  </div>
</template>

<script>
export default {
  methods: {},
  data: () => ({
    text:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus."
  })
};
</script>
