<script>
import { useRoute } from 'vue-router';
import { ElNotification } from "element-plus";
import { ElLoading } from "element-plus";

import homeService from "../services/homeService";
export default {
 
  data() {
    return {
        idEvent : "", 
        nameEvent : "", 
        eventImage : "", 
        eventDescription : "", 
        organiser : "",
        price : "",  
        startDate :"", 
        endDate : "", 
        lastNameUser: "", 
        firstNameUser : "", 
        phoneNumberUser : "", 
        list : [], 
        codePromo : "", 
        codePromoApplied : false,
        priceAfterCodePromo : "", 
        difference : "", 
    };
  },
  mounted: function () {
       
    const route = useRoute();
    this.idEvent = route.query.id;
    this.getEvent();
  },
  methods: {
      async verifyCodePromo() {
           
          try {
 const result =  await   homeService.checkCodePromoCheck({
          name : this.codePromo , 
          price : this.price,
      })
        if(result.status == 200) {
             ElNotification({
                title: "Succées",
                message: "Code promo vérifié avec succées",
                type: "success",
              });
          this.codePromoApplied = true;
          this.priceAfterCodePromo = result.data.data.newPrice; 
          this.difference = (this.price - this.priceAfterCodePromo); 
      } else {
              ElNotification({
                title: "Erreur",
                message: "Code promo erroné",
                type: "error",
              });
      }
          } catch(e) {
    ElNotification({
                title: "Erreur",
                message: "Code promo éronée",
                type: "error",
              });
              return;
          }
    
      }, 
      formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric',hour:'numeric',minute : 'numeric'  }
      return new Date(date).toLocaleDateString('fr', options)
    },
    async getEvent() {
                 const loading = ElLoading.service({
        lock: true,
        text: "Chargement",
        background: "rgba(0, 0, 0, 0.7)",
      });
     const event = await   homeService.getOneEvent(this.idEvent)
     loading.close()
     console.log(event);
    this.nameEvent = event.data.data.name;
    this.eventImage = event.data.data.eventImage;
    console.log(this.eventImage); 
    this.eventDescription = event.data.data.description; 
    this.organiser = event.data.data.organiser;
    this.price = event.data.data.price; 
    this.startDate = event.data.data.startDate; 
    this.endDate = event.data.data.endDate; 
    },
    async achat() {

        if(this.codePromoApplied) {
            console.log("from heree");
                     const loading = ElLoading.service({
        lock: true,
        text: "Chargement",
        background: "rgba(0, 0, 0, 0.7)",
      });
    const result =    await  homeService.purchase({
            data: this.list, 
            event : {
                id: this.idEvent, 
            }, 
            codePromo: this.codePromo, 
        })
        loading.close();
        if(result.status == 200) {
         window.open( result.data.url, '_blank');
        }
        }else {
                     const loading = ElLoading.service({
        lock: true,
        text: "Chargement",
        background: "rgba(0, 0, 0, 0.7)",
      });
      
   const result = await     homeService.purchase({
            data: this.list, 
            event : {
                id: this.idEvent, 
            }, 
        })
        loading.close();
      if(result.status == 200) {
                            window.open( result.data.url, '_blank');
        } 
        }
    }, 
    async removeItemUser(index) {
     
  this.list.splice(index, 1);
     ElNotification({
                title: "Succées",
                message: "Utilisateur supprimé avec succées",
                type: "success",
              }); // 2nd parameter means remove one item only
         }, 
    async addUser() {
        console.log(this.lastNameUser); 
        console.log(this.firstNameUser);
        console.log(this.phoneNumberUser); 
        if(this.list.length > 3) {
                 ElNotification({
                title: "Erreur",
                message: "le nombre maximal est fixé à 3",
                type: "error",
              });
            return; 
        }
                 ElNotification({
                title: "Succées",
                message: "Utilisateur ajouté avec succées",
                type: "success",
              });
        this.list.push({
          id: this.list.length, 
          firstName: this.lastNameUser, 
          lastName: this.firstNameUser, 
          phoneNumber:  this.phoneNumberUser,
        })
       this.lastNameUser = ""; 
       this.firstNameUser = "";
       this.phoneNumberUser = ""; 
    }
  },
};
</script>
<template>
<div class="container">
 <br>
 <br><br>
    <div  class="pt-5 mb-100" style="display:flex;flex-direction:row;margin-top:20px;background-color:white; box-shadow: 5px 5px #99A9BF32;">
        <img class="mb-4" style="margin-right:100px" :src="eventImage" alt="" width="180" height="180">
        <div>
        <h2>{{nameEvent}}</h2>
        <p >{{eventDescription}}</p>
        <br>
        <div style="display:flex;justify-content:space-between">
