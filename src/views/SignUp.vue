<template>
  <div class="signup">
    <v-app id="signup">
      <v-app id="signup">
        <v-main>
          <v-container class="fill-height" fluid>
            <v-row align="center" justify="center">
              <v-col cols="12" sm="8" md="4">
                <v-card class="elevation-12">
                  <v-toolbar color="deep-purple accent-4" dense dark>
                    <v-toolbar-title>Sign up</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-tooltip bottom> </v-tooltip>
                  </v-toolbar>
                  <v-card-text>
                    <v-form @submit.prevent="submit" ref="form">
                      <v-text-field
                        label="Username"
                        name="username"
                        prepend-icon="mdi-account"
                        type="text"
                        v-model="form.username"
                        :rules="[v => !!v || 'Username is required']"
                        required
                      ></v-text-field>

                      <v-text-field
                        id="password"
                        label="Password"
                        name="password"
                        prepend-icon="mdi-lock"
                        type="password"
                        v-model="form.password"
                        :rules="[v => !!v || 'Password is required']"
                        required
                      ></v-text-field>

                      <v-text-field
                        id="password"
                        label="Re-enter password"
                        name="secondPassword"
                        prepend-icon="mdi-lock"
                        type="password"
                        v-model="form.secondPassword"
                        :rules="[
                          v => !!v || 'Re-enter password is required',
                          passwordConfirmationRule
                        ]"
                        required
                      ></v-text-field>
                    </v-form>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                      color="deep-purple accent-4"
                      dense
                      dark
                      @click.native="submit"
                    >
                      Sign up
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
</template>

<script>
import axios from "axios";
//import { mapActions } from "vuex";
export default {
  name: "signup",
  components: {
    //
  },

  data() {
    return {
      form: {
        username: "",
        password: "",
        secondPassword: ""
      }
    };
  },

  computed: {
    passwordConfirmationRule() {
      return () =>
        this.password === this.SecondPassword || "Password must match";
    }
  },

  methods: {
    async submit() {
      if (this.$refs.form.validate()) {
        const res = await axios.post(
          "https://gaminglads-gateway.herokuapp.com/user/signUp",
          this.form
        );
        if (res.status === 200) {
          console.log("Signed up");
          this.$router.push("signIn");
        } else {
          console.log(res.data);
          console.log(res.status);
          console.log(res.headers);
        }
      } else {
        console.log("Not validated by rules");
        alert("Please try again");
      }
    }
  }
};
</script>
