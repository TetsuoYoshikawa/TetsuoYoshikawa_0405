<template>
  <body>
    <CommonHeader></CommonHeader>
    <main>
      <div class="mission">
        <div class="mission-content">
          <h2 class="mission_title">
            お客様のために進化する成長企業であり続ける
          </h2>
          <p class="mission_text">
            顧客主導型サービスを提供する企業として、お客様の会社経営に必要なサービスと情報を提供し続ける企業支援会社を目指します。企業が現在直面している「勝ち残るため」の戦略を提供できる会社として、ホームページをはじめ、各種マーケティングをご提供いたします。
          </p>
          <a href="" class="common-btn mission-btn">ミッション詳細</a>
        </div>
        <div class="mission-img">
          <img src="./assets/img/mission-img.jpg" alt="" />
        </div>
      </div>
      <div class="service" v-for="(data,index) in list" :key="index">
        <h2 class="service-title section-title">service</h2>
        <div class="service-content">
          <div class="service-img">
            <img src="./assets/img/service2.jpg" alt="" />
          </div>
          <div class="service-content_inner">
            <h3 class="mgb-15">{{data.title}}</h3>
            <p class="mgb-15">{{data.contain}}</p>
            <p class="mgb-15">{{data.section}}</p>
            <a href="" class="common-btn service-btn">サービス詳細</a>
          </div>
        </div>
        <div class="service-content">
          <div class="service-img service-img_second">
            <img src="./assets/img/service1.jpg" alt="" />
          </div>
          <div class="service-content_inner service-content_inner-second">
            <h3 class="mgb-15">{{data.title}}</h3>
            <p class="mgb-15">{{data.contain}}</p>
            <p class="mgb-15">{{data.section}}</p>
            <a href="" class="common-btn service-btn">サービス詳細</a>
          </div>
        </div>
      </div>
      <div class="company">
        <div class="recruit-company flex">
          <div class="recruit-company_size company-img" v-for="(data,index) in company" :key="index">
            <h2 class="company-title section-title">
              {{data.title}}<br /><span>{{data.section}}</span>
            </h2>
          </div>
          <div class="recruit-company_size recruit-img" v-for="(data,index) in recruit" :key="index">
            <h2 class="company-title section-title">
              {{data.title}}<br /><span>{{data.section}}</span>
            </h2>
          </div>
        </div>
      </div>
      <div class="faq">
        <h2 class="faq-title">FAQ</h2>
        <p class="faq-title-jp">良くある質問</p>
      </div>
      <div class="contact">
        <h2 class="contact-title section-title">
          contact<br /><span>お問い合わせ</span>
        </h2>
        <p class="contact-subtitle section-title">
          お気軽にお問い合わせください。
        </p>
        <p class="contact-text">
          資料請求・お問い合わせなどなんでも気軽にお問い合わせください。お仕事のご連絡もお問い合わせページに飛んでいただいて、入力フォームにご記入お願いいたします。
        </p>
        <a href="" class="common-btn contact-btn">お問い合わせへ</a>
      </div>
      <CommonFooter></CommonFooter>
    </main>
  </body>
</template>

<script>
import CommonHeader from "./components/CommonHeader";
import CommonFooter from "./components/CommonFooter";
export default{
  data(){
    return{
      list:[
        {
          title:"web制作事業",
          contain:"コーチングのミッション",
          section:"ユーザーが求める物を分析し、ユーザビリティを備えた最適なサイトを提供。建設業から美容、ブライダル、飲食店まで多種多様な業種の制作実績があります"
        }
      ],
      company:[
        {
          title:"company",
          section:"会社概要"
        }
      ],
      recruit:[
        {
          title:"recruit",
          section:"採用情報"
        }
      ]
    };
  },
  components:{
    CommonHeader,
    CommonFooter
  }
};
</script>

<style>

/*
html5doctor.com Reset Stylesheet
v1.6.1
Last Updated: 2010-09-17
Author: Richard Clark - http://richclarkdesign.com
Twitter: @rich_clark
*/

html,
body,
div,
span,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
abbr,
address,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
samp,
small,
strong,
sub,
sup,
var,
b,
i,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  font-size: 100%;
  vertical-align: baseline;
  background: transparent;
}

body {
  line-height: 1.6;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

nav ul {
  list-style: none;
}

blockquote,
q {
  quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}

a {
  margin: 0;
  padding: 0;
  font-size: 100%;
  vertical-align: baseline;
  background: transparent;
}

/* change colours to suit your needs */
ins {
  background-color: #ff9;
  color: #000;
  text-decoration: none;
}

/* change colours to suit your needs */
mark {
  background-color: #ff9;
  color: #000;
  font-style: italic;
  font-weight: bold;
}

del {
  text-decoration: line-through;
}

abbr[title],
dfn[title] {
  border-bottom: 1px dotted;
  cursor: help;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

/* change border colour to suit your needs */
hr {
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid #cccccc;
  margin: 1em 0;
  padding: 0;
}



input,
select {
  vertical-align: middle;
}


html {
  height: 100%;
}

a {
  
  text-decoration: none;
}

img {
  width: 100%;
  height: 100%;
  display: block;
}

.flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

body {
  color: #333333;
  height: 100%;
}

.mgb-15 {
  margin-bottom: 15px;
}

.common-btn {
  display: block;
  width: 130px;
  height: 40px;
  line-height: 40px;
  background: #fff;
  padding: 0 20px;
  color: #000;
  text-align: center;
}

.section-title {
  font-size: 40px;
  line-height: 1;
}

.section-title span {
  font-size: 20px;
}

/*------------------------*/
/*         header         */
/*------------------------*/
#top-header {
  height: 70px;
  line-height: 70px;
  background: rgba(0, 0, 0, 1);
}

.header-logo {
  font-size: 20px;
  font-weight: bold;
  margin-left: 35px;
  color: #fff;
  line-height: 70px;
}

.header-nav li {
  display: inline-block;
  margin-right: 35px;
  font-size: 16px;
}

.header-nav a {
  color: #fff;
}

#firstview {
  height: 100%;
  background: url("./assets/img/eyecatch.jpg") no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
}

