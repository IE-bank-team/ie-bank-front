<template>
  <div class="homepage">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <h1 class="title">Admin Login</h1>
          <!-- <p class="catch-phrase">Admin Login</p> -->
          <div class="login-container">
            <form @submit.prevent="login">
              <div>
                <label for="username">Username:</label>
                <input type="text" id="username" v-model="username" />
              </div>
              <div>
                <label for="password">Password:</label>
                <input type="password" id="password" v-model="password" />
              </div>
              <button type="submit">Login</button>
            </form>
            <p v-if="loggedIn">Logged in successfully!</p>
            <p v-if="error">Invalid username or password.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.homepage {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url("/public/bank-bg.jpg");
  background-size: cover;
  background-position: center;
  color: #fff;
  overflow: hidden;
}

.title {
  font-size: 4rem;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  font-weight: 600;
  animation: titleAnimation 3s ease-in-out 1.5s forwards;
  transform: translateY(-100%);
  margin-bottom: 2rem;
}

.catch-phrase {
  font-size: 1.5rem;
  text-align: center;
  font-weight: 400;
  animation: catchPhraseAnimation 3s ease-in-out 1.5s forwards;
  opacity: 0;
  margin-top: 0.5rem;
}

@keyframes titleAnimation {
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes catchPhraseAnimation {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.button-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin-top: 0.5rem;
}

.btn {
  display: block;
  margin: 0.5rem 0;
}

.login-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
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
