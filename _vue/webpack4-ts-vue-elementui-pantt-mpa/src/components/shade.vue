<template>
  <div class="shade-group pShade" style="z-index:100000;" :class="{'display-none': !shadeShow}">
    <div class="shade" style="z-index:1000000000;">
      <span class="anim anim1"></span>
      <span class="anim anim2"></span>
      <span class="anim anim3"></span>
      <span class="anim anim4"></span>
      <span class="anim anim5"></span>
      <slot name="noDate"></slot>
    </div>
  </div>
</template>
<script lang='ts'>
import Vue from "vue";
export default Vue.extend({
  name: "shade",
  props: {
    shadeShow: {
      type: Boolean,
      default: false
    }
  }
});
</script>
<style scope>
.shade-group {
  /* position: relative; */
  display: block;
}
.shade-group .shade {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.7);
  text-align: center;
  font-size: 10px;
  z-index: 99;
}
.shade-group .anim {
  display: inline-block;
  background-color: #409eff;
  width: 4px;
  height: 30px;
  margin-top: 200px;
  -webkit-animation: echartLoading 1.2s infinite ease-in-out;
  animation: echartLoading 1.2s infinite ease-in-out;
}
.shade-group .anim2 {
  -webkit-animation-delay: -1.1s;
  animation-delay: -1.1s;
}
.shade-group .anim3 {
  -webkit-animation-delay: -1s;
  animation-delay: -1s;
}
.shade-group .anim4 {
  -webkit-animation-delay: -0.9s;
  animation-delay: -0.9s;
}
.shade-group .anim5 {
  -webkit-animation-delay: -0.8s;
  animation-delay: -0.8s;
}
@-webkit-keyframes echartLoading {
  0%,
  40%,
  100% {
    -webkit-transform: scaleY(0.4);
  }
  20% {
    -webkit-transform: scaleY(1);
  }
}
@keyframes echartLoading {
  0%,
  40%,
  100% {
    transform: scaleY(0.4);
  }
  20% {
    transform: scaleY(1);
  }
}
.display-none {
  display: none;
}
</style>
