<template>
  <div class="confirmation">

    <div class="product">
      <div class="product-image" width="50%">
        <img :src="image">
      </div>
    
      <div class="product-info">
        <h1>{{ product }}</h1>
        <p v-if="inStock">In Stock</p>
        <p v-else>Out of Stock</p>
        <p>Availability: {{ shipping }}</p>

    <ul>
      <li v-for="detail in details">{{ detail }}</li>
    </ul>

        <product-details :details="details"></product-details>

        <button
          v-on:click="RentMe"
          :disabled="!inStock"
          :class="{ disabledButton: !inStock }" 

        >Reserve Me!</button>

      </div>
    </div>
    <div class="span8" id="map">
      <iframe
        width="50%"
        height="350"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d12568.261848416902!2d-84.49599825000001!3d38.04556099999999!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1553192935061"
      ></iframe>
  </div>

  <div class="container-fluid">
    <div class="row">
      <div class="leftcolumn">
        <div class="col">
          <div>
            <h3> Reviews </h3>
            <br>
            <p v-if="!reviews.length">There are no reviews yet.</p>
              <ul v-else>
                  <li v-for="(review, index) in reviews" :key="index">
                    <p>Name: {{ review.name }}</p>
                    <p>Rating: {{ review.rating }}</p>
                    <p>Review: {{ review.review }}</p>
                  </li>
              </ul>
          </div>
          </div>
      </div>
      <div class="rightcolumn">
        <div class="col"> <Review @review-submitted="addReview"></Review></div>
      </div>
    </div>
  </div>

  </div>
</template> 

    <script>
import Review from "./Review";

export default {
  name: "details",
  components: {
    Review
  },
  data() {
    return {
      product: "Details",
      brand: "Vue Mastery",
      selectedVariant: 0,
      details: ["Make:", "model:", "Color:", "Rented:"],
      variants: [
        {
          variantId: 2234,
          variantImage: 'img/2015BentleyContinentalGTC.png',
          variantQuantity: 3
        }
      ],
      cart: 0, 
      reviews: []
    };
  },
  methods: {
    RentMe: function() {
      this.cart += 1;
    },
    updateProduct: function(index) {
      this.selectedVariant = index;
    },
    addReview(productReview) {
      console.log(productReview);
      this.reviews.push(productReview)
    },
  },
  computed: {
    title() {
      return this.brand + " " + this.product;
    },
    image() {
      return this.variants[this.selectedVariant].variantImage;
    },
    inStock() {
      return this.variants[this.selectedVariant].variantQuantity;
    },
    shipping() {
      if (this.premium) {
        return "Available";
      }
    
    }
  }
};
</script>

<style scoped>
body {
  font-family: tahoma;
  color: #282828;
  margin: 0px;
}

.product {
  display: flex;
}

img {
  border: 1px solid #d8d8d8;
  width: 50%;
  margin: 40px;
  box-shadow: 0px 0.5px 1px #d8d8d8;
}

.product-image {
  flex-basis: 700px;
}

.product-info {
  margin-top: 10px;
  flex-basis: 500px;
}

.color-box {
  width: 40px;
  height: 40px;
  margin-top: 5px;
}

.cart {
  margin-right: 25px;
  float: right;
  border: 1px solid #d8d8d8;
  padding: 5px 20px;
}

button {

  margin-top: 30px;
  border: none;
  background-color: #1e95ea;
  color: white;
  height: 40px;
  width: 100px;
  font-size: 14px;
}

.disabledButton {
  background-color: #d8d8d8;
}

.review-form {
  width: 30%;
  padding: 20px;
  border: 1px solid #d8d8d8;
}

input {
  width: 100%;
  height: 25px;
  margin-bottom: 20px;
}

textarea {
  width: 100%;
  height: 60px;
}

li {
  text-align: left;
  list-style: none;
}

.leftcolumn {   
  float: left;
  width: 25%;
}

.rightcolumn {
  float: left;
  width: 75%;
  padding-left: 20px;
}
</style>


