<template>
	<div id="app">
	     <router-view></router-view>
	     <router-view  name="Hello"></router-view> //将渲染Hello组件
	     <router-view  name="text"></router-view>   //将渲染text组件
	  </div>
</template>

<script>
export default new Router({
  mode: 'history',//需要服务器，否则会出现404
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
     {
      path: '/text',
      name: 'text',
      component: text
    }, 
    {
      path: '/text/:id',
      component: param
    }
  ]
})

</script>

<style>
	/* 样式列表 */
</style>
