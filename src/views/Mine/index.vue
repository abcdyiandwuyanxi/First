<template>
  <div id="main">
    <Header title="Mine-YueMa" />
		<div id="content">
      <Login />
    </div>
    <TabBar />
  </div>
</template>

<script>
import Header from "@/components/Header"; //@指src,局部引入组件Header,TabBar,Login
import TabBar from "@/components/TabBar";
import Login from "@/components/Login";
export default {
  name: "Mine",
  // 注册组件Header,TabBar,
  components: {
    Header,
    TabBar,
    Login,
  },
};
</script>

<style>
</style>