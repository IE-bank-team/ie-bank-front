
<template>
  
  <div class="home-page">
    <header>
      <h1>Welcome to <span class="bank-name">IE Bank Corp</span></h1>
      <p class="slogan">Where Your Financial Goals Come to Life</p>
    </header>
    <main>
      <p class="description">
        Manage your bank accounts efficiently with our user-friendly web application.
      </p>
      <p class="about">
        At <span class="bank-name">IE Bank Corp</span>, we are dedicated to providing you with exceptional financial solutions tailored to your unique needs. With a commitment to security, innovation, and personalized service, we empower you to achieve your financial dreams. Discover a world of convenience and trust with <span class="bank-name">IE Bank Corp</span>.
      </p>
      <router-link to="/accounts" class="btn">View Accounts</router-link>

    </main>
  </div>


</template>

<script>

export default {
  name: 'HomePage',
  components: {
  },
};
</script>


<style scoped>
.home-page {
  text-align: center;
  padding: 20px;
  background-color: #d2e2d3; 
}

.bank-name {
  color: #007bff;
  font-weight: bold;
}

.slogan {
  font-size: 20px;
  margin-top: 10px;
  color: #555;
}

.description {
  font-size: 18px;
  margin-bottom: 20px;
  color: #333;
}

.about {
  font-size: 16px;
  margin-bottom: 20px;
  color: #666;
}

.btn {
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  text-align: center;
  text-decoration: none;
  background-color: #6ea0d4;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.btn:hover {
  background-color: #0056b3;
}
</style>
