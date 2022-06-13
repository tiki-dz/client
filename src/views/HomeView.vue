<script>
import { ref } from "vue";
import homeService from "../services/homeService";
export default {
  data() {
    return {
      currentPage: 1,
      Allevents: [],
      pages: 0,
      pageSize: 5,
    };
  },
  mounted: function () {
    this.handleCurrentChange(1);
  },
  methods: {
    async handleCurrentChange(pageNumber) {
      console.log("events");
      let events = await homeService.AllEvents({
        page: pageNumber - 1,
        size: this.pageSize,
      });
      console.log(events);
      this.Allevents = events.data.events;
      this.pages = events.data.totalItems;
      console.log(this.pages);
    },
  },
};
</script>

<template>
  <el-container class="test">
    <el-header style="background: #fff; margin: 20px; border-radius: 10px; height: 400px">
      <br />
      <el-carousel :interval="4000" type="card" height="300px" style="margin: 20px">
        <el-carousel-item style="border-radius: 5px">
          <img
            src="../assets/cc1.jpg"
            alt=""
            style="width: 100%; height: 300px; object-fit: cover"
          />
        </el-carousel-item>

        <el-carousel-item style="border-radius: 5px">
          <img
            src="../assets/cc3.jpg"
            alt=""
            style="width: 100%; height: 300px; object-fit: cover"
          />
        </el-carousel-item>
        <el-carousel-item style="border-radius: 5px">
          <img
            src="../assets/cc4.jpg"
            alt=""
            style="width: 100%; height: 300px; object-fit: cover"
          />
        </el-carousel-item>
        <el-carousel-item style="border-radius: 5px">
          <img
            src="../assets/cc2.jpg"
            alt=""
            style="width: 100%; height: 300px; object-fit: cover"
          />
        </el-carousel-item>
        <el-carousel-item style="border-radius: 5px">
          <img
            src="../assets/cc5.jpg"
            alt=""
            style="width: 100%; height: 300px; object-fit: cover"
          />
        </el-carousel-item>
      </el-carousel>
    </el-header>
    <el-main style="margin: 0 100px">
      <el-row>
        <el-col
          :xs="24"
          :sm="12"
          :md="6"
          :lg="6"
          :xl="6"
          style="padding: 15px"
          v-for="(event, index) in Allevents"
          :key="event"
        >
          <el-card
            class="card"
            :body-style="{ padding: '0px' }"
            style="border-radius: 10px"
          >
          
            <el-tag v-if="event.SubCategories.length > 0 && event.SubCategories[0].Category.name === 'SPORT'" round :key="event.SubCategories[0].Category.name" class="mx-1 category-tag" effect="dark" style="background-color:black;border-color: black;" > {{event.SubCategories[0].Category.name}} </el-tag>
            <el-tag v-else-if="(event.SubCategories.length > 0) && (event.SubCategories[0].Category.name === 'Cinéma')  " round :key="event.SubCategories[0].Category.name" class="mx-1 category-tag" effect="dark"  > {{event.SubCategories[0].Category.name}} </el-tag>
            <el-tag v-else-if="(event.SubCategories.length > 0) && (event.SubCategories[0].Category.name === 'Théâtre')  " round :key="event.SubCategories[0].Category.name" class="mx-1 category-tag" effect="dark" style="background-color:blue; border-color: blue;" > {{event.SubCategories[0].Category.name}} </el-tag>
            <!-- <el-tag v-if="(event.SubCategories.length > 0) and (event.SubCategories[0].Category.name == "SPORT")  " round :key="event.SubCategories[0].Category.name" class="mx-1 category-tag" effect="dark" style="background-color:black;" > {{event.SubCategories[0].Category.name}} </el-tag>
            <el-tag v-if="(event.SubCategories.length > 0) and (event.SubCategories[0].Category.name == "SPORT")  " round :key="event.SubCategories[0].Category.name" class="mx-1 category-tag" effect="dark" style="background-color:black;" > {{event.SubCategories[0].Category.name}} </el-tag> -->
            <img
              v-if="event.eventImage"
              :src="event.eventImage"
              class="image"
              style="width: 100%; height: 250px; object-fit: cover"
            />
            
            
            <div style="padding: 14px" padding="10px">
              <h4 v-if="event.name.length < 20">{{ event.name }}</h4>
              <h4 v-else>{{ event.name.substring(0, 19) }} ..</h4>
              <img
                src="../assets/icons/date.png"
                style="width: 5%; height: 5%; margin-right: 10px"
              />
              <time class="time">{{ event.startDate.split("T")[0] }} &nbsp; 10:00</time
              ><br />
              
              <p>
                <img
                  src="../assets/icons/adress.png"
                  style="width: 5%; height: 5%; margin-right: 10px"
                />{{ event.address }}
              </p>
              <div class="bottom">
                <h5 v-if="event.price != null">{{ event.price }} DA</h5>
                <h5 v-else>Gratuit</h5>
                <el-button type="primary" class="button" size="large">
                  Réserve
                </el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </el-main>
    <el-pagination
            v-model:currentPage="currentPage"
            v-model:page-size="pageSize"
            :small="small"
            :disabled="disabled"
            :background="background"
            layout="prev, pager, next, jumper"
            :total="pages"
            @current-change="handleCurrentChange"
          />
  </el-container>
  <section class="py-6">
    <hr />

    <div class="container">
      <div class="row align-items-center">
        <div
          class="col-md-5 col-lg-7 order-md-1 text-center text-md-start z-index-2"
          style="padding-left: 150px"
        >
          <img src="../assets/home-img1.png" width="80%" alt="" />
        </div>
        <div class="col-md-7 col-lg-5 text-center text-md-start">
          <h1 class="display-3 fw-bold lh-sm">Téléchargez maintenant</h1>
          <p class="my-5">
            Le premier site de billets électroniques en Algérie vous offre la possibilité
            d'acheter des billets en ligne pour les derniers événements sportifs et
            culturels de manière simple, sûre et rapide.
          </p>
          <div class="d-flex justify-content-center d-md-inline-block">
            <a class="pe-2 pe-sm-3 pe-md-4" href="!#"
              ><img src="../assets/google-play.png" width="160" alt=""
            /></a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.time {
  font-size: 12px;
  color: #999;
}

.bottom {
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
p {
  margin-top: 0;
  font-size: 13px;
}

.button {
  margin-bottom: 5px;
  min-height: auto;
}

.image {
  width: 100%;
  display: block;
}

h5 {
  padding-top: 5px;
  color: #ff0000;
  font-weight: bold;
}
.test {
  background: #f4f4f4;
}
.category-tag{
  position:absolute;
  top:20px;
  right:20px;
}
</style>
