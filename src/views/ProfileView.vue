<template>

<div class="body"> 
   <br/><br/><br/><br/><br/><br/><br/>
 
    <div class="main">
    <el-divider content-position="left" id="devider"><span>Profile</span></el-divider>
          <el-card shadow="always" class="profile"> 
              <el-row>
                <el-col :span="7">
                    <!-- <div id="photo" >   
                     <img :src="profile.profilePicture" class="image" />
                    </div> -->
                    <label for="upload">Event Image</label>
                  <br /><br />
                  <div class="images">
                    <img id="upload1" src="" alt="" />
                    <div class="overlay">
                      <button
                        type="button"
                        :disabled="Disabled"
                        @click="upload()"
                        class="icon"
                      >
                        <i class="fa fa-edit"></i>
                      </button>
                    </div>
                  </div>
                  <el-upload
                    name="upload"
                    class="upload-demo uploads"
                    drag
                    :auto-upload="false"
                    v-bind:class="{ hide: eventList.length == 1 }"
                    list-type="picture-card"
                    :file-list="eventList"
                    :on-preview="handlePictureCardPreview"
                    :on-remove="handleRemove"
                    :limit="1"
                    :disabled="Disabled"
                  >
                    <i class="fa-solid fa-upload"></i>
                    <div class="el-upload__text">
                      faire glisser une image ou <em>cliquer pour choisir</em>
                    </div>
                    <template #tip>
                      <div class="el-upload__tip">
                        jpg/png files with a size less than 500kb
                      </div>
                    </template>
                  </el-upload>
                  <el-dialog v-model="dialogVisible">
                    <img w-full :src="dialogImageUrl" alt="Preview Image" />
                  </el-dialog>
                  <br /><br />
                     <br/><br/>
                     <el-button type="primary" plain class="edit">Modifier</el-button>
                     <br/><br/>
                     <a href="http://127.0.0.1:8090/resetPassword1" id="reinitialiser"> <i class="fa-solid fa-pen-to-square"></i>  Renitialiser le mot de passe</a>
             </el-col>
    <el-col :span="1" >
                <el-divider direction="vertical" style="height:100%"  border-style="solid"/>
         </el-col>
          <el-col :span="16">

               <v-content>
                      <el-row>

                         <el-col :span="12"> 
                         Nom
                         </el-col>
                         
                         <el-col :span="12"> 
                         Prénom
                         </el-col>
              </el-row>

              <el-row>
  <el-col :span="10"> 
   <el-input
                              v-model="profile.lastName"
 :disabled="Disabled"
                             ></el-input>
  </el-col>
                          <el-col :span="10" style="margin-left:8%">
                          <el-input
                              v-model="profile.firstName"
                              :disabled="Disabled"
                            ></el-input> 
                         </el-col>
                    </el-row>
                    <br/>


  <el-row>

                         <el-col :span="12"> 
                        Date de naissance
                         </el-col>
                          <el-col :span="12"> 
                         Lieu de naissance
                         </el-col> 
  </el-row>
  <el-row>

  <el-col :span="10"> 
  <el-date-picker
                              type="date"
                              v-model="profile.birthDate"
                              :disabled-date="disabledDate"
                              :shortcuts="shortcuts"
                             :disabled="Disabled"
                            ></el-date-picker>
                         </el-col>  
                         <el-col :span="10" style="margin-left:8%">
 <el-input
                              v-model="profile.city"
                        
                      
                         
                              placeholder="Lieu de naissance"
                             
                              :disabled="Disabled"
                            />
                         </el-col>
                         
                    </el-row>
                        <br/>


                   <el-row>
                        <el-col :span="12">
                        sexe
                        </el-col>
                        <el-col :span="12">
                        Téléphone
                        </el-col>
                    </el-row>
         
         
        


<el-row>
    <el-col :span="10">
          <el-select
                              v-model="profile.sexe"
                              placeholder="Select"
                             :disabled="Disabled"
                            >
                              <el-option
                                v-for="item in sexeopt"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                              >
                              </el-option>
                            </el-select>
    </el-col>
    <el-col :span="10" style="margin-left:8%">
     <el-input
                              v-model="profile.phoneNumber"
                             :disabled="Disabled"
                            ></el-input>
    </el-col>
