<template>
	<div id="app">
		<br>
		<p>Change theme</p>
		<RadioGroup v-model="theme1">
			<Radio label="light"></Radio>
			<Radio label="dark"></Radio>
			<Radio label="primary"></Radio>
		</RadioGroup>
		<Button>Default</Button>
		<Button type="primary">Primary</Button>
		<Button type="dashed">Dashed</Button>
		<Button type="text">Text</Button>
		<br><br>
		<Button type="info">Info</Button>
		<Button type="success">Success</Button>
		<Button type="warning">Warning</Button>
		<Button type="error">Error</Button>

		<Button type="primary" shape="circle" icon="ios-search"></Button>
		<Button type="primary" icon="ios-search">Search</Button>
		<Button type="primary" shape="circle" icon="ios-search">Search</Button>
		<Button type="primary" shape="circle">Circle</Button>
		<br><br>
		<Button shape="circle" icon="ios-search"></Button>
		<Button icon="ios-search">Search</Button>
		<Button shape="circle" icon="ios-search">Search</Button>
		<Button shape="circle">Circle</Button>
		<RadioGroup v-model="buttonSize" type="button">
			<Radio label="large">Large</Radio>
			<Radio label="default">Default</Radio>
			<Radio label="small">small</Radio>
		</RadioGroup>
		<br><br>
		<p>当前正在进行第 {{ current + 1 }} 步</p>
		<Steps :current="current">
			<Step title="步骤1"></Step>
			<Step title="步骤2"></Step>
			<Step title="步骤3"></Step>
			<Step title="步骤4"></Step>
		</Steps>
		<Button type="primary" @click="next">Next step</Button>
		<Button :size="buttonSize" type="primary">Primary</Button>
		<Button :size="buttonSize" type="default">Default</Button>
		<Button :size="buttonSize" type="dashed">Dashed</Button>
		<Button :size="buttonSize" type="text">Text</Button>
		<br><br>
		<Button :size="buttonSize" icon="ios-download-outline" type="primary" shape="circle"></Button>
		<Button :size="buttonSize" icon="ios-download-outline" type="primary">Download</Button>
		<br><br>
		<ButtonGroup :size="buttonSize">
			<Button :size="buttonSize" type="primary">
                <Icon type="ios-arrow-back" />
                Backward
            </Button>
			<Button :size="buttonSize" type="primary">
                Forward
                <Icon type="ios-arrow-forward" />
            </Button>
		</ButtonGroup>
		<Button type="success" long>SUBMIT</Button>
		<br><br>
		<Button type="error" long>DELETE</Button>
		<Button type="primary" loading>Loading...</Button>
		<Button type="primary" :loading="loading" >
        <span v-if="!loading">Click me!</span>
        <span v-else>Loading...</span>
    </Button>
		<Button type="primary" :loading="loading2" icon="ios-power">
        <span v-if="!loading2">Click me!</span>
        <span v-else>Loading...</span>
    </Button>
		<Button loading shape="circle"></Button>
		<Button loading shape="circle" type="primary"></Button>
		<Steps :current="2" direction="vertical">
			<Step title="已完成" content="这里是该步骤的描述信息"></Step>
			<Step title="已完成" content="这里是该步骤的描述信息"></Step>
			<Step title="进行中" content="这里是该步骤的描述信息"></Step>
			<Step title="待进行" content="这里是该步骤的描述信息"></Step>
		</Steps>
	</div>

</template>

<script>
	export default {
		name: 'IviewDemo',
		data() {
			return {
				current: 0,
				loading2:true,
				loading:true,
				buttonSize:3
			}
		},
		methods: {
			next() {
				if(this.current == 3) {
					this.current = 0;
				} else {
					this.current += 1;
				}
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