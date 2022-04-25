<script setup>
import UserImage from "../../images/image-jeremy.png";
</script>

<template>
  <div :class="$style.card">
    <div :class="$style.user">
      <img :src="UserImage" alt="user image" :class="$style.image" />
      <h1 :class="$style.title">
        <small :class="$style.titleSmall">Report for</small>
        Jeremy Robson
      </h1>
    </div>
    <div :class="$style.tabs">
      <slot />
    </div>
  </div>
</template>

<style src="./UserCard.module.scss" lang="scss" module />
