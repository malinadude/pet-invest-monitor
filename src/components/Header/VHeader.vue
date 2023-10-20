<script lang="ts" setup>
import HeaderThemeSwitch from '@/components/Header/HeaderThemeSwitch.vue'
import HeaderCurrencySwitch from '@/components/Header/HeaderCurrencySwitch.vue'
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="header__links">
        <a class="header__links-item" href="/">Дашборд</a>
      </div>

      <div class="header__actions">
        <HeaderThemeSwitch />
        <HeaderCurrencySwitch />
      </div>
    </div>
  </header>
</template>

<style lang="scss"></style>
