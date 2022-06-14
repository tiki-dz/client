/* eslint-disable prettier/prettier */
import Api from "@/services/api";
export default {
  AllEvents(credantials) {
    console.log("allevents");
    return Api().get('/admin/event?page='+credantials.page+'&size='+credantials.size, credantials)
  },
   getOneEvent(id) {
    return Api().get('/admin/event/'+ id)
  }, 
  checkCodePromoCheck(credantials) {
    return Api().post('/admin/codepromo/check', credantials); 
  },
  purchase(credentials) {
    console.log('cre',credentials);
    return Api().post("/payment/purchase", credentials, {
      headers: {
        "x-access-token": localStorage.getItem("x-access-token"),
      },
    }); 
  }
  
}
