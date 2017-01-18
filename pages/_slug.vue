<template>
  <main :key="page.slug">
    <hero-unit :page="page"/>
    <div class="container" v-html="page.content"></div>
  </main>
</template>

<script>
import Cosmic from '~plugins/cosmic'
import HeroUnit from '~components/hero-unit'

export default {
  async data ({ params }) {
    let res
    try {
      res = await Cosmic.getPage(params.slug || 'home')
    } catch (e) {
      res = await Cosmic.getPage('error')
    }
    return { page: res.object }
  },
  head () {
    return {
      title: this.page.title
    }
  },
  components: {
    HeroUnit
  }
}
</script>

<style scoped>
.container {
  margin: 0 auto;
  margin-top: 5px;
  max-width: 960px;
  padding: 15px;
  padding-bottom: 40px;
}
</style>
