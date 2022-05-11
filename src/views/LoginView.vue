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
        <el-row id="login">
          <el-col :span="12">
            <form class="input-group-login">
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
              <p id="mob">Mot de passe oublier?</p>
              <button type="submit" class="submit-btn" @click="connexion()">
                Connexion
              </button>
            </form>
          </el-col>
          <el-col :span="12">
            <img
              src="../assets/logo.png"
              style="width: 25rem; margin-left: -27%; margin-top: -10%"
            />
            <h1 style="margin-left: -11%; margin-top: -5%">
              <b>Bienvenue !</b>
            </h1>

            <a
              class="btn btn-google"
              href="#"
              title="Google Play"
              style="margin-left: -2%; margin-bottom: -35%"
              >Google Play</a
            >
          </el-col>
        </el-row>

        <form id="register" class="input-group-register">
          <el-row>
            <el-col :span="10">
              <el-input
                v-model="ruleForm.firstName"
                placeholder="Prenom"
                required
                class="input-field"
              ></el-input>
              <p id="j1"></p>
            </el-col>
            <el-col :span="2"></el-col>

            <el-col :span="10">
              <el-input
                v-model="ruleForm.lastName"
                placeholder="Nom"
                required
                class="input-field"
              ></el-input>
              <p id="j2"></p>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="10"
              ><el-input
                required
                id="phoneNumber"
                v-model="ruleForm.phoneNumber"
                placeholder="numero de telephone"
                class="input-field"
              ></el-input>
              <p id="j3"></p>
            </el-col>
            <el-col :span="2"></el-col>

            <el-col :span="10">
              <el-date-picker
                required
                id="birthDate"
                v-model="ruleForm.birthDate"
                type="date"
                placeholder="date de naissance"
                value-format="YYYY/MM/DD"
                class="input-field"
              >
              </el-date-picker>
              <p id="j4"></p>
              
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="10">
              <el-select
                required
                id="exampleFormControlSelect1"
                placeholder="sexe"
                v-model="ruleForm.sexe"
                class="input-field"
              >
                <el-option
                  v-for="item in sexeopt"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
              <p id="j5"></p>
            </el-col>
            <el-col :span="2"></el-col>

            <el-col :span="10">
              <el-input
                id="city"
                v-model="ruleForm.city"
                placeholder="ville"
                required
                class="input-field"
              ></el-input>
              <p id="j6"></p>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="10">
              <el-input
                required
                v-model="ruleForm.email"
                placeholder="email"
                class="input-field"
              ></el-input>
              <p id="j7"></p>
            </el-col>
            <el-col :span="2"></el-col>

            <el-col span="10">
              <el-input
                required
                id="password"
                placeholder="mot de passe"
                v-model="ruleForm.password"
                show-password
                class="input-field"
              ></el-input>
              <p id="j8"></p>
            </el-col>
          </el-row>

          <button
            type="submit"
            class="submit-btn"
            @click="checkForm()"
            style="margin-top: 5%"
          >
            S'inscrire
          </button>
        </form>
      </div>
    </div>
    <div class="circle1"></div>
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
      ruleForm: {
        search: "",
        firstName: "",
        lastName: "",
        password: "",
        password2: "",
        email: "",
        birthDate: "",
        phoneNumber: "",
        sexe: "",
        city: "",
        errors: [],
      },
      sexeopt: [
        {
          value: 0,
          label: "FEMME",
        },
        {
          value: 1,
          label: "HOMME",
        },
      ],
      form: {
        email: "",
        password: "",
      },
    };
  },

  methods: {
    async signup() {
      try {
        if (this.ruleForm.password == this.ruleForm.password2) {
          const response = await authService.SignupClient({
            firstName: this.ruleForm.firstName,
            lastName: this.ruleForm.lastName,
            birthDate: this.ruleForm.birthDate,
            sexe: this.ruleForm.sexe,
            email: this.ruleForm.email,
            password: this.ruleForm.password,
            city: this.ruleForm.city,
            phoneNumber: this.ruleForm.phoneNumber,
          });
          ElNotification({
            title: "Succès",
            message: "Utilisateur créé avec succès ",
            type: "success",
          });
          console.log(response.data);
        } else {
          this.error = "problem in confirmation of the git fepassword";
        }
      } catch (error) {
        ElNotification({
          title: "Echec",
          message: "Impossible de créer l'utilisateur ",
          type: "error",
        });
        console.log(error);
      }
    },
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
    checkForm() {
      
      let t1, t2, t3, t4, t5, t6, t7, t8;

      if (this.ruleForm.firstName == "") {
        t1 = "Veuillez entrer le nom !";
        document.getElementById("j1").innerHTML = t1;
      } else {
        t1 = "";
        document.getElementById("j1").innerHTML = t1;
      }


      if (this.ruleForm.lastName == "") {
        t2 = "Veuillez entrer le prénom !";
        document.getElementById("j2").innerHTML = t2;
      } else {
        t2 = "";
        document.getElementById("j2").innerHTML = t2;
      }

       if (this.ruleForm.phoneNumber == "") {
        t3 = "veuillez saisire le numero de telephone  !";
        document.getElementById("j3").innerHTML = t3;
      } else if (this.ruleForm.phoneNumber > 10) {
        t3 = "le numero de telephone ne doit pas etre plus de 14 chiffres !";
        document.getElementById("j3").innerHTML = t3;
      } else {
        t3 = "";
        document.getElementById("j3").innerHTML = t3;
      }



      if (
        
        this.ruleForm.birthDate == "") {
        t4 = "Veuillez selectionner la date !";
        document.getElementById("j4").innerHTML = t4;
      } else {
        t4 = "";
        document.getElementById("j4").innerHTML = t4;
      }


      if (this.ruleForm.city  == "") {
        t6 = "Veuillez saisire le lieu de naissance !";
        document.getElementById("j6").innerHTML = t6;
      } else {
        t6 = "";
        document.getElementById("j6").innerHTML = t6;
      }


      if (this.ruleForm.sexe == "") {
        t5 = "Veuillez entrer le prénom !";
        document.getElementById("j5").innerHTML = t5;
      } else {
        t5 = "";
        document.getElementById("j5").innerHTML = t5;
      }

     


      if (this.ruleForm.email == "") {
        t7 = "veuillez saisire l'adresse mail  !";
        document.getElementById("j7").innerHTML = t7;
      } else if (this.ruleForm.email.indexOf("@") == -1) {
        t7 = " l'adresse mail contient @  !";
        document.getElementById("j7").innerHTML = t7;
      } else if (this.ruleForm.email.indexOf(".") == -1) {
        t7 = " l'adresse mail contient un point .  !";
        document.getElementById("j7").innerHTML = t7;
      } else {
        t7 = "";
        document.getElementById("j7").innerHTML = t7;
      }
    },

    register() {
      document.getElementById("login").style.left = "-290px";
      document.getElementById("register").style.left = "-50%";
      document.getElementById("btn").style.left = "110px";
    },
    login() {
      document.getElementById("login").style.left = "12%";
      document.getElementById("register").style.left = "1000px";
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
    url("../assets/m1.jpg");
    #fcecdd
   -->
<style scoped>
* {
  margin: 0%;
  padding: 0%;
  box-sizing: border-box;
}
.full-page {
  background: #fcecdd;
  min-height: 100vh;
  width: 100%;
  background-position: center;
  background-size: cover;
  
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
  background: #fea82f;
  border-radius: 30px;
  transition: 0.5s;
}
.input-group-login {
  top: 10px;
  position: absolute;
  width: 280px;
  transition: 0.5s;
  font-size: large;
}
.input-group-register {
  top: 120px;
  position: absolute;
  width: 180px;
  transition: 0.5s;
  margin-left: 95%;
}
.input-field {
  width: 100%;
  padding: 10px 0;
  margin: 5px 0;
  border-left: 0;
  border-top: 0;
  border-right: 0;
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
  background: #fea82f;
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
  left: 420px;
  margin: 4px, 4px;
  margin-top: -4%;
  padding: 4px;
  width: 450px;
  height: 500px;
  overflow-x: hidden;
  overflow-y: auto;
  text-align: justify;
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
  position: absolute;
}
@keyframes example {
  0% {
    background-color: rgb(192, 147, 12);
    left: 0px;
    top: 0px;
  }
  25% {
    background-color: rgb(255, 200, 0);
    left: 200px;
    top: 10px;
  }
  50% {
    background-color: rgb(255, 132, 0);
    left: 200px;
    top: 200px;
  }
  75% {
    background-color: rgb(214, 193, 73);
    left: 0px;
    top: 200px;
  }
  100% {
    background-color: rgb(255, 191, 0);
    left: 0px;
    top: 0px;
  }
}

#mob {
  color: rgba(255, 255, 255, 0.783);
  margin-left: 50%;
  margin-top: 5%;
}

@font-face {
  font-family: "fontfutura";
  src: url("https://fonts.googleapis.com/css?family=Open+Sans") format("ttf");
  font-weight: normal;
  font-style: normal;
}
a.btn-google {
  color: #fff;
}
.btn {
  padding: 10px 16px;
  margin: 5px;
  font-size: 18px;
  line-height: 1.3333333;
  border-radius: 6px;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border: 1px solid transparent;
  font-weight: 500;
  text-decoration: none;
  display: inline-block;
}
.btn:active:focus,
.btn:focus {
  outline: 0;
}
.btn:focus,
.btn:hover {
  color: #333;
  text-decoration: none;
  outline: 0;
}
.btn:active {
  outline: 0;
  -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
}
.btn-google {
  color: #fff;
  background-color: #111;
  border-color: #000;
  padding: 15px 16px 5px 40px;
  position: relative;
  font-family: fontfutura;
  font-weight: 600;
}
.btn-google:focus {
  color: #fff;
  background-color: #555;
  border-color: #000;
}
.btn-google:active,
.btn-google:hover {
  color: #fff;
  background-color: #555;
  border-color: #000;
}
.btn-google:before {
  content: "";
  background-image: url(https://4.bp.blogspot.com/-52U3eP2JDM4/WSkIT1vbUxI/AAAAAAAArQA/iF1BeARv2To-2FGQU7V6UbNPivuv_lccACLcB/s30/nexus2cee_ic_launcher_play_store_new-1.png);
  background-size: cover;
  background-repeat: no-repeat;
  width: 30px;
  height: 30px;
  position: absolute;
  left: 6px;
  top: 50%;
  margin-top: -15px;
}
.btn-google:after {
  content: "DISPONIBLE SUR";
  position: absolute;
  top: 5px;
  left: 40px;
  font-size: 10px;
  font-weight: 400;
}
h1 {
  color: white;
  font-size: 50px;
}
p{
  width: 200px;
  color: red;
  margin-top: -4%;
  margin-bottom: -4%;
  margin-left: 5%;
    font-size: small;

}
</style>
