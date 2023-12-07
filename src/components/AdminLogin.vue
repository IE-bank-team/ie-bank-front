<template>
  <div class="login" style="margin-top: -80px">
    <div class="div">
      <div class="left-content">
        <div class="overlap">
          <div class="bg" />
          <div class="group">
            <div class="overlap-group">
              <div class="ellipse" />
              <div class="ellipse-2" />
            </div>
          </div>
          <div class="content">
            <div class="frame">
              <div class="group-2">
                <div class="text-wrapper">IE Bank</div>
                <p class="p">The most popular bank in Madrid, Spain</p>
              </div>
              <div class="div-wrapper">
                <div class="text-wrapper-2" style="cursor: pointer">
                  <a
                    class="link_1"
                    target="_blank"
                    href="https://github.com/IE-bank-team/ie-bank-infra-new/wiki/IE-Bank-App-MVP-%E2%80%90-Project-Wiki"
                    >Read More</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="right-content">
        <form @submit.prevent="login">
          <div class="overlap-2">
            <div class="title">
              <div class="text-wrapper-3">Admin Login</div>
              <div class="text-wrapper-4">Welcome Back!</div>
              <!-- <div class="text-wrapper-5">Forgot Password</div> -->
            </div>
            <button class="button">
              <div class="placeholder">
                <div class="text-wrapper-6">Login</div>
              </div>
            </button>

            <div class="password">
              <div class="placeholder-2">
                <input
                  class="email-address"
                  placeholder="Password"
                  type="password"
                  id="password"
                  v-model="password"
                />
                <img
                  class="img"
                  alt="Bx bxs lock alt"
                  src="https://c.animaapp.com/EhW93k80/img/bx-bxs-lock-alt.svg"
                />
              </div>
            </div>

            <div class="email">
              <div class="placeholder-3">
                <input
                  class="email-address"
                  placeholder="Username"
                  type="text"
                  id="username"
                  v-model="username"
                />
                <img
                  class="img"
                  alt="Codicon mail"
                  src="https://c.animaapp.com/EhW93k80/img/codicon-mail.svg"
                />
              </div>
            </div>
          </div>
        </form>
        <p v-if="loggedIn" class="success-message">Logged in successfully!</p>
        <p v-if="error" class="error-message">Invalid username or password.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      loggedIn: false,
      error: false,
    };
  },
  methods: {
    login() {
      // Replace the following if-else conditions with your own logic.
      if (this.username === "adnan" && this.password === "test") {
        this.loggedIn = true;
        this.error = false;

        // Redirect to the dashboard component after successful login
        this.$router.push("/admin");
      } else {
        this.loggedIn = false;
        this.error = true;
      }
    },
  },
};
</script>

<style>
.login {
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
}

.login .div {
  background-color: #ffffff;
  height: 900px;
  overflow: hidden;
  position: relative;
  width: 1440px;
}

.login .left-content {
  height: 1203px;
  left: -207px;
  position: absolute;
  top: 0;
  width: 1067px;
}

.login .overlap {
  height: 1203px;
  position: relative;
}

.login .bg {
  background: #4a79fd;
  height: 900px;
  left: 207px;
  position: absolute;
  top: 0;
  width: 860px;
}

.login .group {
  height: 583px;
  left: 0;
  position: absolute;
  top: 620px;
  width: 638px;
}

.login .overlap-group {
  height: 583px;
  position: relative;
}

.login .ellipse {
  border: 1px solid;
  border-color: #032649;
  border-radius: 278.5px;
  height: 557px;
  left: 81px;
  position: absolute;
  top: 26px;
  width: 557px;
}

.login .ellipse-2 {
  border: 1px solid;
  border-color: #042c53;
  border-radius: 278.5px;
  height: 557px;
  left: 0;
  position: absolute;
  top: 0;
  width: 557px;
}

.login .content {
  height: 147px;
  left: 364px;
  position: absolute;
  top: 371px;
  width: 410px;
}

.login .frame {
  align-items: flex-start;
  display: inline-flex;
  flex-direction: column;
  gap: 23px;
  position: relative;
}

