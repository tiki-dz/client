<template>
  <div class="full-page">
    <div id="login-form" class="login-page">
      <div class="form-box">
        <div class="button-box">
          <div id="btn"></div>
          <button type="button" @click="login()" class="toggle-btn">
            Connexion
          </button>
          <button type="button" @click="register()" class="toggle-btn">
            Inscription
          </button>
        </div>
        <form id="login" class="input-group-login">

          <el-input
            type="email"
            class="input-field"
            placeholder="Email"
            required
            v-model="form.email"
            name="email"
          />
          <el-input
            type="password"
            class="input-field"
            placeholder="Mot de passe"
            v-model="form.password"
            name="password"
            required
                                show-password

          />
          <p>Mot de passe oublier?</p>
          <button type="submit" class="submit-btn" @click="connexion()">
            Connexion
          </button>
        </form>
        <form id="register" class="input-group-register">
       

 <el-input type="text" class="input-field" placeholder="nom" required />
          <el-input
            type="text"
            class="input-field"
            placeholder="prenom"
            required
          />
          <input
            type="text"
            class="input-field"
            placeholder="prenom"
            required
          /><input
            type="text"
            class="input-field"
            placeholder="prenom"
            required
          /><input
            type="text"
            class="input-field"
            placeholder="prenom"
            required
          />
          <input type="text" class="input-field" placeholder="Email" required />
          <input
            type="text"
            class="input-field"
            placeholder="Mot de passe"
            required
          />
          <button type="submit" class="submit-btn">S'inscrire</button>
          
         
        </form>
      </div>
    </div>
    <div class="circle1"></div>
        <div class="circle2"></div>
    <div class="circle3"></div>
        <div class="circle4"></div>



  </div>
</template>

<script>
import authService from "../services/authService";
import { ElNotification } from "element-plus/es";
import("element-plus/es/components/notification/style/css");
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },

  methods: {
    async connexion() {
      try {
        const account = await authService.Login({
          email: this.form.email.toLowerCase(),
          password: this.form.password,
        });

        console.log(account.data);
        if (account.data.success == false) {
          ElNotification({
            title: "Error",
            message: "Error to sign in :" + account.data.message,
            type: "error",
          });
        } else {
          let x = account.data.data.token;
          let user = account.data.data.data.User;
          localStorage.setItem("LoggedUser", x);

          ElNotification({
            title: "Success",
            message: "This is a success message",
            type: "success",
          });
        }
      } catch (error) {
        ElNotification({
          title: "Erreur de connexion",
          message: " Veuillez réessayer ",
          type: "warning",
        });
      }
    },

    register() {
      document.getElementById("login").style.left = "-400px";
      document.getElementById("register").style.left = "50px";
      document.getElementById("btn").style.left = "110px";
    },
    login() {
      document.getElementById("login").style.left = "50px";
      document.getElementById("register").style.left = "450px";
      document.getElementById("btn").style.left = "0px";
    },
  },
};
var modal = document.getElementById("login-form");
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only 
background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),6179f3e1
    url("../assets/m1.jpg");-->
<style scoped>
* {
  margin: 0%;
  padding: 0%;
  box-sizing: border-box;
}
.full-page {
  background: #FCECDD;
  min-height: 100vh;
  width: 100%;
  background-position: center;
  background-size: cover;
  position: absolute;
}
/*
#login-form{
  display: none;
}
*/
.form-box {
  width: 880px;
  height: 480px;
  position: relative;
  margin: 10% auto;
  background: #f9cea5dc;
  padding: 10px;
  overflow: hidden;
  border-radius: 2rem;
  z-index: 3;



            
            }

.button-box {
  width: 220px;
  margin: 35px auto;
  position: relative;
  box-shadow: 0 0 20px 9px #ffffff42;
  border-radius: 30px;
}
.toggle-btn {
  padding: 10px 10px;
  cursor: pointer;
  background: transparent;
  border: 0;
  outline: none;
  position: relative;
  color: white;
  font-size: medium;
  margin-left: 5%;
}
#btn {
  top: 0;
  left: 0;
  position: absolute;
  width: 120px;
  height: 100%;
  background: #FEA82F;
  border-radius: 30px;
  transition: 0.5s;
}
.input-group-login {
  top: 150px;
  position: absolute;
  width: 280px;
  transition: 0.5s;
  font-size: large;
}
.input-group-register {
  top: 120px;
  position: absolute;
  width: 280px;
  transition: 0.5s;
}
.input-field {
  width: 100%;
  padding: 10px 0;
  margin: 5px 0;
  border-left: 0;
  border-top: 0;
  border-right: 0;
  border-bottom: 1px solid rgb(255, 255, 255);
  outline: none;
  background: transparent;
}
::placeholder {
  color: white;
}
.submit-btn {
  width: 85%;
  padding: 10px 30px;
  cursor: pointer;
  display: block;
  margin: auto;
  background: #FEA82F;
  border: 0;
  outline: none;
  border-radius: 30px;
  margin-top: 15%;
  color: white;
  font-size: medium;
}
#login {
  left: 50px;
}
input {
  font-size: medium;
}

#register {
  left: 450px;
      margin:4px, 4px;
                padding:4px;
                 width: 280px;
  height: 300px;
                overflow-x: hidden;
                overflow-y: auto;
                text-align:justify;
}

.circle1,
.circle2,
.circle3,
.circle4 {
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0.2)
  );
  height: 10rem;
  width: 10rem;
  position: absolute;

}
.circle1 {
  height: 20rem;
  width: 20rem;
  bottom: 25%;
  right: 20%;
  z-index: 2;
    border-radius: 50%;
     animation-name: example;
  animation-duration: 60s;

}
@keyframes example {
  0%   {background-color:rgb(192, 147, 12); left:0px; top:0px;}
  25%  {background-color:rgb(255, 200, 0); left:200px; top:0px;}
  50%  {background-color:rgb(255, 132, 0); left:200px; top:200px;}
  75%  {background-color:rgb(214, 193, 73); left:0px; top:200px;}
  100% {background-color:rgb(255, 191, 0); left:0px; top:0px;}
}
.circle2 {
  bottom: 8%;
  right: 30%;
  z-index: 2;
     border-radius: 10%;

}
.circle3 {
        height:  15rem;
  width: 15rem;
  top: 5%;
  left: 22%;
  z-index: 2;
   border-radius: 10%;
}
.circle4 {
     height: 50rem;
  width: 50rem;
  top: 3%;
  left: -45%;
      border-radius: 50%;

  z-index: 2;
}
p {
  color: rgba(255, 255, 255, 0.783);
  margin-left: 50%;
  margin-top: 5%;
  font-size: small;
}

</style>
