<template>
  <div class="layout layout--default">
    <slot name="header" />

    <main class="main">
      <div class="container">
        <div class="main-wrapper">
          <slot />
        </div>
      </div>
    </main>
  </div>
</template>
