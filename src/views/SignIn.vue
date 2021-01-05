<template>
  <form @submit.prevent="submit">
    <div class="signin">
      <v-app id="signin">
        <v-app id="signin">
          <v-main>
            <v-container class="fill-height" fluid>
              <v-row align="center" justify="center">
                <v-col cols="12" sm="8" md="4">
                  <v-card class="elevation-12">
                    <v-toolbar color="deep-purple accent-4" dense dark>
                      <v-toolbar-title>Sign in</v-toolbar-title>
                      <v-spacer></v-spacer>
                      <v-tooltip bottom> </v-tooltip>
                    </v-toolbar>
                    <v-card-text>
                      <v-form>
                        <v-text-field
                          id="username"
                          label="Username"
                          name="username"
                          prepend-icon="mdi-account"
                          type="text"
                          v-model="form.username"
                        ></v-text-field>

                        <v-text-field
                          id="password"
                          label="Password"
                          name="password"
                          prepend-icon="mdi-lock"
                          type="password"
                          v-model="form.password"
                        ></v-text-field>
                      </v-form>
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn
                        color="deep-purple accent-4"
                        dense
                        dark
                        @click.native="submit()"
                      >
                        Sign in
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-main>
        </v-app>
      </v-app>
    </div>
  </form>
</template>
<script>
//import { mapActions } from "vuex";
import axios from "axios";
export default {
  name: "signin",
  components: {
    //
  },

  data() {
    return {
      form: {
        username: "",
        password: ""
      }
    };
  },

  methods: {
    //   ...mapActions({
    //     signIn: "auth/signIn"
    //   }),
    async submit() {
      const res = await axios.post(
        "https://gaminglads-gateway.herokuapp.com/user/signIn/user",
        this.form
      );
      if (res.status === 200) {
        console.log("Signed in");
        this.$router.push("match");
        axios.defaults.headers.common["Authorization"] = "Bearer ${res.data}";
        localStorage.setItem("token", res.data);
      } else {
        console.log(res.status);
        console.log(res.headers);
      }
    }
  }
};
</script>
