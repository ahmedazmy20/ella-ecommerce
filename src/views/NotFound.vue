<template>
  <div class="not-found">
    <div class="content">
      <img
        src="@/assets/404-broken-robot.svg"
        alt="Broken Robot"
        class="robot-img"
      />
      <h1 class="code">404</h1>
      <h2 class="message">Oops! Page Not Found</h2>
      <p class="description">
        Our robot hit a glitch... The page you're looking for isn't here.
      </p>
      <router-link to="/" class="home-button"> Back to Home </router-link>
    </div>
    <div class="bg-animation"></div>
  </div>
</template>

<script setup>
// صفحة ثابتة، لا حاجة لكود جافاسكريبت
</script>

<style scoped>
.not-found {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #1e1e2f, #2a2a40);
  color: #fff;
  position: relative;
  overflow: hidden;
  padding: 2rem;
  text-align: center;
}

.content {
  z-index: 2;
  max-width: 600px;
}

.robot-img {
  width: 200px;
  height: auto;
  margin-bottom: 1rem;
  animation: shake 2s infinite;
}

.code {
  font-size: 7rem;
  font-weight: 900;
  color: #ff4d4d;
  margin: 0;
}

.message {
  font-size: 2rem;
  margin: 1rem 0;
}

.description {
  font-size: 1rem;
  opacity: 0.85;
  margin-bottom: 2rem;
}

.home-button {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: #ff4d4d;
  color: #fff;
  border-radius: 30px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.home-button:hover {
  background-color: #e63946;
}

.bg-animation::before,
.bg-animation::after {
  content: "";
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.03);
  animation: float 10s infinite;
}

.bg-animation::before {
  width: 500px;
  height: 500px;
  top: -150px;
  left: -150px;
}

.bg-animation::after {
  width: 300px;
  height: 300px;
  bottom: -100px;
  right: -100px;
}

@keyframes shake {
  0%,
  100% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(2deg);
  }
  50% {
    transform: rotate(-2deg);
  }
  75% {
    transform: rotate(1deg);
  }
}

@keyframes float {
  0% {
    transform: translateY(0) rotate(0deg);
  }
  100% {
    transform: translateY(-20px) rotate(360deg);
  }
}
</style>
