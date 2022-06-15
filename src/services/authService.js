import Api from "@/services/api";
export default {
  Login(credantials) {
    console.log(credantials);

    return Api().post("/common/login", credantials);
  },
  SignupClient(credantials) {
    return Api().post("/client/signup", credantials);
  },
  VerifyCode(credantials) {

    return Api().post("/client/verifyCode", credantials , {
      headers: {
        "x-access-token": localStorage.getItem("x-access-token"),
      },
    });
  },


  Resendcode(credantials) {
    console.log(credantials);
    return Api().post("/client/resendVerfication", credantials);
  },
  getProfile() {
  
   return Api().get("/client/profile", 
      {
        headers: {
          "x-access-token": localStorage.getItem("LoggedUser"),
        },
      }
    );
  },
 updateProfile(credantials) {
   console.log("12121",credantials);
    return Api().put("/client", credantials , {
      headers: {
        "x-access-token": localStorage.getItem("LoggedUser"),
      },
    });
  },
  
  ResetPw(credantials) {
    console.log(credantials);
    return Api().put("/client/resetPassword", credantials , {
      headers: {
        "x-access-token": localStorage.getItem("LoggedUser"),
      },
  }
  )},
  updateImage(credantials) {
    console.log(credantials)
    return Api().put("/client/updateimage" , credantials, {
      headers: {
        'x-access-token': localStorage.getItem("LoggedUser")}
  })},
  Resendcode(credantials) {
    return Api().post("/client/resendVerfication", credantials);
  },
  cities() {
    return Api().get('/autre/cities')
  }
}
