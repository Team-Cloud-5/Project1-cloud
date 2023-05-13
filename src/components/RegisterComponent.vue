<template>
    <div>
            <h1>Register</h1>
            <br>
            <label for="floatingInput">Username:  </label>            
            <input @input="onUsernameInput" type="text" :value="username">
            <br>
            <br>
            <label for="floatingInput">Pass:  </label>            
            <input @input="onPassInput" type="pass" :value="pass">
            <br>  
            <br>
            <label for="floatingInput">Email:  </label>
            <input @input="onEmailInput" type="email" :value="email">
            <br>
            <br>
            <label for="floatingInput">Age:  </label>
            <input @input="onAgeInput" type="number" :value="age">
            <br>
            <br>
            <button  @click="onRegister" class="btn btn-primary"> Registrarse </button>
  
            <meta
              v-if="register && success"
              id="success"
              http-equiv="refresh"
              content="0;
                url='http://127.0.0.1:5173/login'"/>
        </div>
  </template>
  
  
  <script>
  export default {
    data(){
      return{
        username: "",
        pass: "",
        email: "",
        age: "",
        register: false,
        success: false,
      };
    },
    methods: {
      onUsernameInput(e) {
        this.register = false;
        this.username = e.target.value;
      },
      onPassInput(e) {
        this.register = false;
        this.pass = e.target.value;
      },
      onEmailInput(e) {
        this.register = false;
        this.email = e.target.value;
      },
      onAgeInput(e) {
        this.register = false;
        this.age = e.target.value;
      },
      onRegister() {
        const url = "http://localhost:5173/register/async";
        const body = {
          username: this.username,
          email: this.email,
          pass: this.pass,
          age: this.age,
        };
        fetch(url, {
          method: "POST",
          body: JSON.stringify(body),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            this.register = true;
            this.success = true;
          });
      }
    },
  };
  </script>