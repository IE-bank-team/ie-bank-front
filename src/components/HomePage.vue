<template>
  <div
    class="page"
    style="margin-top: -25px; padding: 0; box-sizing: border-box"
  >
    <div class="overlap-group-wrapper">
      <div class="overlap-group">
        <div class="overlap">
          <div class="main-page-content">
            <p class="empowering-SME-s-by">
              <span class="text-wrapper">
                Pioneering your Bridge<br />
                to Financial
              </span>
              <span class="span">Prosperity</span>
            </p>
            <p class="we-help-SME-s-take">
              Unlocking Financial Opportunities, Fostering Business
              <br />
              Growth for Long-term Success.
            </p>
            <!-- <Button
              class="button-instance"
              div-class="design-component-instance-node"
              property1="variant-2"
              text="Apply for Credit"
            /> -->
            <div class="btns">
              <button
                class="button-instance"
                type="button"
                @click="$router.push('/adminlogin')"
              >
                Admin Login
              </button>
              <button
                class="button-instance2"
                type="button"
                @click="$router.push('/userlogin')"
              >
                User Login
              </button>
              <button
                class="button-instance3"
                type="button"
                @click="$router.push('/skull')"
              >
                Skull
              </button>
            </div>
          </div>
          <img
            class="business-vision"
            alt="Business vision"
            src="https://c.animaapp.com/z2ltKAdO/img/business-vision-rafiki-1.svg"
          />
        </div>
        <div class="div">IE Bank</div>
        <div class="navbar">
          <div class="text-wrapper-2">Partners</div>
          <div class="text-wrapper-3">About Us</div>
          <div class="text-wrapper-4">Careers</div>
          <div class="text-wrapper-5">Blogs</div>
          <div class="text-wrapper-6">Contact Us</div>
        </div>
        <Button class="button-2" property1="default" text="Dashboard" />
      </div>
    </div>
  </div>
</template>

<script>
import Button from "./Button.vue";

export default {
  name: "Page",
  components: {
    Button: () => Button,
  },
};
</script>

<style>
.page {
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
}

.page .overlap-group-wrapper {
  background-color: #ffffff;
  height: 982px;
  width: 1512px;
}

.page .overlap-group {
  background-image: url(https://c.animaapp.com/z2ltKAdO/img/vector-1.svg);
  background-size: 100% 100%;
  height: 976px;
  position: relative;
  top: 6px;
  width: 1500px;
}

.page .overlap {
  height: 652px;
  left: 139px;
  position: absolute;
  top: 264px;
  width: 1320px;
}

.page .main-page-content {
  height: 333px;
  left: 0;
  position: absolute;
  top: 14px;
  width: 631px;
}

.page .empowering-SME-s-by {
  color: transparent;
  font-family: "Open Sans", Helvetica;
  font-size: 49px;
  font-weight: 600;
  left: 0;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 0;
}

.page .text-wrapper {
  color: #d7def8;
}

.page .span {
  color: #ffffff;
}

.page .we-help-SME-s-take {
  color: #d7def8;
  font-family: "Open Sans", Helvetica;
  font-size: 22px;
  font-weight: 600;
  left: 0;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 178px;
}

.page .button-instance {
  border-color: unset !important;
  left: 0 !important;
  position: absolute !important;
  top: 282px !important;
  width: 156px !important;
}

.page .design-component-instance-node {
  color: #3565e9 !important;
  margin-left: -23px !important;
  margin-right: -23px !important;
}

.page .business-vision {
  height: 652px;
  left: 617px;
  position: absolute;
  top: 0;
  width: 703px;
}

.page .div {
  padding-top: 10px;
  color: #d7ddf7;
  font-family: "Open Sans", Helvetica;
  font-size: 40px;
  font-weight: 700;
  left: 90px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 62px;
  margin-left: 50px;
}

.page .navbar {
  margin-top: 10px;
  height: 22px;
  left: 756px;
  position: absolute;
  top: 74px;
  width: 518px;
  margin-left: 100px;
  cursor: pointer;
}

.page .text-wrapper-2 {
  color: #dbe4ff;
  font-family: "Open Sans", Helvetica;
  font-size: 16px;
  font-weight: 600;
  left: 0;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 0;
}

.page .text-wrapper-3 {
  color: #dbe4ff;
  font-family: "Open Sans", Helvetica;
  font-size: 16px;
  font-weight: 600;
  left: 112px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 0;
}

.page .text-wrapper-4 {
  color: #dbe4ff;
  font-family: "Open Sans", Helvetica;
  font-size: 16px;
  font-weight: 600;
  left: 229px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 0;
}

.page .text-wrapper-5 {
  color: #dbe4ff;
  font-family: "Open Sans", Helvetica;
  font-size: 16px;
  font-weight: 600;
  left: 335px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 0;
}

.page .text-wrapper-6 {
  color: #dbe4ff;
  font-family: "Open Sans", Helvetica;
  font-size: 16px;
  font-weight: 600;
  left: 424px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 0;
}

.page .button-2 {
  left: 1309px !important;
  position: absolute !important;
  top: 64px !important;
}
.btns {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
}
.button-instance,
.button-instance2,
.button-instance3 {
  background-color: #ffffff;
  border-color: #3565e9;
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
  color: #3565e9;
  cursor: pointer;
  font-family: "Open Sans", Helvetica;
  font-size: 16px;
  font-weight: 600;
  height: 48px;
  /* letter-spacing: 0;
  line-height: 24px;
  margin-bottom: 0;
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 12px;
  text-align: center; */
  width: 200px;
}
.button-instance2 {
  margin-left: 175px;
}

.button-instance3 {
  margin-right: 35px;
}

.button-instance2,
.button-instance3 {
  margin-top: 282px;
}
</style>
