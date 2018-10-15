<template>
	<div id="app">
		<Menu mode="horizontal" :theme="theme1" active-name="1">

			<MenuItem v-for="(obj,index) in menus" v-bind:name="index+1">
			<Icon type="ios-construct" />
			<router-link v-bind:to="obj.path">{{obj.name}}</router-link>
			</MenuItem>
		</Menu>

		<Row>
			<Col span="4">
			<Menu active-name="1-2" :open-names="['1']">
				<Submenu name="1">
					<template slot="title">
						<Icon type="ios-analytics" /> Navigation One
					</template>
					<MenuGroup title="Item 1">
						<MenuItem name="1-1">Option 1</MenuItem>
						<MenuItem name="1-2">Option 2</MenuItem>
					</MenuGroup>
					<MenuGroup title="Item 2">
						<MenuItem name="1-3">Option 3</MenuItem>
						<MenuItem name="1-4">Option 4</MenuItem>
					</MenuGroup>
				</Submenu>
				<Submenu name="2">
					<template slot="title">
						<Icon type="ios-filing" /> Navigation Two
					</template>
					<MenuItem name="2-1">Option 5</MenuItem>
					<MenuItem name="2-2">Option 6</MenuItem>
					<Submenu name="3">
						<template slot="title">Submenu</template>
						<MenuItem name="3-1">Option 7</MenuItem>
						<MenuItem name="3-2">Option 8</MenuItem>
					</Submenu>
				</Submenu>
				<Submenu name="4">
					<template slot="title">
						<Icon type="ios-cog" /> Navigation Three
					</template>
					<MenuItem name="4-1">Option 9</MenuItem>
					<MenuItem name="4-2">Option 10</MenuItem>
					<MenuItem name="4-3">Option 11</MenuItem>
					<MenuItem name="4-4">Option 12</MenuItem>
				</Submenu>
			</Menu>
			</Col>
			<Col span="20">
			<router-view></router-view>
			</Col>
		</Row>
	</div>

</template>

<script>
	var menus = [{
			path: '/',
			name: 'HelloWorld',
			component: (resolve) => require(['@/components/HelloWorld'], resolve)
		},
		{
			path: '/about',
			name: 'About',
			component: (resolve) => require(['@/components/About'], resolve),
			child: [{
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
	export default {
		name: 'App',
		data() {
			return {
				menus: menus,
				current: 0,
				theme1: 'light'
			}
		},
		methods: {
			next() {
				if(this.current == 3) {
					this.current = 0;
				} else {
					this.current += 1;
				}
			},
			leftMenu(obj) {
				alert();
			}
		}
	}
</script>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}
</style>