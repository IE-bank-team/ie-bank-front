<template>
  <div class="homepage">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <h1 class="title">Welcome to IE Bank</h1>
          <p class="catch-phrase">Banking for a Better Tomorrow</p>
          <div class="button-container">
            <button class="btn btn-primary btn-lg" @click="$router.push('/accounts')">Go to Accounts</button>
            <button class="btn btn-secondary btn-lg" @click="$router.push('/skull')">Go to Skull Page</button>
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
  background-image: url('/public/bank-bg.jpg');
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
  justify-content: center;
  align-items: center;
  height: 100%;
  margin-top: 0.5rem;
}

.btn {
  display: block;
}

</style>