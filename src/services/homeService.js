/* eslint-disable prettier/prettier */
import Api from "@/services/api";
export default {
  AllEvents(credantials) {
    console.log("allevents");
    return Api().get('/admin/event?page='+credantials.page+'&size='+credantials.size, credantials)
  }
}
