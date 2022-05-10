<template>
  <div class="full-page">
    <div id="login-form" class="login-page">
      <div class="form-box">
        <h1>Inscription</h1>
        <h3>Entrez le code de verification</h3>
        <h5>code non reçu ? <a> Cliquez ici pour renvoyer le code</a></h5>
        <form name="frm"  class="code">
          <input
            type="number"
            placeholder="       -"
            min="0"
            max="9"
            required
            v-model="frm.nbr1"
          />
          <span id="msg" style="color:red"></span>
          <input
            type="number"
            placeholder="       -"
            min="0"
            max="9"
            required
                        v-model="frm.nbr2"


          />
                    <span id="msg" style="color:red"></span>

          <input
            type="number"
            placeholder="       -"
            min="0"
            max="9"
            required
                        v-model="frm.nbr3"

          />
                    <span id="msg" style="color:red"></span>

          <input
            type="number"
            placeholder="       -"
            min="0"
            max="9"
            required
                        v-model="frm.nbr4"

          />
                    <span id="msg" style="color:red"></span>

          <input
            type="number"
            placeholder="       -"
            min="0"
            max="9"
            required
                        v-model="frm.nbr5"

          />
                    <span id="msg" style="color:red"></span>

          <input
            type="number"
            placeholder="       -"
            min="0"
            max="9"
            required
                        v-model="frm.nbr6"

          />
                    <span id="msg" style="color:red"></span>

          <button type="button" class="submit-btn" >Terminer</button>
        </form>
      </div>
    </div>
  </div>
  <div class="circle1"></div>
</template>

<script>
import { ref } from "vue";
import { ElNotification } from "element-plus";
import authService from "../services/authService";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
        frm:{
            nbr1:"",
                        nbr2:"",
            nbr3:"",
            nbr4:"",
            nbr5:"",
            nbr6:"",

        }
    };
  },
  methods: {
    
      VerifyCode() {
      try {
        const response = authService.VerifyCode({
               code:this.frm.nbr1+this.frm.nbr2+this.frm.nbr3+this.frm.nbr4+this.frm.nbr5+this.frm.nbr6,
 
 });
        ElNotification({
          title: "code correct",
          message: "code correct ",
          type: "success",
        });
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    },
   
  },
};
</script>

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
  position: absolute;
}
/********************************************************* GLASS ************************************************************* */

.form-box {
  width: 650px;
  height: 400px;
  position: relative;
  margin: 12% auto;
  background: #f9cea5dc;
  padding: 10px;
  overflow: hidden;
  border-radius: 2rem;
  z-index: 3;
}
/********************************************************* FORM ************************************************************* */

::placeholder {
  margin-left: 50%;
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
a{
      border-bottom: 1px solid rgb(170, 95, 46);

}
.submit-btn {
  width: 45%;
  padding: 10px 30px;
  cursor: pointer;
  display: block;
  margin: auto;
  background: #fea82f;
  border: 0;
  outline: none;
  border-radius: 30px;
  margin-top: 2%;
  color: white;
  font-size: medium;
  margin-left: 25%;
}
.code {
  margin-top: 2%;
  margin-left: 8%;
}
h1 {
  color: white;
  margin-left: 35%;
  margin-top: 5%;
}
h3 {
  color: white;
  margin-left: 23%;
  margin-top: 4%;
}
h5 {
  color: rgb(103, 65, 40);
  margin-left: 18%;
  margin-top: 2%;
}
/********** ****************************************  ANIMATION *****************************************************************/
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
input {
  display: inline; /* the default for span */
  width: 80px;
  height: 80px;
  padding: 5px;
  border: 1px solid rgb(247, 247, 253);
  background-color: rgb(235, 227, 210);
  margin: 1%;
}
</style>
