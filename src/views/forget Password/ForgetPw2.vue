<template>
  <!-- deviding screen into two columns: sidebar and content -->
  <section
    class="py-8"
    style="
      background: linear-gradient(to right top, #ffdec9e1, #ff9a5c);
      min-height: 100vh;
    "
  >
    <el-row :gutter="2">
      <el-col :xs="1" :sm="2" :md="4" :lg="6" :xl="8"> </el-col>
      <el-col :xs="22" :sm="20" :md="16" :lg="12" :xl="8">
        <el-card shadow="hover" class="forgotpasswordCard">
          <h3>Reset Password</h3>
          <!-- Mot de passe oublié ? -->
          <br />
          <p>Please enter your new password.</p>
          <!-- Ne vous inquiétez pas! remplissez simplement votre e-mail et nous vous enverrons un lien pour réinitialiser votre mot de passe.  -->
          <br />
          <el-form
            ref="formRef3"
            :model="inputForm"
            status-icon
            :rules="rules"
            label-width="120px"
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
              />
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm3(formRef3)">Submit</el-button>
              <el-button @click="resetForm3(formRef3)">Reset</el-button>
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
          title: "Name of event is empty",
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
    callback(new Error("Please input the password"));
  } else if (value.length <= 7) {
    callback(new Error("password must be at least 8 characters "));
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
    callback(new Error("Please input the password again"));
  } else if (value !== inputForm.pass) {
    callback(new Error("Two inputs don't match!"));
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
  padding: 5%;
  border-radius: 15px;
  margin-top: 18%;
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
