import SearchBar from "./search-bar.vue"
import ShoppingCart from "./shopping-cart.vue"

export default {
    name: 'navbar',
    data() {
        return {
            navMsg: "Admin panel",
        }
    },
    components: {
        SearchBar,
        ShoppingCart
    }
}