</el-row>
<br/>
           <el-row>

                         <el-col :span="12"> 
                     E-mail
                         </el-col>
                        
  </el-row>
               <el-row>
                   <el-col :span="10">
 <el-input
                              v-model="profile.AccountEmail"
                            disabled
                            />
                   </el-col>
               </el-row>
    <br/>

 <el-row>
      <div v-if="Disabled">
                            <el-button
                            
                             @click="modifierProfile()"
                             
                              >
                                Modifier
                              </el-button>
                          </div>
                          <div v-else>
                           <el-button
                            @click="savePersInfo()"
                              
                             
                              >
                                Enregister </el-button
                              ><el-button
                              @click="annulerModif()"
                              
                              >
                                Annuler
                              </el-button>
                          </div>
 </el-row>
    </v-content>
          </el-col>
 </el-row>


                </el-card>
     <!--***************************************************************************************************************-->
     <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
  >
    <el-menu-item index="1" id="index">Mes tickets</el-menu-item>
   
    <el-menu-item index="3" id="index">Info</el-menu-item>
    <el-menu-item index="4" id="index">saved event</el-menu-item>
  </el-menu>
  <el-card class="detail">

      <el-empty description="description" />
  </el-card>
    
</div>
   <br/><br/><br/><br/><br/><br/><br/>
</div>
</template>

<script>
import authService from "../services/authService";

import { ref } from 'vue'

export default {

data() {
    return {
      eventList:[],
         sexeopt: [
        {
          value: 0,
          label: "FEMME",
        },
        {
          value: 1,
          label: "HOMME",
        },
      ],
      profile:{},
        tempInfo: "",
      Disabled: true,
      
    };
  },
  methods: {
     handleRemove(file, fileList) {
      console.log(fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    upload(){
      $(".images").hide();
      $(".uploads").show();
    },
 async getProfile(){
try {
       let response = await authService.getProfile();
        this.profile = response.data.data.User;
                console.log("ça fonctionne !");

      } catch (error) {
       console.log("ya un probleme!")
      }
    },
  
async modifierProfile() {
      try {
        this.tempInfo = Object.assign({}, this.profile);
       
        this.Disabled = false;
        console.log("modification !");
      } catch (error) {
        console.log("ya un probleme!");
      }
    },
    
 async annulerModif() {
      try {
        this.profile = Object.assign({}, this.tempInfo);
        this.Disabled = true;
        console.log("annulation!");
      } catch (error) {
        console.log("ya un probleme!");
      }
    },
   async savePersInfo() {
      try {


        this.tempInfo = {firstName:this.profile.firstName,lastName:this.profile.lastName,city:this.profile.city,sexe:(this.profile.sexe === 1 ? "Homme" : "Femme"),phoneNumber:this.profile.phoneNumber};

        this.Disabled = true;
        console.log("try",this.tempInfo);
        console.log("sauvgarde!");
        console.log(this.profile);

        const response = await authService.updateProfile(this.tempInfo);
        console.log(response.data);
      } catch (error) {
        console.log(`ya un probleme dans la modif ! ${error}`);
      }
    },


    /**********************************************UPDATE IMAGE***********************************************/
     async updateImage() {
      try {
           const response = await authService.updateImage({
               test:test,
            
           });
       
      } catch (error) {
        console.log(`ya un probleme dans la modif ! ${error}`);
      }
    },


},
created() {
    this.getProfile();
  },
};

</script>

<style scoped>

.main{
  
margin-left: 5%;
margin-right: 5%;


}
.profile{
     margin-bottom: 5%;

}

span{ 
    font-size: 24px;
    font-family: sans-serif;
}
#devider{
    background-color: #f4f4f4;
}
.el-menu-demo{
    margin-bottom: 5%;
     
}
#index{
 font-size: 24px;
    font-family: sans-serif;
}
#photo{
    width: 8rem;
    height: 8rem;
  border-radius :50%;
  border:2px solid #2B044D;
  padding:20px;
  margin-left: 30%;
  margin-top: 20%;

}
.detail{
    margin-top: 2%;
}
.edit{
    margin-left: 30% ;
}
 
#reinitialiser{
        margin-left: 18% ;

    color: #2B044D;
}

.hide{
  display: none;
}
</style>