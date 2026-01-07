<template>
  <div class="glitch-text" :data-text="text">
    <slot>{{ text }}</slot>
  </div>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    default: ''
  }
})
</script>

<style scoped>
.glitch-text {
  position: relative;
  display: inline-block;
  animation: glitch-skew 3s infinite linear alternate-reverse;
}

.glitch-text::before,
.glitch-text::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.8;
}

.glitch-text::before {
  left: 2px;
  text-shadow: -2px 0 #ff00ff;
  clip: rect(44px, 450px, 56px, 0);
  animation: glitch-anim 5s infinite linear alternate-reverse;
}

.glitch-text::after {
  left: -2px;
  text-shadow: -2px 0 #00ffff;
  clip: rect(44px, 450px, 56px, 0);
  animation: glitch-anim2 5s infinite linear alternate-reverse;
}

@keyframes glitch-anim {
  0% { clip: rect(31px, 9999px, 94px, 0); }
  5% { clip: rect(70px, 9999px, 71px, 0); }
  10% { clip: rect(29px, 9999px, 24px, 0); }
  15% { clip: rect(3px, 9999px, 91px, 0); }
  20% { clip: rect(16px, 9999px, 59px, 0); }
  25% { clip: rect(54px, 9999px, 99px, 0); }
  30% { clip: rect(62px, 9999px, 87px, 0); }
  35% { clip: rect(35px, 9999px, 30px, 0); }
  40% { clip: rect(53px, 9999px, 39px, 0); }
  45% { clip: rect(40px, 9999px, 23px, 0); }
  50% { clip: rect(88px, 9999px, 91px, 0); }
  55% { clip: rect(70px, 9999px, 5px, 0); }
  60% { clip: rect(56px, 9999px, 67px, 0); }
  65% { clip: rect(12px, 9999px, 41px, 0); }
  70% { clip: rect(93px, 9999px, 44px, 0); }
  75% { clip: rect(91px, 9999px, 53px, 0); }
  80% { clip: rect(17px, 9999px, 90px, 0); }
  85% { clip: rect(77px, 9999px, 64px, 0); }
  90% { clip: rect(27px, 9999px, 26px, 0); }
  95% { clip: rect(38px, 9999px, 41px, 0); }
  100% { clip: rect(97px, 9999px, 61px, 0); }
}

@keyframes glitch-anim2 {
  0% { clip: rect(65px, 9999px, 100px, 0); }
  5% { clip: rect(52px, 9999px, 74px, 0); }
  10% { clip: rect(79px, 9999px, 85px, 0); }
  15% { clip: rect(75px, 9999px, 5px, 0); }
  20% { clip: rect(67px, 9999px, 61px, 0); }
  25% { clip: rect(14px, 9999px, 79px, 0); }
  30% { clip: rect(1px, 9999px, 66px, 0); }
  35% { clip: rect(86px, 9999px, 30px, 0); }
  40% { clip: rect(23px, 9999px, 98px, 0); }
  45% { clip: rect(85px, 9999px, 72px, 0); }
  50% { clip: rect(71px, 9999px, 75px, 0); }
  55% { clip: rect(2px, 9999px, 48px, 0); }
  60% { clip: rect(30px, 9999px, 16px, 0); }
  65% { clip: rect(59px, 9999px, 50px, 0); }
  70% { clip: rect(41px, 9999px, 62px, 0); }
  75% { clip: rect(2px, 9999px, 82px, 0); }
  80% { clip: rect(47px, 9999px, 73px, 0); }
  85% { clip: rect(3px, 9999px, 27px, 0); }
  90% { clip: rect(26px, 9999px, 55px, 0); }
  95% { clip: rect(42px, 9999px, 97px, 0); }
  100% { clip: rect(38px, 9999px, 49px, 0); }
}

@keyframes glitch-skew {
  0% { transform: skew(0deg); }
  20% { transform: skew(0deg); }
  21% { transform: skew(1deg); }
  22% { transform: skew(-1deg); }
  23% { transform: skew(0deg); }
  100% { transform: skew(0deg); }
}
</style>
