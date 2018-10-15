import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
var menus = [{
		path: '/',
		name: 'HelloWorld',
		component: (resolve) => require(['@/components/HelloWorld'], resolve)
	},
	{
		path: '/about',
		name: 'About',
		component: (resolve) => require(['@/components/About'], resolve),
		child:[
			{
				path: '/abouts/Guide',
				name: 'Guide',
				component: (resolve) => require(['@/components/abouts/Guide'], resolve)
			},
			{
				path: '/abouts/UseGuide',
				name: 'UseGuide',
				component: (resolve) => require(['@/components/abouts/UseGuide'], resolve)
			}
		]
	},
	{
		path: '/iview',
		name: 'IviewDemo',
		component: (resolve) => require(['@/components/IviewDemo'], resolve)
	}
];
let router =  new Router({
	routes: menus
})
router.beforeEach((to, from, next) => {
console.log(to);
next()
})
export default router