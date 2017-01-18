<template>
  <div>
    <nav-bar/>
    <nuxt/>
    <site-footer/>
  </div>
</template>

<script>
import NavBar from '~components/nav'
import SiteFooter from '~components/footer'

export default {
  head: {
    meta: [
      { name: 'viewport', content: 'initial-scale=1.0, width=device-width' }
    ],
    link: [
     { rel: 'icon', type: 'image/x-icon', href: 'https://nuxtjs.org/favicon.ico' },
     { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400' },
     { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' }
    ]
  },
  components: {
    NavBar,
    SiteFooter
  }
}
</script>

<style src="~assets/main.css" />
