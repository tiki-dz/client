<template>
  <!-- deviding screen into two columns: sidebar and content -->
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
          <!-- Reset Password -->
          <br />
          <p>Veuillez entrer votre nouveau mot de passe.</p>
          <!-- Please enter your new password -->
          <br />
          <el-form
            ref="formRef3"
            :model="inputForm"
            status-icon
            :rules="rules"
            :label-position="labelPosition"
          >
            <el-form-item label="Password" prop="pass">
              <el-input
                v-model="inputForm.pass"
                type="password"
                autocomplete="off"
                show-password
              />
            </el-form-item>
            <el-form-item label="Confirm" prop="checkPass">
              <el-input
                v-model="inputForm.checkPass"
                type="password"
                autocomplete="off"
                show-password
                style="margin-left: 10px"
              /> </el-form-item
            ><br />
            <el-form-item>
              <div style="margin: auto">
                <el-button
                  type="primary"
                  @click="submitForm3(formRef3)"
                  style="margin: auto"
                  >Soumettre</el-button
                >&nbsp;
                <el-button @click="resetForm3(formRef3)" style="margin: auto"
                  >Réinitialiser</el-button
                >
              </div>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
      <el-col :xs="1" :sm="2" :md="4" :lg="6" :xl="8"> </el-col>
    </el-row>
  </section>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import type { FormInstance } from "element-plus";
import { ElNotification } from "element-plus";
import forgotpasswordS from "../../services/forgotpassword";
import router from "../../router";

const formRef3 = ref<FormInstance>();
const inputForm = reactive({
  pass: "",
  checkPass: "",
});
const labelPosition = ref("left");
const submitForm3 = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate(async (valid) => {
    if (valid) {
      try {
        const account = await forgotpasswordS.forgetPwResetPw({
          password: inputForm.pass,
          email: sessionStorage.getItem("forgetPWemail"),
        });
        ElNotification({
          title: "Succès",
          message: account.data.message,
          type: "success",
        });
        if (account.data.success) {
          sessionStorage.clear();
          router.replace({ name: "home" });
        }

        console.log();
      } catch (error) {
        ElNotification({
          title: "Error",
          message: "error in the procces",
          type: "error",
        });
      }
    } else {
      console.log("error submit!");
      return false;
    }
  });
};

const resetForm3 = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};

const validatePass = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("Veuillez entrer le mot de passe"));
  } else if (value.length <= 7) {
    callback(new Error("Mot de passe doit être d'au moins 8 caractères "));
  } else {
    if (inputForm.checkPass !== "") {
      if (!formRef3.value) return;
      formRef3.value.validateField("checkPass", () => null);
    }
    callback();
  }
};
const validatePass2 = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("Veuillez saisir à nouveau le mot de passe"));
  } else if (value !== inputForm.pass) {
    callback(new Error("Deux entrées ne correspondent pas !"));
  } else {
    callback();
  }
};

const rules = reactive({
  pass: [{ validator: validatePass, trigger: "blur" }],
  checkPass: [{ validator: validatePass2, trigger: "blur" }],
});
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
