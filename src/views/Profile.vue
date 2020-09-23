<template>
  <div class="profile">
    <v-col align="center" class="pa-0" cols="12">
      <v-avatar class="profile" color="grey" size="164" tile>
        <v-img contain src="@/assets/edit.jpg"></v-img>
      </v-avatar>
    </v-col>
    <!-- {{user.username}} -->
    <v-app id="games">
      <v-container class="d-flex justify-center">
        <div style="width: 50%">
          <v-row>
            <v-col cols="12">
              <v-combobox
                v-model="select"
                :items="this.gameItems"
                label="Games"
                multiple
                outlined
                dense
              ></v-combobox>
            </v-col>
            <v-col cols="12">
              <v-combobox
                v-model="select"
                :items="this.modeItems"
                label="Gamemode"
                multiple
                outlined
                dense
              ></v-combobox>
            </v-col>
          </v-row>
        </div>
      </v-container>
    </v-app>
  </div>
</template>

<script>
export default {
  methods: {},
  data: () => ({
    gameItems: ["League of Legends", "Valorant", "CS:GO", "Dota"],
    modeItems: ["Normal", "Competitive"]
  })
};
</script>
