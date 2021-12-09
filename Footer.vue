<template>
  <footer id="footer">
    <div class="footer-sns flex">
      <a href="" class="sns-icon"><i class="fab fa-twitter fa-2x"></i></a>
      <a href="https://github.com/TetsuoYoshikawa" class="sns-icon"><i class="fab fa-github fa-2x"></i></a>
    </div>
    <div class="footer-content flex">
      <div class="footer-about">
        <ul>
          <li>
            <a href="#top">TOP</a>
          </li>
          <li>
            <a href="#about">ABOUT</a>
          </li>
          <li>
            <a href="#skill">SKILL</a>
          </li>
          <li>
            <a href="#portfolio">PORTFOLIO</a>
          </li>
          <li>
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
      </div>
    </div>
    <small>Copyright 2021 TETSUO YOSHIKAWA All Rights Reserved.</small>
  </footer>
</template>

<style scoped>
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

</style>