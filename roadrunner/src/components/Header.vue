<template>


  <div class="mainContainer">
    <img src="/img/header.jpg">

 <div class="text-block"> 
    <h1>ROAD-RUNNER</h1>
    <h3>exotic car rental</h3>
    <button type="button" class="btn btn-dark">SEARCH</button>
     <button type="button" class="btn btn-dark">SUBSCRIBE</button>
     <br><br>

  <!-- <div class="col2">
   <h1> ROAD-RUNNER </h1>
     <button class="btn">BROWSE</button>
     <button class="btn">SUBSCRIBE</button> -->


    
</div>
  </div>
</template>

<style scoped>
h1, h3, .btn {
  font-family: 'Fugaz One', cursive;
}
.btn {
  background-color: #555;
  font-size: 20px;
  color: white;
}

.col {
  background-color: white;

}


.mainContainer {
  position: relative;
  width: 100%;
}
.container {
position: relative;

}

.text-block {
  position: absolute;
  bottom: 20px;
  left: 20px;
  background-color: black;
  opacity: 0.7;
  filter: alpha(opacity=70);
  color: white;
  padding-left: 20px;
  padding-right: 20px;
}

.mainContainer img {
  width: 100%;
  height: auto;
}


.mainContainer .col2  {
  position: absolute;
  top: 60%;
  left: 30%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);

  color: white;
  font-size: 16px;
  padding: 12px 24px;
  border: none;
  cursor: pointer;
 
}





.mainContainer .btn:hover {
  background-color: black;
}

</style>




<script>
export default {
  name: "Header"
};
</script>