.login .group-2 {
  height: 87px;
  margin-right: -4px;
  position: relative;
  width: 414px;
}

.login .text-wrapper {
  color: var(--white);
  font-family: "Poppins", Helvetica;
  font-size: 40px;
  font-weight: 700;
  left: 0;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 0;
}

.login .p {
  color: var(--white);
  font-family: "Poppins", Helvetica;
  font-size: 18px;
  font-weight: 500;
  left: 0;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 60px;
}

.login .div-wrapper {
  align-items: center;
  background-color: #03294f;
  border-radius: 30px;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 10px;
  justify-content: center;
  padding: 8px 30px;
  position: relative;
}

.login .text-wrapper-2 {
  color: #ffffff;
  font-family: "Poppins", Helvetica;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  width: fit-content;
}

.login .right-content {
  height: 356px;
  left: 973px;
  position: absolute;
  top: 272px;
  width: 307px;
}

.login .overlap-2 {
  height: 356px;
  position: relative;
}

.login .title {
  height: 356px;
  left: 0;
  position: absolute;
  top: 0;
  width: 218px;
}

.login .text-wrapper-3 {
  color: #333333;
  font-family: "Poppins", Helvetica;
  font-size: 26px;
  font-weight: 700;
  left: 0;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 0;
}

.login .text-wrapper-4 {
  color: #333333;
  font-family: "Poppins", Helvetica;
  font-size: 18px;
  font-weight: 400;
  left: 0;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 42px;
}

.login .text-wrapper-5 {
  color: #333333;
  font-family: "Poppins", Helvetica;
  font-size: 14px;
  font-weight: 400;
  left: 96px;
  letter-spacing: 0;
  line-height: normal;
  opacity: 0.7;
  position: absolute;
  top: 335px;
}

.login .button {
  all: unset;
  align-items: center;
  background-color: #0575e6;
  border-radius: 30px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  left: 0;
  padding: 18px 26px;
  position: absolute;
  top: 261px;
  width: 307px;
  cursor: pointer;
}

.login .placeholder {
  height: 21px;
  position: relative;
  width: 39px;
}

.login .text-wrapper-6 {
  color: #ffffff;
  font-family: "Poppins", Helvetica;
  font-size: 14px;
  font-weight: 400;
  left: 0;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 0;
}

.login .password {
  align-items: flex-start;
  background-color: #ffffff;
  border: 1px solid;
  border-color: #eeeeee;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  left: 0;
  padding: 18px 26px;
  position: absolute;
  top: 185px;
  width: 307px;
}

.login .placeholder-2 {
  height: 24px;
  position: relative;
  width: 102px;
}

.login .text-wrapper-7 {
  color: #333333;
  font-family: "Poppins", Helvetica;
  font-size: 14px;
  font-weight: 400;
  left: 32px;
  letter-spacing: 0;
  line-height: normal;
  opacity: 0.3;
  position: absolute;
  top: 2px;
}

.login .img {
  height: 24px;
  left: 0;
  position: absolute;
  top: 0;
  width: 24px;
}

.login .email {
  align-items: flex-start;
  background-color: #ffffff;
  border: 1px solid;
  border-color: #eeeeee;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  left: 0;
  padding: 18px 26px;
  position: absolute;
  top: 109px;
  width: 307px;
}

.login .placeholder-3 {
  height: 24px;
  position: relative;
  width: 133px;
}

.login .email-address {
  background: transparent;
  border: none;
  color: #333333;
  font-family: "Poppins", Helvetica;
  font-size: 14px;
  font-weight: 400;
  left: 32px;
  letter-spacing: 0;
  line-height: normal;
  opacity: 0.3;
  padding: 5px;
  position: absolute;
  top: 2px;
  width: 201px;
  height: 30px;
  margin-top: -5px;
}

.link_1 {
  color: #ffffff;
  font-family: "Poppins", Helvetica;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: normal;
  text-decoration: none;
}

.link_1:hover {
  color: #ffffff;
  font-family: "Poppins", Helvetica;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: normal;
  text-decoration: none;
}

.email-address {
  color: black;
}
</style>
