<template>
  <div class="full-page">
    <br/><br/><br/>

    <div id="login-form" class="login-page">
      <div class="form-box">
        <h1>Inscription</h1>
        <h3>Entrez le code de verification</h3>
        <h5>code non reçu ? <a> Cliquez ici pour renvoyer le code</a></h5>
        <form name="frm"  class="code">
          <el-input type="email" placeholder="E-mail"
          
           v-model="frm.email"
          />
            
     

          <el-input
            type="text"
          
            v-model="frm.code"
          />
                  <button type="button" class="submit-btn"  @click="VerifyCode()">Terminer</button>
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
     props: ['email','password'],

  data() {
    return {
        frm:{
          code:"",
          email:"",
          fcm_token:"hello"
       }
    };
  },
  methods: {
    
     async VerifyCode() {
      try {
        const response = await authService.VerifyCode({
                    email: this.frm.email,
                    code: this.frm.code,
                    fcm_token: this.frm.fcm_token
  });
         console.log("verifycode")
        console.log(response.data.data);

        ElNotification({
          title: "code correct",
          message: "code correct ",
          type: "success",
        });
          
        console.log(response.data.data);
      } catch (error) {
         ElNotification({
          title: "Erreur",
          message: "Vuillez resseyer ",
          type: "error",
        });
        console.log(error);
        console.log("errrreer")
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
    top: 60px;
  }
  10% {
    background-color: rgb(255, 200, 0);
    left: 200px;
    top: 70px;
  }
  20% {
    background-color: rgb(171, 140, 39);
    left: 200px;
    top: 75px;
  }
  30% {
    background-color: rgb(255, 132, 0);
    left: 200px;
    top: 200px;
  }
  40% {
    background-color: rgb(214, 132, 73);
    left: 0px;
    top: 200px;
  }
  50% {
    background-color: rgb(255, 191, 0);
    left: 0px;
    top: 60px;
  }
  60% {
    background-color: rgb(192, 147, 12);
    left: 0px;
    top: 70px;
  }
  70% {
    background-color: rgb(255, 200, 0);
    left: 200px;
    top: 75px;
  }
  80% {
    background-color: rgb(171, 140, 39);
    left: 200px;
    top: 80px;
  }
  90% {
    background-color: rgb(255, 132, 0);
    left: 200px;
    top: 200px;
  }
  100% {
    background-color: rgb(214, 153, 73);
    left: 0px;
    top: 200px;
  }
  
}
.el-input{
  width: 60%;
  margin-left: 18%;
  margin-top: 2%;
}

</style>
