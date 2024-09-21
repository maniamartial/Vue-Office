<template>
    <div>
      <h2>{{ item.full_name }}</h2>
      <img :src="item.image" style="height:100px; padding-top:20px; width:120px" alt="" />
    </div>
  </template>
  
  <script>
  export default {
    props: {
      item: {
        type: Object, // Use capital 'O'
        required: true,
      }
    }
  };
  </script>
  