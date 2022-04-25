<script setup>
import Daily from "./components/Tabs/Daily/Daily.vue";
import Weekly from "./components/Tabs/Weekly/Weekly.vue";
import Monthly from "./components/Tabs/Monthly/Monthly.vue";
import { ref } from "vue";
import UserCard from "./components/UserCard/UserCard.vue";

const currentTab = ref("Daily");
const tabs = {
  Daily,
  Weekly,
  Monthly,
};
</script>

<template>
  <UserCard>
    <button
      v-for="(_, tab) in tabs"
      :key="tab"
      :data-active="currentTab === tab"
      @click="currentTab = tab"
    >
      {{ tab }}
    </button>
  </UserCard>
  <component :is="tabs[currentTab]" class="tab"></component>
</template>
