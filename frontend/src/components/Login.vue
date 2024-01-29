<template>
  <div class="login-container">
    <h2>Enter your secret answer of your lucky question</h2>
    <div class="p-float-label">
      <Password
        v-model="pass"
        inputId="userPassword"
        toggleMask
        :feedback="false"
        style="width: 100%"
      />
      <label for="userPassword">When do you want it?</label>
    </div>
    <Button label="Submit" @click="checkPassword(pass)" />
    <p v-if="check" style="color: red">Please enter valid answer</p>
  </div>
</template>

<script>
import AutoComplete from "primevue/autocomplete";
import Button from "primevue/button";
import Password from "primevue/password";
import axios from "axios";
import { BASE_URL } from "@/static/constants";

export default {
  name: "Login",
  components: {
    AutoComplete,
    Button,
    Password,
  },
  methods: {
    checkPassword(pass) {
      if (pass) {
        let res = axios.get(`${BASE_URL}/login/${pass}`);
        res
          .then((message) => {
            if (!message.data) {
              this.check = true;
            } else {
              this.$router.push("/home");
            }

            this.pass = "";
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        this.check = true;
      }
    },
  },
  data() {
    return {
      pass: "",
      check: false,
    };
  },
};
</script>
<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  height: 100vh;
  width: 80%;
  margin: auto;
  background: snow;
}
</style>
