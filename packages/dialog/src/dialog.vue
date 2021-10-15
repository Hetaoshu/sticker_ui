<template>
    <transition
    name="dialog-fade"
    >
    <!-- 弹窗罩子 -->
    <div 
    class="st-dialog__mask"
    v-if="visible"
    >
      <div class="st-dialog">
            <!-- 头部 -->
            <div class="st-dialog__header">
              <slot name="title">
                <span class="st-dialog__title">{{ title }}</span>
              </slot>
            </div>
            <!-- 主体 -->
            <div class="st-dialog__body" v-if="rendered"><slot></slot></div>
            <!-- 脚部 -->
            <div class="st-dialog__footer" v-if="$slots.footer">
              <slot name="footer"></slot>
            </div>
      </div>
    </div>

  </transition>
</template>

<script>
module.exports =  {
  name: 'ElDialog',
  data() {
      return {
        // visible:true,
        rendered:true,
        
        closed: false,
        key: 0,
      };
    },
    mounted(){
      if (this.visible) {
        this.rendered = true;
        console.log('$slots',this.$slots)

      }
    },
  props: {
      visible:Boolean,
      title: {
        type: String,
        default: ''
      },

      modal: {
        type: Boolean,
        default: true
      },

      modalAppendToBody: {
        type: Boolean,
        default: true
      },

      appendToBody: {
        type: Boolean,
        default: false
      },

      lockScroll: {
        type: Boolean,
        default: true
      },

      closeOnClickModal: {
        type: Boolean,
        default: true
      },

      closeOnPressEscape: {
        type: Boolean,
        default: true
      },

      showClose: {
        type: Boolean,
        default: true
      },

      width: String,

      fullscreen: Boolean,

      customClass: {
        type: String,
        default: ''
      },

      top: {
        type: String,
        default: '15vh'
      },
      beforeClose: Function,
      center: {
        type: Boolean,
        default: false
      },

      destroyOnClose: Boolean
    }
};
</script>
