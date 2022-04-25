<script setup>
import StatCard from "../../StatCard/StatCard.vue";
import { getTimeframe } from "../../../utils/utils";
import reduce from "lodash/reduce";
import json from "../../../data.json";

const data = reduce(
  json,
  (res, val) => {
    let obj = {};
    obj.title = val.title;

    for (const [key, value] of Object.entries(val.timeframes)) {
      obj[key] = {
        ...value,
        timeframe: getTimeframe(key),
      };
    }

    res[val.title.toLowerCase()] = obj;

    return res;
  },
  {}
);
</script>

<template>
  <StatCard
    v-for="(stats, i) in data"
    :title="stats.title"
    :hours="stats.weekly"
    :key="i"
  />
</template>

<style src="../Tabs.module.scss" lang="scss" module />
