<template>
  <div class="wrap">
      <p>hello axios</p>
      <div>{{this.$store.getters.num}}</div>
  </div>
</template>

<script>
// import store from '../store';
export default {
  name: "",
  props: {
    msg: String
  },
  // store,
  data() {
    return {
      isShow: true
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
    await this.$axios.get("/pjyy-deepexi-aggregation/api/v1/advertisingAssistant/findByCondition");
    // console.log(res,"res-=====");
    }
  }
};
</script>
<style scoped lang="less">
</style>
