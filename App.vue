<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
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
  line-height: 1;
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
  background-color: #15202b;
}

/*------------------------*/
/*　  全体・共通のスタイル    */
/*------------------------*/
body {
  color: #333333;
}

.section-title {
  font-size: 30px;
  margin: 30px 0;
  text-align: center;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
}

img {
  display: block;
  width: 100%;
  height: auto;
}

.wrap {
  width: 80%;
  margin: 0 auto 50px;
}

.flex {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: stretch;
}
.flex-2 {
  display: flex;
}
.container {
  margin: 0 20px;
}

.container-top {
  width: 65%;
}

body {
  background: #fafafa;
}
small {
  font-size: 20px;
}
/*------------------------*/
/*         article        */
/*------------------------*/

/* article.html */

.article-nav {
  background: #fff;
  text-align: center;
  width: 100%;
}
.header-flex {
  justify-content: center;
}
.header-flex li {
  margin: 0 20px 20px;
}

.article-logo .magazine-subtitle {
  font-size: 12px;
}

#top-header.article-nav {
  background: #fff;
}
/* eyecatch */

.eyecatch {
  margin: 0 auto;
}

.top-eyecatch {
  height: 100vh;
  background: url(../assets/eyecatch.jpg) no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  width: 100%;
}
.media__fv-ttl {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  font-size: 100px;
  text-align: center;
  color: #fff;
  width: 80%;
}
.small {
  font-size: 50px;
}
.about {
  width: 100%;
  margin: 100px 0 150px 0;
}
.content-title {
  text-align: center;
  font-size: 50px;
  line-height: 50px;
  margin-bottom: 30px;
}
.profile {
  width: 100%;
}
.profile-img {
  width: 30%;
  margin-left: 100px;
  border-radius: 10px;
}
.profile-img p {
  width: 300px;
  height: 300px;
}
.profile-detail {
  margin-left: 100px;
  font-size: 20px;
}
.text {
  width: 85%;
}

/* new */

.text-content {
  min-height: 130px;
  position: relative;
  max-height: 120px;
  width: 100%;
}
.skill {
  margin: 100px auto;
  width: 70%;
}
.skill-box {
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 50px;
  margin-left: 0%;
  background-color: white;
}
.skill-card {
  display: flex;
  flex-basis: 40%;
  margin: 20px 0;
  font-size: 20px;
  border-bottom: 1px solid #999;
}
.skill-icon img {
  height: 60px;
  width: 60px;
}
.skill-desc {
  margin: 0 20px;
}
.skill-text {
  font-size: 15px;
}

/*------------------------*/
/*        category        */
/*------------------------*/
.category-type {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  font-size: 30px;
  color: #fff;
}

.category-colum {
  margin-top: 0;
  margin-left: 0;
  background-color: white;
}

.portfolio-card {
  width: 100%;
  margin: 10px 20px 10px 20px;
  padding-bottom: 10px;
  background: #fff;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.6);
}
.portfolio-colum {
  display: block;
  position: relative;
  max-height: 400px;
  box-sizing: border-box;
  padding-bottom: 10px;
}
.portfolio-image {
  height: 200px;
}

.portfolio-tag {
  text-align: center;
  background: #000;
  opacity: 0.6;
  padding: 5px;
  position: absolute;
  top: 0px;
  left: 0px;
  color: #fff;
  font-size: 14px;
  min-width: 100px;
}

.portfolio__date,
.portfolio-tags__inner {
  font-size: 12px;
  padding-bottom: 10px;
  margin-left: 10px;
}
.portfolio-tags__inner p {
  margin-bottom: 10px;
}

/*------------------------*/
/*         contact        */
/*------------------------*/

.single-eyecatch {
  font-size: 50px;
  text-align: center;
  padding: 30px 0;
}
.contact {
  margin: 0 20px;
}

.catch-text {
  font-size: 16px;
  color: #666;
  padding: 0 140px;
  letter-spacing: 0.08em;
  line-height: 1.8;
  margin: 40px 0;
  text-align: center;
}

.form {
  width: 70%;
  margin: 0 auto;
}

.form > div input {
  margin-bottom: 20px;
  padding: 7px;
}

label {
  display: inline-block;
  width: 30%;
}

input,
textarea {
  box-sizing: border-box;
  border: 1px solid #999;
  width: 65%;
}

textarea {
  vertical-align: top;
  height: 15em;
}

.button-submit {
  text-align: center;
}

