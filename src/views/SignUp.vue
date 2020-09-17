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
                    <v-form>
                      <v-text-field
                        label="Username"
                        name="username"
                        prepend-icon="mdi-account"
                        type="text"
                      ></v-text-field>

                      <v-text-field
                        id="password"
                        label="Password"
                        name="password"
                        prepend-icon="mdi-lock"
                        type="password"
                      ></v-text-field>

                      <v-text-field
                        id="password"
                        label="Re-enter password"
                        name="password"
                        prepend-icon="mdi-lock"
                        type="password"
                      ></v-text-field>
                    </v-form>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                      color="deep-purple accent-4"
                      dense
                      dark
                      @click.native="$router.push('signin')"
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
  </div></template
>
