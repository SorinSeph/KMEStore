export default {
    name: 'searchbar',
    data() {
        return {
            searchMsg: "Admin panel",
            bShowModal: false
        }
    },
    methods: {
        showModal() {
            this.bShowModal = true;
        }
    }
}