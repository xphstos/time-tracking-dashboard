<script setup>
import { makeSlug, getTimeUnit } from "../../utils/utils";
defineProps({
  title: String,
  timeframe: String,
  hours: {},
});
</script>

<template>
  <article :class="$style.card" :data-type="makeSlug(title)">
    <div :class="$style.innerCard">
      <h2 :class="$style.title">{{ title }}</h2>
      <div :class="$style.hours">
        <div :class="$style.currentHours">
          {{ hours.current }}{{ getTimeUnit(hours.current) }}
        </div>
        <div :class="$style.previousHours">
          Last {{ hours.timeframe }} - {{ hours.previous
          }}{{ getTimeUnit(hours.previous) }}
        </div>
      </div>
      <button :class="$style.actions">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </article>
</template>

<style src="./StatCard.module.scss" lang="scss" module />
