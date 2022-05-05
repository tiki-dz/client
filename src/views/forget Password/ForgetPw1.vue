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
          <h3>Validate your account</h3>
          <!-- Mot de passe oublié ? -->
          <br />
          <p>Please enter the code sended to your email.</p>
          <!-- Ne vous inquiétez pas! remplissez simplement votre e-mail et nous vous enverrons un lien pour réinitialiser votre mot de passe.  -->
          <br />
          <el-form
            ref="formRef2"
            :model="dynamicValidateForm"
            label-width="120px"
            :label-position="labelPosition"
          >
            <el-form-item
              label="Code"
              prop="code"
              :rules="[{ required: true, message: 'code is required' }]"
            >
              <el-input
                style="width: 80%"
                v-model.number="dynamicValidateForm.code"
                maxlength="6"
                placeholder="Please code"
                show-word-limit
                type="text"
              />
            </el-form-item>
            <el-form-item style="margin: auto">
              <el-button type="primary" @click="submitForm2(formRef2)">Submit</el-button>
              <el-button @click="resetForm2(formRef2)">Reset</el-button>
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

const formRef2 = ref<FormInstance>();
const dynamicValidateForm = reactive<{ code: string }>({ code: "" });
const labelPosition = ref("left");
props: ["email", "token"];
const submitForm2 = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate(async (valid) => {
    if (valid) {
      try {
        const account = await forgotpasswordS.forgetPwAccountValidation({
          code: dynamicValidateForm.code.toString(),
          email: sessionStorage.getItem("forgetPWemail"),
        });
        ElNotification({
          title: "Succès",
          message: account.data.message,
          type: "success",
        });
        sessionStorage.setItem("forgetPWtoken", account.data.data.token);
        if (account.data.success) {
          router.push({ name: "forgotpw2" });
        }
        console.log();
      } catch (error) {
        ElNotification({
          title: "Name of event is empty",
          message: "Code incorrect",
          type: "error",
        });
      }
    } else {
      console.log("error submit!");
      return false;
    }
  });
};

const resetForm2 = (formEl: FormInstance | undefined) => {
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
