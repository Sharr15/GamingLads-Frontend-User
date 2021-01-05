<template>
  <v-app>
    <div>
      <v-app-bar color="deep-purple accent-4" dense dark>
        <!--<template v-if="authenticated"> -->
        <v-menu left bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on">
              <v-icon large>mdi-controller-classic</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item v-on:click="$router.push('match')">
              <v-list-item-title>Match</v-list-item-title>
            </v-list-item>
            <v-list-item v-on:click="$router.push('matched')">
              <v-list-item-title>Matched</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <!--</template> -->
        <v-toolbar-title>Gaming Lads</v-toolbar-title>

        <v-spacer></v-spacer>
        <!-- <v-toolbar-title> {{user.username}} </v-toolbar-title> -->
        <v-toolbar-title>Sharony</v-toolbar-title>
        <v-menu left bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on">
              <v-icon large>mdi-account-box</v-icon>
            </v-btn>
          </template>

          <v-list>
            <!--<template v-if="authenticated"> -->
            <v-list-item v-on:click="$router.push('profile')">
              <!-- <v-list-item @click.prevent="signOut"></v-list-item> -->
              <v-list-item-title>Profile</v-list-item-title>
            </v-list-item>
            <v-list-item v-on:click="signOut()">
              <v-list-item-title>Sign Out</v-list-item-title>
            </v-list-item>
            <!--</template> -->
            <!--<template v-else>-->
            <v-list-item v-on:click="$router.push('signin')">
              <v-list-item-title>Sign in</v-list-item-title>
            </v-list-item>
            <v-list-item v-on:click="$router.push('signup')">
              <v-list-item-title>Sign up</v-list-item-title>
            </v-list-item>
            <!--</template> -->
          </v-list>
        </v-menu>
      </v-app-bar>
    </div>
    <router-view></router-view>
  </v-app>
</template>

<script>
//import { mapGetters, mapActions } from "vuex";
export default {
  name: "App",
  //computed: {
  //...mapGetters({
  // authenticated: "auth/authenticated",
  // user: "auth/user"
  //  })
  // },
  // methods: { ...mapActions({signOutAction: "auth/signOut"}),
  // signOut(){this.signOutAction().then(() => {this.$router.replace({name: "home"})})}}
  //};
  methods: {
    signOut() {
      localStorage.clear();
      this.$router.push("home");
    }
  }
};
</script>
