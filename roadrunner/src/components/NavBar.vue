<template>
    <!-- <div class="nav bar" id="NavBar">
       <nav class="navbar navbar-expand-sm navbar-light bg-light">
           <a class="navbar-brand" href="#"><img src="/img/RoadRunner.png"></a>
           
           <div class="collapse navbar-collapse" id="collapsibleNavId">
               <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                   <li class="nav-item active">
                       <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                   </li>
                   <li class="nav-item active">
                       <a class="nav-link" href="#">About Us <span class="sr-only">(current)</span></a>
                   </li>
                   <li class="nav-item active">
                       <a class="nav-link" href="#">Subscribe<span class="sr-only">(current)</span></a>
                   </li>
                   <li class="nav-item active">
                       <a class="nav-link" href="#">Login <span class="sr-only">(current)</span></a>
                   </li>
            
               </ul> -->




<div>
               <nav class="navbar navbar-expand-sm navbar-light bg-light">
                   <a class="navbar-brand" href="#"><img src="/img/RoadRunner.png"></a>
                   <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                       aria-expanded="false" aria-label="Toggle navigation">
                       <span class="navbar-toggler-icon"></span> 
                   </button>
                   <div class="collapse navbar-collapse" id="collapsibleNavId">
                       <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                           <li class="nav-item active">
                               <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                           </li>
                            <li class="nav-item active">
                               <a class="nav-link" href="#">About Us <span class="sr-only">(current)</span></a>
                           </li>
                            <li class="nav-item active">
                               <a class="nav-link" href="#">Subscribe <span class="sr-only">(current)</span></a>
                           </li>
                            <li class="nav-item active">
                               <a class="nav-link" href="#">Login <span class="sr-only">(current)</span></a>
                           </li>
                           
                       </ul>
                      
                   </div>
               </nav>

               
           </div>
    
        </template>




        <script>
export default {
  name: 'NavBar',
  props: {
    msg: String
  }
}
</script>

<style scoped> 
#NavBar {
    background-color: pink;

}
</style>
