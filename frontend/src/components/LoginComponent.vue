<template>
    <div>
            <h1>Login</h1>
            <br>
            <br>
            <label>Username: </label>            
            <input type="text" v-bind:value="username" v-on:input="OnUsername">
            <br>
            <br>
            <label>Password: </label>            
            <input type="pass" v-bind:value="pass" v-on:input="OnPass" >
            <br>
            <br>
            <button v-on:click="OnLogin" type="button" class="btn btn-primary">Log In </button>
            
            <meta
            v-if="loggin && success"
            id="success"
            http-equiv="refresh"
            content="0;
            url='http://127.0.0.1:5173/capitalsGame'"
            /> 
            
      </div>
  </template>
  
  
  <script>
  export default {
    data() {
      return {
        username: "",
        pass: "",
        success: false,
        loggin: false,
      }; 
    }, 
    methods: {
      OnUsername(e) {
        this.loggin = false;
        this.username = e.target.value;
      },
      OnPassword(e) {
        this.loggin = false;
        this.pass = e.target.value;
      },
      OnLogin() {
        const url = "http://localhost:5173/login/async";
        const body = {
          username: this.username,
          pass: this.pass,
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
            this.loggin = true;
            this.success = true;
            if (data.success) {
              sessionStorage.setItem("user", this.username);
              this.$emit("user-login");
            }
          });
      }
    }
  }
  </script>