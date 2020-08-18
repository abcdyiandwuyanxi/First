<template>
<!-- keep-alive是Vue内置的一个组件，可以使得被包含的组件保留状态，或避免被重新渲染，搭配router-views使用，此时所有路径匹配到的视图组件都会被缓存，views的movie的index页面也有运用 -->
  <keep-alive>
    <router-view />
  </keep-alive>
</template>

