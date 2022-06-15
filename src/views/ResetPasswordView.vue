<template>
  <section
    class="py-8"
    style="
      background: linear-gradient(to left top, #ffdec9e1, #ff9a5c);
      min-height: 100vh;
    "
  >
   <el-row :gutter="2">
   <el-col :xs="1" :sm="2" :md="4" :lg="6" :xl="8"> </el-col>
   <el-col :xs="22" :sm="20" :md="16" :lg="12" :xl="8">
        <br />
        <br />
        <el-card shadow="hover" class="forgotpasswordCard">
 <h3>Réinitialiser Le mot de passe</h3>
 <p>Veuillez entrer votre ancien et nouveau mot de passe.</p>
<el-form
   ref="ruleForm"
      :size="formSize"
      :model="ruleForm"
      status-icon
      :rules="rules"
      label-width="120px"
      class="demo-ruleForm">

 <el-form-item label="Ancien" >

             <el-input  
             v-model="ruleForm.password"
              type="password"
              autocomplete="off"
               show-password
                 style="width: 80%;"
             />
 </el-form-item>
         
 <el-form-item label=" Nouveau " >

             <el-input  
             v-model="ruleForm.newPassword"
              type="password"
              autocomplete="off"
               show-password
                style="width: 80%;"
             />
 </el-form-item>

 <div style="margin-left: 23%">
                <el-button
                  type="primary"
                  @click="reset()"
                  style="margin: auto"
                  >Soumettre</el-button
                >&nbsp;
                <el-button 
               @click="annuler()"
                style="margin: auto"
                  >Réinitialiser</el-button
                >
              </div>

</el-form>
        </el-card>
   </el-col>
   </el-row>
  </section>
</template>

<script>
import { ElNotification } from "element-plus";
import authService from "../services/authService";

export default {
  data(){
    return{
       ruleForm: {
        password: "",
        newPassword:"",
       
      },

    };
  },
  methods:{
    async reset() {
      try {
          const response = await authService.ResetPw({
            password: this.ruleForm.password,
            newPassword: this.ruleForm.newPassword,
         });


          console.log("aaaaaa");
 ElNotification({
          title: "succees",
          message: "mot de passe réinitialiser avec  succees",
          type: "success",
        });
this.annuler();
      
      } catch (error) {

          console.log("bbbbbbbbbbb");
         ElNotification({
          title: "Erreur",
          message: "impossible réinitialiser le mot de passe ",
          type: "error",
        });
        console.log(error);
      }
    },
    annuler(){
       this.ruleForm.password= '';
       this.ruleForm.newPassword = '';
               
      },
    
  },
};

 
</script>

<style>
.forgotpasswordCard {
  padding: 5% 0;
  border-radius: 15px;
}
@media screen and (max-width: 767px) {
  .forgotpasswordCard {
    margin-top: 5%;
  }
}
/* Tablet desktop :768px. */
@media (min-width: 768px) and (max-width: 991px) {
  .forgotpasswordCard {
    margin-top: 10%;
  }
}
.forgotpasswordCard h3 {
  text-align: center;
}
.forgotpasswordCard p {
  text-align: center;
}
</style>