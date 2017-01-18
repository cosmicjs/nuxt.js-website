<template>
  <nav class="nav">
    <ul>
      <li>
        <nuxt-link to="/" exact>Home</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/about">About</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/" active-class="none"><i class="logo"></i></nuxt-link>
      </li>
      <li>
        <nuxt-link to="/work">Work</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/contact">Contact</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: ['page']
}
</script>

<style>
.nav {
  height: 60px;
  position: absolute;
  text-align: center;
  width: 100%;
  z-index: 1;
}
</style>
