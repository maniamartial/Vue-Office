
<template>
<div :class="colorStatus" class="text-black-800 bg-green-400 m-5 rounded-md flex p-2 w-fit py-1 text-xs"> 
    {{status}}
<slot/>
</div>

</template>


<script>
export default {
  props: {
    status: {
      type: String,
      required: false
    }
  },

  computed: {
    colorStatus() {
      return this.status === 'inactive' ? 'bg-red-400' : this.status==="Active"?'bg-green-400': 
      this.status=="Paid"? 'bg-yellow-500': 'bg-yellow-400';
    }
  }
}
</script>
