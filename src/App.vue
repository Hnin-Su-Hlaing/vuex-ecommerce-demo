<template>
  <div id="app">
    <app-header></app-header>
    <div class="container">
      <router-view></router-view>
    </div>
    <notification-list />

  </div>
</template>

<script>

import AppHeader from './components/AppHeader.vue';
import NotificationList from './components/NotificationList.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    NotificationList
  }
}
</script>

<style>
</style>
