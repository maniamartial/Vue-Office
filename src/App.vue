<template>
  <h1 class="m-6 text-blue-500 font-bold ">Trials</h1>

<!-- <Badge status="inactive">
inactive
</Badge> -->

<!-- <button class="bg-lime-800 bg-red text-lime-50 p-2 ml-2 rounded-md" @click="launchConfetti">Confettis</button> -->

<Button @click="showDialog" class="bg-green-400">
  Show Dialog
</Button>
<Dialog
  :options="{
    title: 'Confirm',
    message: 'Are you sure you want to confirm this action?',
    size: 'xl',
    actions: [
      {
        label: 'Confirm',
        variant: 'solid',
        onClick: () => {
         
                },
      },
    ],
  }"
  v-model="dialog1"
/>
</template>

<script>
import List from "./List.vue"
// import Badge from "./Badge.vue"
import confetti from 'canvas-confetti'
import {Badge, Button, Dialog} from 'frappe-ui';


export default{
  components:{
    List,
    Badge,
    Button,
    Dialog,

  },

  data(){
      return{
        myValue:'',
        trial:'',
        getPartner:'',
        partner:['Mania', 'Malesi'],
        dialog1: false, // Define the dialog state here

      }
  },
  

  methods:{
      launchConfetti(){
        confetti({
    particleCount: 100,
    // angle: 120,
    spread: 700,
    origin: { x: 1 }
  });
      },

      showDialog(){
        dialog1=true;
        console.log("hello")
      }
  },


  watch: {
    myValue(newValue){
      console.log("My value changes", newValue)
    },
    trial(newTrial){
      console.log("Trial 2", newTrial)
    },
    getPartner(partner){
      console.log("Its me",partner)
    }
    
  }
}
</script>