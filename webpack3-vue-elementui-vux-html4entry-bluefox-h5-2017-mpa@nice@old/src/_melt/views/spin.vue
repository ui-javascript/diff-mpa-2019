<template>
  <div>
    <!-- 圆环  -->
    <radial-progress-bar
      :diameter="200"
      :completed-steps="completedSteps"
      :total-steps="totalSteps">
      <p>总秒数: {{ totalSteps }} s</p>
      <p>还剩 {{ completedSteps }} s</p>
    </radial-progress-bar>

    <el-button type="primary" @click="handleNext">快进</el-button>


<!--    <el-progress-->
<!--      type="circle"-->
<!--      :percentage="25"-->
<!--    ></el-progress>-->

  </div>
</template>

<script>

  let timer = null

  import RadialProgressBar from 'vue-radial-progress'

  export default {
    name: "Hah",
    data () {
      return {
        completedSteps: 10,
        totalSteps: 10
      }
    },
    methods: {
      handleNext () {
        if (this.completedSteps > 0) {
          setTimeout(() => {
            this.completedSteps--
            this.handleNext()
          }, 1000)
        }
      },
    },
    components: {
      RadialProgressBar
    }
  }
</script>
