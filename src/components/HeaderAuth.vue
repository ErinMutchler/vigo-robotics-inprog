<template>
  <v-btn
    variant="text"
    color="white"
    size="x-large"
    v-if="authStore.uid"
    @click="logout"
  >
    <v-icon icon="mdi-logout" class="mr-2" />
    <span v-if="lgAndUp">Logout</span>
  </v-btn>

  <v-btn
    variant="text"
    color="white"
    size="x-large"
    v-else
    @click="loginDialog = true"
  >
    <v-icon icon="mdi-login" class="mr-2" />
    <span v-if="lgAndUp">Login</span>
  </v-btn>

  <v-dialog v-model="loginDialog" width="400">
    <v-card>
      <v-card-text variant="tonal">
        <v-alert type="error" class="my-3 text-center" v-if="errorOccurred"
          >An error occurred logging in. <br />
          Please try again.
        </v-alert>

        <v-btn block @click="loginWithGoogle">Login With Google</v-btn>
        <div class="my-3 text-center">or</div>
        <v-form ref="form" lazy-validation>
          <v-text-field
            variant="solo"
            hide-details="auto"
            placeholder="Email"
            type="email"
            v-model="email"
            class="my-3"
          />
          <v-text-field
            variant="solo"
            hide-details="auto"
            placeholder="Password"
            type="password"
            v-model="password"
            class="my-3"
          />

          <v-btn
            variant="text"
            class="my-3"
            block
            v-if="hasAccount"
            @click="loginWithEmail"
            >Login</v-btn
          >
          <v-btn variant="text" class="my-3" block v-else @click="signupUser"
            >Signup</v-btn
          >

          <div class="existingUserLink" v-if="hasAccount">
            No account? <a @click="hasAccount = false">Create one</a>
          </div>
          <div class="existingUserLink" v-else>
            Already have an account?
            <a @click="hasAccount = true">Log in</a>
          </div>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref } from "vue";
import { useDisplay } from "vuetify";
import { useAuthStore } from "@/stores/AuthStore";
import {authService} from "@/services/FirebaseConfig";

const { lgAndUp } = useDisplay();
const authStore = useAuthStore();
const loginDialog = ref(false);
const errorOccurred = ref(false);
const hasAccount = ref(true);
const email = ref(null);
const password = ref(null);

const logout = () => {
  authService.logout();
};

const loginWithGoogle = () => {
  authService.loginWithGoogle().then(() => {
    loginDialog.value = false;
  });
};

const loginWithEmail = () => {
  authService
      .loginWithPassword(email.value, password.value)
      .then(handleLoginSuccess)
      .catch(handleLoginFailure);
};

const signupUser = () => {
  authService
      .signup(email.value, password.value)
      .then(handleLoginSuccess)
      .catch(handleLoginFailure);
};

const handleLoginSuccess = () => {
  loginDialog.value = false;
  errorOccurred.value = false;
  hasAccount.value = true;
  email.value = "";
  password.value = "";
};

const handleLoginFailure = () => {
  errorOccurred.value = true;
  email.value = "";
  password.value = "";
};
</script>

<style scoped>
.existingUserLink {
  margin-top: 16px;
  width: 100%;
  text-align: center;
  color: #666;
  cursor: default;
}
.existingUserLink > a {
  color: #5b5bbe;
  cursor: pointer;
}
.existingUserLink > a:hover {
  text-decoration: underline;
}

.languageIcon {
  height: 2rem;
}
</style>
