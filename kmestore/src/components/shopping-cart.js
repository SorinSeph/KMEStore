export default {
    name: 'shopping-cart',
    data() {
        return {
            cartImagePath: "./shoppingcart.png",
        }
    },
    methods: {
        openCart() {
            console.log("Cart clicked")
        }
    }
}