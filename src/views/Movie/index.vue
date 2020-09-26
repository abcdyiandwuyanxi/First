<template>
  <div id="main">
    <Header title="YueMa"/>
    <div id="content">
      <div class="movie_menu">
        <!-- 进行router-link的操作，组件支持用户在具有路由功能的应用中（点击）导航。
        通过to属性指定目标地址，默认渲染成带有正确链接的<a>标签，可以通过配置tag属性渲染成别的标签。另外，当目标路由成功激活时，链接元素自动设置一个表示激活的CSS类名。 -->
				<router-link tag="div" to="/movie/city" class="city_name">
					<span>大连</span><i class="iconfont icon-lower-triangle"></i>
				</router-link>
				<div class="hot_swtich">
					<router-link tag="div" to="/movie/nowPlaying" class="hot_item">正在热映</router-link>
					<router-link tag="div" to="/movie/comingSoon" class="hot_item">即将上映</router-link>
				</div>
				<router-link tag="div" to="/movie/search" class="search_entry">
					<i class="iconfont icon-sousuo"></i>
				</router-link>
			</div>
      <!-- keep-alive是Vue内置的一个组件，可以使得被包含的组件保留状态，或避免被重新渲染，搭配router-views使用，此时所有路径匹配到的视图组件都会被缓存，APP.vue页面也有运用 -->
      <keep-alive>
        <router-view />
     </keep-alive>
    </div>
    <TabBar/>
  </div>
</template>

<script>
import Header from '@/components/Header';//@指src,局部引入组件Header,TabBar
import TabBar from '@/components/TabBar';


    export default {
        name:'Movie',
        components : {
    Header,
    TabBar,
}
    }
   
</script>

<style scoped>
#content .movie_menu{ width: 100%; height: 45px; border-bottom:1px solid #e6e6e6; display: flex; justify-content:space-between; align-items:center; background:white; z-index:10;}
.movie_menu .city_name{ margin-left: 20px; height:100%; line-height: 45px;}
.movie_menu .city_name.active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
.movie_menu .city_name.router-link-active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
.movie_menu .hot_swtich{ display: flex; height:100%; line-height: 45px;}
.movie_menu .hot_item{ font-size: 15px; color:#666; width:80px; text-align:center; margin:0 12px; font-weight:700;}
.movie_menu .hot_item.active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
.movie_menu .hot_item.router-link-active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
.movie_menu .search_entry{ margin-right:20px; height:100%; line-height: 45px;}
.movie_menu .search_entry.active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
.movie_menu .search_entry.router-link-active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
.movie_menu .search_entry i{  font-size:24px; color:red;}
</style>