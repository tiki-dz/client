<script setup lang="ts">
import { ref } from "vue";

const currentDate = ref(new Date());
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
        <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6" style="padding: 15px">
          <el-card
            class="card"
            :body-style="{ padding: '0px' }"
            style="border-radius: 10px"
          >
            <img
              src="../assets/event.jpg"
              class="image"
              style="width: 100%; height: 250px; object-fit: cover"
            />
            <div style="padding: 14px" padding="10px">
              <h4>Djam</h4>
              <p>Oran,Hotel Méridien</p>
              <div class="bottom">
                <h5></h5>
                <h5>1500 DA</h5>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6" style="padding: 15px">
          <el-card
            class="card"
            :body-style="{ padding: '0px' }"
            style="border-radius: 10px"
          >
            <img
              src="../assets/event1.jpg"
              class="image"
              style="width: 100%; height: 250px; object-fit: cover"
            />
            <div style="padding: 14px" padding="10px">
              <h4>Nidhal Saadi</h4>
              <p>Alger ,Theatre National</p>
              <div class="bottom">
                <h4></h4>
                <h5>2000 DA</h5>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6" style="padding: 15px">
          <el-card
            class="card"
            :body-style="{ padding: '0px' }"
            style="border-radius: 10px"
          >
            <img
              src="../assets/event2.jpg"
              class="image"
              style="width: 100%; height: 250px; object-fit: cover"
            />
            <div style="padding: 14px" padding="10px">
              <h4>Djam & Khassani</h4>
              <p>Opéra d'Alger</p>
              <div class="bottom">
                <h4></h4>
                <h5>1500 DA</h5>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6" style="padding: 15px">
          <el-card
            class="card"
            :body-style="{ padding: '0px' }"
            style="border-radius: 10px"
          >
            <img
              src="../assets/event3.jpg"
              class="image"
              style="width: 100%; height: 250px; object-fit: cover"
            />
            <div style="padding: 14px" padding="10px">
              <h4>Amine Radi</h4>
              <p>Oran,Hotel Méridien</p>
              <div class="bottom">
                <h4></h4>
                <h5>3000 DA</h5>
                <el-button type="primary" class="button" size="large">
                  Réserve
                </el-button>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6" style="padding: 15px">
          <el-card
            class="card"
            :body-style="{ padding: '0px' }"
            style="border-radius: 10px"
          >
            <img
              src="../assets/event4.jpg"
              class="image"
              style="width: 100%; height: 250px; object-fit: cover"
            />
            <div style="padding: 14px" padding="10px">
              <h4>Babilone</h4>
              <p>sidi bel abbes,Théatre Régional</p>
              <div class="bottom">
                <h5>8000 DA</h5>
                <el-button type="primary" class="button"> Réserve </el-button>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6" style="padding: 15px">
          <el-card
            class="card"
            :body-style="{ padding: '0px' }"
            style="border-radius: 10px"
          >
            <img
              src="../assets/event.jpg"
              class="image"
              style="width: 100%; height: 250px; object-fit: cover"
            />
            <div style="padding: 14px" padding="10px">
              <h4>Djam</h4>
              <p>Oran,Hotel Méridien</p>
              <div class="bottom">
                <h5>1000 DA</h5>
                <el-button type="primary" class="button" size="large">
                  Réserve
                </el-button>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6" style="padding: 15px">
          <el-card
            class="card"
            :body-style="{ padding: '0px' }"
            style="border-radius: 10px"
          >
            <img
              src="../assets/event1.jpg"
              class="image"
              style="width: 100%; height: 250px; object-fit: cover"
            />
            <div style="padding: 14px" padding="10px">
              <h4>Nidhal Saadi</h4>
              <p>Alger ,Theatre National</p>
              <div class="bottom">
                <h5>2000 DA</h5>
                <el-button type="primary" class="button" size="large">
                  Réserve
                </el-button>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6" style="padding: 15px">
          <el-card
            class="card"
            :body-style="{ padding: '0px' }"
            style="border-radius: 10px"
          >
            <img
              src="../assets/event2.jpg"
              class="image"
              style="width: 100%; height: 250px; object-fit: cover"
            />
            <div style="padding: 14px" padding="10px">
              <h4>Djam & Khassani</h4>
              <p>Opéra d'Alger</p>
              <div class="bottom">
                <h5></h5>
                <h5>1500 DA</h5>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6" style="padding: 15px">
          <el-card
            class="card"
            :body-style="{ padding: '0px' }"
            style="border-radius: 10px"
          >
            <img
              src="../assets/event3.jpg"
              class="image"
              style="width: 100%; height: 250px; object-fit: cover"
            />
            <div style="padding: 14px" padding="10px">
              <h4>Amine Radi</h4>
              <p>Oran,Hotel Méridien</p>
              <div class="bottom">
                <h5>3000 DA</h5>
                <el-button type="primary" class="button" size="large">
                  Réserve
                </el-button>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6" style="padding: 15px">
          <el-card
            class="card"
            :body-style="{ padding: '0px' }"
            style="border-radius: 10px"
          >
            <img
              src="../assets/event4.jpg"
              class="image"
              style="width: 100%; height: 250px; object-fit: cover"
            />
            <div style="padding: 14px" padding="10px">
              <h4>Babilone</h4>
              <p>sidi bel abbes,Théatre Régional</p>
              <div class="bottom">
                <h5>8000 DA</h5>
                <el-button type="primary" class="button"> Réserve </el-button>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6" style="padding: 15px">
          <el-card
            class="card"
            :body-style="{ padding: '0px' }"
            style="border-radius: 10px"
          >
            <img
              src="../assets/event.jpg"
              class="image"
              style="width: 100%; height: 250px; object-fit: cover"
            />
            <div style="padding: 14px" padding="10px">
              <h4>Djam</h4>
              <p>Oran,Hotel Méridien</p>
              <div class="bottom">
                <h5>1000 DA</h5>
                <el-button type="primary" class="button" size="large">
                  Réserve
                </el-button>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6" style="padding: 15px">
          <el-card
            class="card"
            :body-style="{ padding: '0px' }"
            style="border-radius: 10px"
          >
            <img
              src="../assets/event1.jpg"
              class="image"
              style="width: 100%; height: 250px; object-fit: cover"
            />
            <div style="padding: 14px" padding="10px">
              <h4>Nidhal Saadi</h4>
              <p>Alger ,Theatre National</p>
              <div class="bottom">
                <h5>2000 DA</h5>
                <el-button type="primary" class="button" size="large">
                  Réserve
                </el-button>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6" style="padding: 15px">
          <el-card
            class="card"
            :body-style="{ padding: '0px' }"
            style="border-radius: 10px"
          >
            <img
              src="../assets/event2.jpg"
              class="image"
              style="width: 100%; height: 250px; object-fit: cover"
            />
            <div style="padding: 14px" padding="10px">
              <h4>Djam & Khassani</h4>
              <p>Opéra d'Alger</p>
              <div class="bottom">
                <h5>1500 DA</h5>
                <el-button type="primary" class="button" size="large">
                  Réserve
                </el-button>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6" style="padding: 15px">
          <el-card
            class="card"
            :body-style="{ padding: '0px' }"
            style="border-radius: 10px"
          >
            <img
              src="../assets/event3.jpg"
              class="image"
              style="width: 100%; height: 250px; object-fit: cover"
            />
            <div style="padding: 14px" padding="10px">
              <h4>Amine Radi</h4>
              <p>Oran,Hotel Méridien</p>
              <div class="bottom">
                <h5>3000 DA</h5>
                <el-button type="primary" class="button" size="large">
                  Réserve
                </el-button>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6" style="padding: 15px">
          <el-card
            class="card"
            :body-style="{ padding: '0px' }"
            style="border-radius: 10px"
          >
            <img
              src="../assets/event4.jpg"
              class="image"
              style="width: 100%; height: 250px; object-fit: cover"
            />
            <div style="padding: 14px" padding="10px">
              <h4>Babilone</h4>
              <p>sidi bel abbes,Théatre Régional</p>
              <div class="bottom">
                <h5>8000 DA</h5>
                <el-button type="primary" class="button"> Réserve </el-button>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6" style="padding: 15px">
          <el-card
            class="card"
            :body-style="{ padding: '0px' }"
            style="border-radius: 10px"
          >
            <img
              src="../assets/event.jpg"
              class="image"
              style="width: 100%; height: 250px; object-fit: cover"
            />
            <div style="padding: 14px" padding="10px">
              <h4>Djam</h4>
              <p>Oran,Hotel Méridien</p>
              <div class="bottom">
                <h5>1000 DA</h5>
                <el-button type="primary" class="button" size="large">
                  Réserve
                </el-button>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6" style="padding: 15px">
          <el-card
            class="card"
            :body-style="{ padding: '0px' }"
            style="border-radius: 10px"
          >
            <img
              src="../assets/event1.jpg"
              class="image"
              style="width: 100%; height: 250px; object-fit: cover"
            />
            <div style="padding: 14px" padding="10px">
              <h4>Nidhal Saadi</h4>
              <p>Alger ,Theatre National</p>
              <div class="bottom">
                <h5>2000 DA</h5>
                <el-button type="primary" class="button" size="large">
                  Réserve
                </el-button>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6" style="padding: 15px">
          <el-card
            class="card"
            :body-style="{ padding: '0px' }"
            style="border-radius: 10px"
          >
            <img
              src="../assets/event2.jpg"
              class="image"
              style="width: 100%; height: 250px; object-fit: cover"
            />
            <div style="padding: 14px" padding="10px">
              <h4>Djam & Khassani</h4>
              <p>Opéra d'Alger</p>
              <div class="bottom">
                <h5>1500 DA</h5>
                <el-button type="primary" class="button" size="large">
                  Réserve
                </el-button>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6" style="padding: 15px">
          <el-card
            class="card"
            :body-style="{ padding: '0px' }"
            style="border-radius: 10px"
          >
            <img
              src="../assets/event3.jpg"
              class="image"
              style="width: 100%; height: 250px; object-fit: cover"
            />
            <div style="padding: 14px" padding="10px">
              <h4>Amine Radi</h4>
              <p>Oran,Hotel Méridien</p>
              <div class="bottom">
                <h5>3000 DA</h5>
                <el-button type="primary" class="button" size="large">
                  Réserve
                </el-button>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6" style="padding: 15px">
          <el-card
            class="card"
            :body-style="{ padding: '0px' }"
            style="border-radius: 10px"
          >
            <img
              src="../assets/event4.jpg"
              class="image"
              style="width: 100%; height: 250px; object-fit: cover"
            />
            <div style="padding: 14px" padding="10px">
              <h4>Babilone</h4>
              <p>sidi bel abbes,Théatre Régional</p>
              <div class="bottom">
                <h5>8000 DA</h5>
                <el-button type="primary" class="button"> Réserve </el-button>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6" style="padding: 15px">
          <el-card
            class="card"
            :body-style="{ padding: '0px' }"
            style="border-radius: 10px"
          >
            <img
              src="../assets/event.jpg"
              class="image"
              style="width: 100%; height: 250px; object-fit: cover"
            />
            <div style="padding: 14px" padding="10px">
              <h4>Djam</h4>
              <p>Oran,Hotel Méridien</p>
              <div class="bottom">
                <h5>1000 DA</h5>
                <el-button type="primary" class="button" size="large">
                  Réserve
                </el-button>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6" style="padding: 15px">
          <el-card
            class="card"
            :body-style="{ padding: '0px' }"
            style="border-radius: 10px"
          >
            <img
              src="../assets/event1.jpg"
              class="image"
              style="width: 100%; height: 250px; object-fit: cover"
            />
            <div style="padding: 14px" padding="10px">
              <h4>Nidhal Saadi</h4>
              <p>Alger ,Theatre National</p>
              <div class="bottom">
                <h5>2000 DA</h5>
                <el-button type="primary" class="button" size="large">
                  Réserve
                </el-button>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6" style="padding: 15px">
          <el-card
            class="card"
            :body-style="{ padding: '0px' }"
            style="border-radius: 10px"
          >
            <img
              src="../assets/event2.jpg"
              class="image"
              style="width: 100%; height: 250px; object-fit: cover"
            />
            <div style="padding: 14px" padding="10px">
              <h4>Djam & Khassani</h4>
              <p>Opéra d'Alger</p>
              <div class="bottom">
                <h5>1500 DA</h5>
                <el-button type="primary" class="button" size="large">
                  Réserve
                </el-button>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6" style="padding: 15px">
          <el-card
            class="card"
            :body-style="{ padding: '0px' }"
            style="border-radius: 10px"
          >
            <img
              src="../assets/event3.jpg"
              class="image"
              style="width: 100%; height: 250px; object-fit: cover"
            />
            <div style="padding: 14px" padding="10px">
              <h4>Amine Radi</h4>
              <p>Oran,Hotel Méridien</p>
              <div class="bottom">
                <h5>3000 DA</h5>
                <el-button type="primary" class="button" size="large">
                  Réserve
                </el-button>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6" style="padding: 15px">
          <el-card
            class="card"
            :body-style="{ padding: '0px' }"
            style="border-radius: 10px"
          >
            <img
              src="../assets/event4.jpg"
              class="image"
              style="width: 100%; height: 250px; object-fit: cover"
            />
            <div style="padding: 14px" padding="10px">
              <h4>Babilone</h4>
              <p>sidi bel abbes,Théatre Régional</p>
              <div class="bottom">
                <h5>8000 DA</h5>
                <el-button type="primary" class="button"> Réserve </el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </el-main>
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
</style>
