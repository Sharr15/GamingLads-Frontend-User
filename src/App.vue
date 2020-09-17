<template>
  <v-app>
    <div>
      <v-app-bar color="deep-purple accent-4" dense dark>
        <v-menu left bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on">
              <v-icon large>mdi-account-box</v-icon>
            </v-btn>
          </template>
        </v-menu>

        <v-toolbar-title>Gaming Lads</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-menu left bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on">
              <v-icon large>mdi-account-box</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item @click.native="$router.push('SignIn')">
              <v-list-item-title>Sign in</v-list-item-title>
            </v-list-item>
            <v-list-item @click.native="$router.push('SignUp')">
              <v-list-item-title>Sign up</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-app-bar>
    </div>
    <router-view></router-view>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  })
};
</script>
