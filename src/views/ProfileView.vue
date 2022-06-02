<template>

<div class="body"> 
 <br/><br/><br/><br/><br/><br/><br/>
 <div class="main">
  <el-divider content-position="left" id="devider"><span>Profile</span></el-divider>
      <el-card shadow="always" class="profile"> 
          
     <el-row>
         <el-col :span="7">
      <div id="photo" >   <img  src="#" ></div>


<br/><br/>

           <el-button type="primary" plain class="edit">Modifier</el-button>
           <br/><br/>
           <a href="http://127.0.0.1:8090/forgetpw" id="reinitialiser"> <i class="fa-solid fa-pen-to-square"></i>  Renitialiser le mot de passe</a>

         </el-col>
          <el-col :span="1" >
          <el-divider direction="vertical" style="height:100%"  border-style="solid"/>
         </el-col>
          <el-col :span="16">
         
         
         <el-row>
             <el-col :span="10">
             gggggg
             </el-col>
              <el-col :span="10">
              ggg
             </el-col>
         </el-row>


<el-row>
             <el-col :span="10">
             gggggg
             </el-col>
              <el-col :span="10">
              ggg
             </el-col>
         </el-row>



<el-row>
             <el-col :span="10">
             gggggg
             </el-col>
              <el-col :span="10">
              ggg
             </el-col>
         </el-row>

















         
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
import Navigation1 from '@/components/Navigation1.vue'
import { ref } from 'vue'

export default {
   

}

const activeIndex = ref('1')
const activeIndex2 = ref('1')

</script>

<style>

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
</style>