.catchcopy {
  position: absolute;
  top: 60%;
  left: 10%;
  font-size: 60px;
  font-style: italic;
  font-weight: bold;
  color: #fff;
  line-height: 1;
}

/*------------------------*/
/*         news           */
/*------------------------*/
.news {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 50%;
}
.news-content {
  background: #fff;
  width: 80%;
  height: 70px;
}

.news_date {
  padding-left: 5px;
}

.news_title {
  padding: 0 15px;
}
.news-icon {
  background: #000;
  width: 20%;
  height: 70px;
  line-height: 70px;
  text-align: center;
  color: #fff;
}

/*------------------------*/
/*         mission        */
/*------------------------*/
.mission {
  position: relative;
  background: #000;
  margin-bottom: 10%;
  z-index: 999;
}

.mission-content {
  padding: 10% 0 10% 20%;
  box-sizing: border-box;
  width: 70%;
}

.mission_title,
.mission_text {
  margin-bottom: 30px;
  color: #fff;
}

.mission_title {
  font-size: 30px;
}

.mission-img {
  width: 40%;
  position: absolute;
  bottom: -10%;
  right: 5%;
  z-index: -999;
}

/*------------------------*/
/*         service        */
/*------------------------*/
.service {
  background: #e5e5e5;
  margin-bottom: 10%;
}

.service-title {
  text-align: center;
  padding: 20px 0;
}

.service-content {
  position: relative;
  padding-bottom: 15%;
}

.service-img {
  width: 50%;
  margin-left: 50%;
}

.service-img_second {
  margin: 0 50% 0 0;
}

.service-content_inner {
  position: absolute;
  top: 15%;
  left: 20%;
  background: #fff;
  width: 40%;
  padding: 5% 5%;
  box-sizing: border-box;
}

.service-content_inner-second {
  left: 40%;
}

.service-btn {
  border: 1px solid #000;
  margin: 0 0 0 auto;
}

/*------------------------*/
/*        recruit         */
/*------------------------*/
.company {
  margin-bottom: 10%;
}

.recruit-company_size {
  width: 48%;
  height: 300px;
  position: relative;
}

.company-img {
  background: url("./assets/img/company.jpeg") center/cover no-repeat;
}

.recruit-img {
  background: url("./assets/img/recruit.jpg") center/cover no-repeat;
}

.company-title {
  text-align: center;
  color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.company-title span {
  color: #fff;
}

/*------------------------*/
/*        faq             */
/*------------------------*/
.faq {
  width: 70%;
  background: #000;
  margin: 0 auto 10%;
  padding: 50px;
}

.faq-title,
.faq-title-jp {
  display: inline-block;
  color: #fff;
}

.faq-title {
  font-size: 40px;
  width: 10%;
}

.faq-title-jp {
  font-size: 20px;
  width: 80%;
  text-align: center;
}

/*------------------------*/
/*        contact         */
/*------------------------*/
.contact {
  background: url("./assets/img/contact-bg.jpg") center/cover no-repeat;
  padding: 10%;
}

.contact-title,
.contact-title span,
.contact-subtitle,
.contact-text {
  color: #fff;
  text-align: center;
}

.contact-title,
.contact-subtitle,
.contact-text {
  margin-bottom: 40px;
}

.contact-btn {
  margin: 0 auto;
  background: none;
  border: 1px solid #fff;
  color: #fff;
}

@media screen and (max-width: 768px){
  .header-nav {
    display: none;
  }

.catchcopy {
  position: absolute;
  text-align:center;
  width:90%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.news{
    width:100%;
  }
.mission{
  padding-bottom:5%;
}
.mission-content{
  width:80%;
  padding:0;
  margin:0 auto;
}
.mission_title{
  font-size:150%;
  width:80%;
   margin:0 auto;
   padding:10% 0;
}
.mission_text{
  font-size:80%;
  width:80%;
  margin:0 auto;
}

.mission-btn{
  width:40%;
  margin:10%;
}

.service-content_inner,
.service-img{
  width:90%;
  display:block;
  margin:0 auto;
}

.service-content {
  flex-wrap:wrap;
  padding-bottom: 15%;
}

.service-img_second {
  margin: 0 50% 0 0;
  margin:0 auto;
}

.service-content_inner {
  position: relative;
  left:0;
  right:0;
  background: #fff;
  padding: 5% 5%;
  box-sizing: border-box;
}

.service-content_inner-second {
  left: 0;
}

.recruit-company_size {
  width: 100%;
}
.faq {
  width: 65%;
  background: #000;
}


.faq-title {
  width: 20%;
}

.faq-title-jp {
  width: 60%;
  text-align: center;
}


.footer-logo{
  margin:0 auto;
}

  
}

</style>
