export default {
    name: 'products-container',
    data() {
        return {
            products: []
        }
    },
    methods: {
        displayProducts() {
            this.$axios.get('http://localhost:3000/products')
                .then(response => {
                    this.products = response.data.res.map(product => {
                        //console.log({product});
                        return product;
                    })
                })
                .catch(function (error) {
                    console.log(error);
                })
        }
    },
    mounted() {
        this.displayProducts();
    }
}