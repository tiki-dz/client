import Api from "@/services/api";
export default {
  Login(credantials) {
    return Api().post("/common/login", credantials);
  },
  SignupClient(credantials) {
    return Api().post("/client/signup", credantials);
  },
  VerifyCode(credantials) {
    let email=credantials;
    return Api().post("/client/verifyCode", credantials ,email, {
      headers: {
        'x-access-token': localStorage.getItem("LoggedUser")}
  })},
  Resendcode(credantials) {
    return Api().post("/client/resendVerfication", credantials);
  },
}
