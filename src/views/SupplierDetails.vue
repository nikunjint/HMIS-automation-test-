<template>
<div v-if="loading">
<ring-loader :loading="loading" :color="color" :size="size"></ring-loader>
</div>
<div v-else>
 <h5   class="mb-3">{{ supplierInfo?.supplier?.name }}</h5>
<img
  
          class="thumbnailInfo"
          width="80"
          height="50"   
          :src="supplierInfo?.supplier?.profile_picture"
        />
        </div>
</template> 

<script >
import axios from 'axios'
import 'bootstrap/dist/js/bootstrap.min.js'
import RingLoader from 'vue-spinner/src/RingLoader.vue'
export default {


  components: {
    RingLoader,
  },

  data() {
    return {
      supplierInfo: '',
       loading: true,
    }
  },
  mounted() {
    axios.get(`https://soft-ladybug-97.telebit.io/api/supplier/${this.$route.params.id}`).then((res) => {
      this.supplierInfo = res.data
    }).catch((err) => {
      console.log(err.message)
    }) .finally(() => this.loading = false)


  }
}
</script>