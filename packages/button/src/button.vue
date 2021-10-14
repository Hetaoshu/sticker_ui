<template>
  <button
    class="st-button"
    @click="handleClick"
    @mousedown="handleMousedown"
    @mouseup="handleMouseup"
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
        'is-circle': circle,
        'is-shadow':shadow
      }
    ]"
  >
    <span :class="icon" v-if="iconPosition == 'left' " ></span>
    <div class="st-loader" v-if="loading" >
            <span class="st-dot" v-for="(items,index) in 7" :key="index" ></span>
    </div>
    <span :style="{opacity:loading?0:1,'pointer-events': 'none'}" v-if="$slots.default"><slot></slot></span>
    <span :class="icon" v-if="iconPosition == 'right' " ></span>
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
      iconPosition: {
        type: String,
        default: 'left'
      },
      loading: Boolean,
      disabled: Boolean,
      plain: Boolean,
      autofocus: Boolean,
      round: Boolean,
      circle: Boolean,
      shadow:Boolean
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
      //鼠标按下
      handleMousedown(evt){
         if(this.ripplesTimer){
          clearTimeout(this.ripplesTimer)
          this.ripples.remove()
          }
        //生成水波纹效果
        let x = evt.clientX - evt.target.offsetLeft;
        let y = evt.clientY - evt.target.offsetTop;
        this.ripples = document.createElement('span');
        this.ripples.style.left = x + 'px';
        this.ripples.style.top = y + 'px';
        this.ripples.className = 'st-ripples-append'
        evt.target.appendChild(this.ripples);
      },
      handleMouseup(){
        this.ripplesTimer = setTimeout(()=>{
         this.ripples.remove();
         clearTimeout(this.ripplesTimer)
        },300)
      },
      handleClick(evt) {
        this.$emit('click', evt);
      }
    }
  };
</script>