<p>Du  {{formatDate(this.startDate)}} au {{formatDate(this.endDate)}} </p>
         <p  style="font-weight:bold;color:rgba(252, 134, 44, 0.991);font-size:20px;text-align:right;padding-right:30px">{{price}} DA</p>
        </div>
        <p>Organisé par:
        <span style="">{{organiser}}</span>
        </p>
       </div>
    </div>
    <div class="row">
        <div class="col-md-4 order-md-2 mb-4">
            <h4 class="d-flex justify-content-between align-items-center mb-3">
                <span class="text-muted">La liste des personnes</span>
                <span class="badge badge-secondary badge-pill">{{this.list.length}}</span>
            </h4>
            <ul class="list-group mb-3 sticky-top">
                <li v-for="item in list" :key="item.id" class="list-group-item d-flex justify-content-between lh-condensed">
                    <div>
                        <h6 class="my-0">{{item.lastName}} {{item.firstName}}</h6>
                        <small class="text-muted">{{item.phoneNumber}}</small>
                    </div>
                   <img
                   @click="removeItemUser(item.id)"
                src="../assets/remove.png"
                style="width: 8%; height: 8%; margin-right: 2px;margin-top:15px"
              />
                </li>
                <li v-if="codePromoApplied" class="list-group-item d-flex justify-content-between bg-light">
                    <div class="text-success">
                        <h6 class="my-0">Promo code</h6>
                        <small>{{codePromo}}</small>
                    </div>
                    <span class="text-success">-DA {{this.difference}}</span>
                </li>
                <li class="list-group-item d-flex justify-content-between">
                    <span>Total (DA)</span>
                    <strong>DA {{(this.price * (this.list.length + 1)) - this.difference}}</strong>
                </li>
            </ul>
         
                <div v-if="!codePromoApplied"  class="input-group">
                    <input v-model="codePromo" type="text" class="form-control" placeholder="Promo code">
                    <div class="input-group-append">
                        <button @click="verifyCodePromo" class="btn" id="button">Appliquer</button>

                    </div>
                </div>
            
        </div>
        <div class="col-md-8 order-md-1">
            <h4 class="mb-3">Information du ticket</h4>
                <div class="row">
                    <div class="col-md-6 mb-3">
                        <label for="firstName">Prénom</label>
                        <input  v-model="firstNameUser" type="text" class="form-control" >
                    </div>
                    <div class="col-md-6 mb-3">
                        <label for="lastName">Nom</label>
                        <input  v-model="lastNameUser" type="text" id="lastName" class="form-control" >
                        <div class="invalid-feedback"> Valid last name is required. </div>
                    </div>
                </div>
                <div class="mb-3">
                    <label for="address">Numéro de téléphone</label>
                    <input  v-model="phoneNumberUser" type="number" class="form-control">
                </div>              
                <hr class="mb-4">
                <button :disabled="(this.phoneNumberUser.length < 10)  ||  (this.lastNameUser.length == 0)  ||  (this.firstNameUser.length == 0)" style="background-color:rgba(252, 134, 44, 0.991);" class="btn btn-primary btn-lg btn-block" @click="addUser" >Ajouter à la liste</button>
                <br>
               <br><br><br><br>
        </div>
    </div>
    <div class="row">
       <button @click="achat" class="btn btn-primary btn-lg btn-block" style="background-color:rgba(252, 134, 44, 0.991);">Effectuer le paiment</button>
    </div>
    <br>
    <br><br><br><br>
</div>
</template>
<style scoped>
.container {
  max-width: 960px;
}
#button {
    height:60px;
    max-height: 30px; 
    width: 90px;
    font-size: 10px;
    text-align: center;
    padding: 19px;
    vertical-align: center;
    background-color:rgba(252, 134, 44, 0.991);
    color: white;
}

.lh-condensed { line-height: 1.20; }
*,
*:after,
*:before {
  box-sizing: border-box;
}

</style>
