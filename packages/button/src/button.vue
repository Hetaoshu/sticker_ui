<template>
  <button
    class="st-button"
    @click="handleClick"
    :disabled="buttonDisabled || loading"
    :autofocus="autofocus"
    :type="nativeType"
    :class="[
      type ? 'st-button--' + type : '',
      buttonSize ? 'st-button--' + buttonSize : '',
      {
        'is-disabled': buttonDisabled,
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle
      }
    ]"
  >
    <div class="st-loader" v-if="loading" >
            <span class="st-dot" v-for="(items,index) in 7" :key="index" ></span>
    </div>
    <span :style="{opacity:loading?0:1}" v-if="$slots.default"><slot></slot></span>
  </button>
</template>
<script>

// export default :
module.exports = {
    name: 'ElButton',
    inject: {
      elForm: {
        default: ''
      },
      elFormItem: {
        default: ''
      }
    },
    data(){
      return{
      }
    },
    // watch:{
    //   loading:{
    //     immediate:true,
    //     handler(news){
         
          
    //     }
    //   }
    // },
    props: {
      type: {
        type: String,
        default: 'default'
      },
      size: String,
      icon: {
        type: String,
        default: ''
      },
      nativeType: {
        type: String,
        default: 'button'
      },
      loading: Boolean,
      disabled: Boolean,
      plain: Boolean,
      autofocus: Boolean,
      round: Boolean,
      circle: Boolean
    },

    computed: {
      _elFormItemSize() {
        return (this.elFormItem || {}).elFormItemSize;
      },
      buttonSize() {
        return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size;
      },
      buttonDisabled() {
        return this.disabled || (this.elForm || {}).disabled;
      }
    },

    methods: {
      handleClick(evt) {
        //生成水波纹效果
        let x = evt.clientX - evt.target.offsetLeft;
        let y = evt.clientY - evt.target.offsetTop;
        let ripples = document.createElement('span');
        ripples.style.left = x + 'px';
        ripples.style.top = y + 'px';
        ripples.className = 'st-ripples-append'
        evt.target.appendChild(ripples);
        setTimeout(() => {
          ripples.remove()
        }, 600);
        this.$emit('click', evt);
      }
    }
  };
</script>
