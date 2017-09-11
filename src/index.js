module.exports = {

    template: '<div class="ui compact segment" style="padding-left:8%;">\
            <div class="field" style="margin: 0px; display: flex; margin-bottom: 5px;">\
                <div style="height: 30px; width: 30px; border: solid 1px rgba(0, 0, 0, 0.1); border-radius: 2px; display: inline-block; margin-right: 5px;" v-for="(color, index) in colors" v-bind:style="{backgroundColor: color.hex}" v-if="index < 4">\
                <i :class="{icon: selected === index}"></i>\
                </div>\
            </div>\
            <div class="field" style="margin: 0px; display: flex;">\
                <div style="height: 30px; width: 30px; border: solid 1px rgba(0, 0, 0, 0.1); border-radius: 2px; display: inline-block; margin-right: 5px;" v-for="(color, index) in colors" v-bind:style="{backgroundColor: color.hex}" v-if="index >= 4">\
                <i :class="{icon: selected === index}"></i>\
                </div>\
            </div>\
        </div>',


    props: {
        colors: {
            type: Array,
            default: false,
            required: true
        },
        icon: {
            type: String,
            default: 'inverted large checkmark icon',
            required: false
        },
    },
    data() {
        return {
            selected: null,
        }
    },
    methods: {
        selectedColor: function(color) {
            this.$emit('selected-color', color);
        },
        checkedColor(index) {
            let vm = this;
            if (vm.selected !== index) {
                vm.selected = index;
                vm.selectedColor(vm.colors[index].hex);
            } else {
                vm.selected = null;
                vm.selectedColor(null);
            }
        }
    }
};