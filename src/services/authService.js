import Api from "@/services/api";
export default {
  Login(credantials) {
    return Api().post("/common/login", credantials);
  },
}
