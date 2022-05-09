<template>
  <!-- deviding screen into two columns: sidebar and content -->
  <section class="py-8" style="background: #ffbc80; min-height: 100vh">
    <el-row :gutter="2">
      <el-col :xs="1" :sm="2" :md="4" :lg="6" :xl="8"> </el-col>
      <el-col :xs="22" :sm="20" :md="16" :lg="12" :xl="8">
        <el-card shadow="hover" class="forgotpasswordCard">
          <h3>Forgot your password ?</h3>
          <!-- Mot de passe oublié ? -->
          <br />
          <p>
            Don't worry! just fill in your mail and we will send you a link to reset your
            password.
          </p>
          <!-- Ne vous inquiétez pas! remplissez simplement votre e-mail et nous vous enverrons un lien pour réinitialiser votre mot de passe.  -->

          <el-form
            ref="formRef"
            :model="dynamicValidateForm"
            label-width="120px"
            :label-position="labelPosition"
          >
            <el-form-item
              label="Email"
              prop="email"
              :rules="[
                {
                  required: true,
                  message: 'Please input email address',
                },
                {
                  type: 'email',
                  message: 'Please input correct email address',
                  trigger: ['blur', 'change'],
                },
              ]"
            >
              <el-input
                v-model="dynamicValidateForm.email"
                type="text"
                autocomplete="off"
              />
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm(formRef)">Submit</el-button>
              <el-button @click="resetForm(formRef)">Reset</el-button>
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

import forgotpasswordS from "@/services/forgotpassword";

const formRef = ref<FormInstance>();
const dynamicValidateForm = reactive<{ email: string }>({ email: "" });
const labelPosition = ref("left");
import router from "@/router";

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate(async (valid) => {
    if (valid) {
      try {
        const account = await forgotpasswordS.forgetPwSendEmail({
          email: dynamicValidateForm.email,
        });
        ElNotification({
          title: "Succès",
          message: account.data.message,
          type: "success",
        });
        sessionStorage.setItem("forgetPWtoken", account.data.data.token);
        sessionStorage.setItem("forgetPWemail", dynamicValidateForm.email);
        if (account.data.success) {
          router.push({ name: "forgotpw1" });
        }
      } catch (error) {
        ElNotification({
          title: "Name of event is empty",
          message: "les informations sont incorrectes",
          type: "error",
        });
      }
    } else {
      console.log("error submit!");
      return false;
    }
  });
};

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};
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
