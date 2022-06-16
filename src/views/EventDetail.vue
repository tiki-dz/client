<template>
<br>
<div style="margin:20px;margin-top:100px;border-radius:20px">
  <el-row justify="center"  >
      <el-col :span="18"><el-row justify="space-around">
    <el-col class="elCol" :span="11" style="padding:2%">  <img v-bind:src="event.eventImage"  style="height:250px; width:100%; border-radius:5px; object-fit: cover" >
    <h1 style="margin-top:40px">{{event.name}} </h1>
    <br>
    <span >{{event.description}}</span>
    <br><br>
    <p style="text-align:center">{{tags}}</p>
    </el-col>
    <el-col  :span="10">
      <el-row justify="center" :span="24" >
        <el-col class="elCol" style="margin-bottom:40px;background: rgb(255, 149, 0);" :span="24" ><button @click="acheter()"> Acheter </button></el-col>
        <el-col class="elCol"  :span="24" >
          <el-row justify="center">
            <el-col :span="11">
            <p>Organisateur</p>

            <p>Catégorie</p>
            <p>Sous catégories</p>
            <p>Audience</p>
            <p>Date de début</p>
            <p>Date de fin</p>
            </el-col>
            <el-col :span="12">
                <p><span>{{event.organiser}}</span></p>
                
                <p><span>{{event.SubCategories[0].Category.name}}</span></p>
                
                <p><span>{{subcategories }} </span></p>
                
                <p><span v-if="event.justForWomen">Femmes seulement</span> <span v-else>Femmes et Hommes</span></p>
                <p><span>{{formatDate(event.startDate) }}</span></p>
                <p><span>{{formatDate(event.endDate)}}</span></p>


            </el-col>
          </el-row>
          <el-row justify="center">
            <el-col :span="20"><hr></el-col>
          </el-row>
          <el-row justify="center">
            <el-col :span="11">
              <p>Tickets restants</p>
              <p>Prix</p>
            </el-col>
            <el-col :span="12">
                <p><span>{{event.ticketNb }} Tickets </span></p>
               <p><span>{{event.price}} DA</span></p>
            </el-col>
          </el-row>
        </el-col>
      </el-row> 
    </el-col>
  </el-row>
  <br>   
  
  

  <!-- <img v-bind:src="event.ticketImage"  alt="" srcset="">
  <img v-bind:src="event.outherImage"  alt="" srcset=""> -->
      </el-col></el-row>
</div>
</template>
<script>
export default {
  data() {
    return {
        event:'"',
        categories: "",
        tags:""
    };
  },
    
   created() {
    window.scrollTo(0,0);

    if (sessionStorage.getItem("currentEvent") !== null){
      this.event = JSON.parse(sessionStorage.getItem("currentEvent"));
      this.tags="#"+this.event.Tags[0].name  
      this.subcategories=this.event.SubCategories[0].name
      for (let i = 1; i < this.event.Tags.length; i++) {
        this.tags+= " , #"+this.event.Tags[i].name  
      }
      for (let i = 1; i < this.event.SubCategories.length; i++) {
        this.subcategories+= (" , "+this.event.SubCategories[i].name)   
      }
    }
    else this.$router.push("/");
},
methods:{
      formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric',hour:'numeric',minute : 'numeric'  }
      return new Date(date).toLocaleDateString('fr', options)
    },
  acheter(){
    this.$router.push({
      path: '/checkout', query: { id: this.event.idEvent }
    })
  }
}
}
</script>
<style scoped>
p{
  font-weight:600;
  color:rgb(5, 4, 7);
  margin-left: 6%;
  font-size: 13px
  
}
h1{
  text-align: center;
}

span{
  color: rgb(72, 71, 71);
  padding-left: 10%;
  text-align: center;
}
.elCol{
  background: rgba(237, 231, 231, 0);
  padding: 10px;
  padding-top:2%;
  border-radius: 2px;
  box-shadow: 0px 0px 5px rgba(183, 179, 179, 0.434) ;
}
hr{
  margin:10px
}
button{
  width: 100%;
  padding: 3px;
  border: none;
  background: rgb(255, 149, 0);
}
</style>