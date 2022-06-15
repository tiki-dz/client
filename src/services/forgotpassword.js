/* eslint-disable prettier/prettier */
import Api from "@/services/api";
export default {
  forgetPwSendEmail(credantials) {
    return Api().post("/common/forgetPasswordSendVerificationAccount", credantials);
  },
  forgetPwAccountValidation(credantials) {
    return Api().post("common/forgetPasswordValidateAccount", credantials , {
      headers: {
        'x-access-token': sessionStorage.getItem("forgetPWtoken")}
  })},
  forgetPwResetPw(credantials) {
    return Api().put("common/forgetPasswordChangePasswordAccount", credantials , {
      headers: {
        'x-access-token': sessionStorage.getItem("forgetPWtoken")}
  })},
  ResetPw(credantials) {
    return Api().put("/client/resetPassword", credantials , {
      headers: {
        "x-access-token": localStorage.getItem("LoggedUser"),
      },
  }
  )}
}
