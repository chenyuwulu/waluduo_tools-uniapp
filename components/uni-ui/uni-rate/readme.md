## Rate 评分
> 组件名：``uni-rate``，代码块： uRate。

评分组件，多用于购买商品后，对商品进行评价等场景

### 平台差异说明

如无特殊说明，则全平台支持

### 使用说明

为了避免错误使用，给大家带来不好的开发体验，请在使用组件前仔细阅读下面的使用说明，可以帮你避免一些必要的错误使用。

- 组件内部依赖 `'uni-icons'` 组件
- 组件需要依赖 `sass` 插件 ，请自行手动安装
- 暂时不支持零星选择
- 绑定值推荐使用 `v-model` 的方式


### 基本用法 

```html
<!-- 基本用法 -->
<!-- 需要在 script 中绑定 value 变量 -->
<uni-rate v-model="value" @change="onChange"/>

<!-- 不支持滑动手势选择评分 -->
<uni-rate :touchable="false" :value="5"/>
<!-- 设置尺寸大小 -->
<uni-rate :size="18" :value="5"/>

<!-- 设置评分数 -->
<uni-rate :max="10" :value="5" />
	
<!-- 设置星星间隔 -->
<uni-rate :value="4" :margin="20" />	

<!-- 设置颜色 -->
<uni-rate :value="3" color="#bbb" active-color="red" />

<!-- 选择半星 -->
<uni-rate allow-half :value="3.5" />

<!-- 只读状态 -->
<uni-rate :readonly="true" :value="2" />

<!-- 禁用状态 -->
<uni-rate :disabled="true" disabledColor="#ccc" :value="3" />

<!-- 未选中的星星为镂空状态 -->
<uni-rate :value="3" :is-fill="false" />

			 
```

```javascript

export default {
	components: {},
	data() {
		return {
			value: 2
		}
	},
	methods: {
		onChange(e) {
			console.log('rate发生改变:' + JSON.stringify(e))
		}
	}
}

```


### uni-rate 属性说明

属性名			|	类型			|	默认值	|	说明																									
---				|	----		|	---		|	---	
value/v-model	|	Number 	 	| 1			|	当前评分
color 			|	String 	 	| #ececec	|	未选中状态的星星颜色
activeColor 	|	String 	 	| #ffca3e	|	选中状态的星星颜色
disabledColor 	|	String 	 	| #c0c0c0	|	禁用状态的星星颜色
size 			|	Number 	 	| 24		|	星星的大小
max 			|	Number 	 	| 5			|	最大评分评分数量，目前一分一颗星
margin 			|	Number 	 	| 0			|	星星的间距，单位 px
isFill 			| 	Boolean 	| true		|	星星的类型，是否为实心类型
disabled 		|	Boolean 	| false		|	是否为禁用状态 (之前版本为已读状态，现更正为禁用状态)
readonly 		|	Boolean 	| false		| 	是否为只读状态
allowHalf		| 	Boolean 	| false		|	是否展示半星
touchable		|	Boolean 	| true		|	是否支持滑动手势




### uniListChat 事件说明

事件称名			|	说明						|	返回参数			
---				|	---						|	---	
@change			|	改变 value 的值返回		|	e = { value:number }		



### 插件预览地址

[https://uniapp.dcloud.io/h5/pages/extUI/rate/rate](https://uniapp.dcloud.io/h5/pages/extUI/rate/rate)