<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-tab v-on="on">s'enregistrer</v-tab>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline" style="color:#55b794">Créer un compte</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field v-model="lastname" label="Username*" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="email" label="Email*" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="password" label="Password*" type="password" required></v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <small>*Champ obligatoire</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="#55b794" text @click="dialog = false">fermer</v-btn>
          <v-btn color="#55b794" @click="addUser()">enregistrer</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      dialog: false,
      Username: "",
      email: "",
      password: ""
    };
  },
  methods: {
    addUser() {
      axios.post("http://localhost:8080/api/users/register", {
        Username: this.Username,
        email: this.email,
        password: this.password
      });
      this.Username = "";
      this.email = "";
      this.password = "";
    }
  }
};
</script>