.button {
  padding: 10px 30px;
  background-color: #000;
  color: #fff;
  margin: 30px 0;
}

/*------------------------*/
/*         footer         */
/*------------------------*/

footer {
  background-color: #333;
}
#footer small {
  height: 80px;
  text-align: center;
  line-height: 80px;
  text-align: center;
  display: block;
}

.footer-title {
  font-size: 28px;
  text-align: center;
  margin: 20px 0;
}

#footer .flex {
  justify-content: center;
  align-items: flex-start;
}

.footer-sns {
  padding-top: 20px;
  margin: 20px;
}

.footer-content h3 {
  font-size: 22px;
  text-align: center;
}

.sns-icon {
  margin: 0 50px;
}

.fab {
  color: white;
}

.sns-icon.first {
  margin-left: 0;
}

.footer-content ul li {
  line-height: 1.5;
}
.footer-about a {
  color: #fff;
}
.footer-about li {
  display: inline-block;
  margin-left: 30px;
}

.footer-about li:first-child {
  margin-left: 0;
}

#footer small {
  font-size: 12px;
  color: #666;
}

.footer-nav__title {
  text-align: center;
  margin: 45px 0;
}

@media screen and (max-width: 960px) {
  .magazine-colum {
    width: 43%;
  }
}

/* 768以下の時のスタイル */
@media screen and (max-width: 768px) {
  .container-top {
    padding-bottom: 70px;
    width: 100%;
  }

  /* contact */
  label {
    display: block;
  }
  .form > div {
    margin: 0 auto;
  }
  input,
  textarea {
    width: 100%;
  }

  .magazine-colum {
    width: 80%;
  }
  .magazine-colum.top-interview {
    width: 80%;
  }

  .cta-text {
    width: 90%;
    margin-bottom: 30px;
  }
  .top-eyecatch {
    margin: 0;
  }

  .single-eyecatch img {
    height: auto;
    object-fit: contain;
  }

  .single-title {
    font-size: 25px;
    margin-bottom: 20px;
    line-height: 1.2;
  }

  .main-text h2 {
    font-size: 23px;
    border-bottom: 3px solid #707070;
    padding: 10px;
    margin: 20px 0;
  }

  .main-text h3 {
    font-size: 18px;
    border-bottom: 2px solid #707070;
    border-left: 10px solid #707070;
    border-top: 2px solid #707070;
    border-right: 2px solid #707070;
    padding: 10px;
    margin: 20px 0 20px 0;
  }
  .main-text h4 {
    font-size: 15px;
    border-bottom: 1px solid #707070;
    border-left: 10px solid #707070;
    padding: 10px;
    margin: 20px 0 20px 0;
  }

  .single-container {
    margin: 0 15px;
  }

  .single-container p {
    font-size: 14px;
  }

  .eyecatch {
    padding: 0;
  }

  .single-category-tag {
    top: -32px;
  }

  .single-container {
    padding: 15px;
  }

  .news-title {
    display: block;
    margin: 10px;
  }
  .news-list {
    padding: 8px 0;
  }

  .sidebar {
    width: 90%;
  }

  .page-title__h1 {
    font-size: 25px;
    line-height: 1.2;
  }
}

.header-logo {
  width: 200px;
  margin: 0 auto;
  padding: 20px 0px;
}
.header-flex {
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  margin: 0 auto;
  margin-bottom: 40px;
}

.banner {
  margin: 30px 0;
}
.banner img {
  border-radius: 15px;
}
.contributor {
  width: 100%;
  background-color: white;
  border-radius: 15px;
  padding: 20px 0;
}
.contributor-img {
  margin: 0 auto;
  background-color: #b31566;
  height: 150px;
  width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
}
.contributor img {
  justify-content: center;
  align-items: center;
}
.contributor h2 {
  text-align: center;
  margin: 20px 0;
  font-size: 22px;
}
.category {
  background-color: white;
  margin: 30px 0px;
  padding: 0 20px;
  padding-bottom: 30px;
  border-radius: 15px;
}
.category h2 {
  font-size: 22px;
  padding: 20px 0;
}
.category__link {
  display: block;
  padding: 10px 0;
  border-bottom: 1px solid #f5f5f5;
  position: relative;
}
.arrow {
  position: absolute;
  top: 15px;
  right: 10px;
  content: "";
  width: 20px;
  height: 20px;
  background: url(./img/arrow.svg) no-repeat;
  background-size: cover;
}

</style>
