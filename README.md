# VueJS Colorpicker :zap:
+ A simple Vue.js colorpicker :red_circle: for custom need.

+ This is [on GitHub](https://github.com/vinayakkulkarni/vuejs-colorpicker)  so let me know if I've b0rked it somewhere, give me a star :star: if you like it :beers:

## Requirements

* [Vue.js](https://vuejs.org/) 2.x

## :white_check_mark: Install :ok_hand:

```bash
npm install vuejs-colorpicker
// or
yarn add vuejs-colorpicker
```

## :white_check_mark: Usage :mortar_board:

Register the component globally:
```javascript
Vue.component('colorpicker', require('vuejs-colorpicker'));
```
Or use locally
```javascript
import colorpicker from 'vuejs-colorpicker';
```

## :white_check_mark: Example :four_leaf_clover:

```html
<colorpicker :colors="colors" v-on:selected-color="setColorCode"></colorpicker>
```

```javascript
Vue.component('example-component', {
	data() {
		return {
            color_code: null,
			colors: [
				{"hex" : "#FFFFFF"}, {"hex" : "#000000"}, {"hex" : "#FF00FF"}, {"hex" : "#FFFF00"}, 
				{"hex" : "#000FFF"}, {"hex" : "#F0F0F0"}, {"hex" : "#0F0F0F"}, {"hex" : "#00FF00"}
			],
		}
	},
	methods: {
		setColorCode(color_code) {
			this.color_code = color_code;
		},
	}
});
```

### :white_check_mark: Props :book:

| Name | Type | Description |
| --- | --- | --- |
| `colors` | Array | (required) The colors to be sent to the picker, see eg. for how to send it. |
| `icon` | String | (optional) Default is `inverted large checkmark icon`; Refer [Semantic-UI Icons](https://semantic-ui.com/elements/icon.html) for specifying which icons you want. |

### :white_check_mark: Events :ear:

| Name | Description |
| --- | --- |
| `selected-color` | Emits `color_code` hex.|


## NPM :octocat:  

[![NPM](https://nodei.co/npm/vuejs-colorpicker.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/vuejs-colorpicker/)