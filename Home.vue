<template>
  <div class="home">
    <div class="top-eyecatch">
      <h1 class="media__fv-ttl">
        Portfolio
        <div class="small">Web Engineer</div>
      </h1>
    </div>
    <div class="about" id="about">
      <div>
        <div class="content-title">
          <h2>ABOUT</h2>
        </div>
        <div class="profile flex-2">
          <div class="profile-img">
            <p>
            </p>
          </div>
          <div class="profile-detail">
            <ul>
              <li>名前：吉川　哲生</li>
              <li>出身：兵庫県</li>
              <li>特技：ラテアート</li>
            </ul>
            <p class="text">
              はじめまして。平成9年生まれ24歳エンジニアのてつおと申します。大手電機メーカーで、製造課として働いていた経歴があり、ものづくりは昔から大好きです。社内大会で、近畿地方3位まで行き、技術指導者として、東京で勤めたこともあります。モノづくりを通して新しい技術を生み出せればと思いエンジニアになりました。
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="skill" id="skill">
      <div class="content-title">
        <h1>SKILL</h1>
      </div>
      <div class="skill-box flex-2">
        <div class="skill-card flex-2" v-for="skill in skill" :key="skill.id">
          <div class="skill-icon">
            <img src="../assets/HTML.png">
          </div>
          <div class="skill-desc">
            <h3>{{skill.name}}</h3>
            <div class="rating">
              <div v-if="skill.skill === 5">
                <div>★★★★★</div>
              </div>
              <div v-else-if="skill.skill === 4">
                <div>★★★★☆</div>
              </div>
              <div v-else-if="skill.skill === 3">
                <div>★★★☆☆</div>
              </div>
              <div v-else-if="skill.skill === 2">
                <div>★★☆☆☆</div>
              </div>
              <div v-else-if="skill.skill === 1">
                <div>★☆☆☆☆</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="portfolio" id="portfolio">
      <div class="content-title">
        <h1>Portfolio</h1>
      </div>
      <div class="flex">
        <div v-for="portfolio in portfolio" :key="portfolio.id">
          <div class="portfolio-card">
            <a :href="portfolio.url" class="portfolio-colum">
              <img :src="portfolio.image" class="portfolio-image">
              <p class="portfolio-tag">
                {{portfolio.name}}
              </p>
            </a>
            <div class="portfolio-tags">
              <div class="portfolio-tags__inner">
                <p>フロントエンド:HTML,CSS,JavaScript（Vue.js）</p>
                <p>バックエンド:PHP（Laravel）</p>
                  <p>作成期間:{{portfolio.created}}</p>
                  <p>
                  <a>github:</a>
                  <a class="github" :href="portfolio.github_front">フロントエンド</a>
                </p>
                <p>
                  <a>github:</a>
                  <a class="github" :href="portfolio.github_api">バックエンド</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Contact />
    <Footer />
  </div>
</template>

<script>
import axios from "axios";
//import Contact from "./Contact.vue";
//import Footer from "./Footer.vue";
export default{
  data(){
    return{
      portfolio:[],
      skill:[]
    }
  },
  methods:{
    async getPortfolio(){
      await axios
        .get("http://127.0.0.1:8000/api/portfolio")
        .then((response) => {
          this.portfolio = response.data.data;
        })
    },
    async getSkill(){
      await axios
        .get("http://127.0.0.1:8000/api/skill")
        .then((response) => {
          this.skill = response.data.data;
        })
    },
  },
  created(){
    this.getPortfolio();
    this.getSkill();    
  },
  components:{
    Contect,
    Fooeter
  }
}
</script>

