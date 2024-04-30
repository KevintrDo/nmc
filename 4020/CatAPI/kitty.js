new Vue({
    el: '#app',
    data: {
        catArray: [],
        part1: "https://cdn2.thecatapi.com/images/",
        part2: ".jpg",
    },
    created() {
        this.loadNextImage();
    },
    methods: {
        async loadNextImage() {
            try {
                axios.defaults.headers.common['x-api-key'] = "5707ff43-c0b5-456f-864a-78a03c24ea46"
                let response = await axios.get('https://api.thecatapi.com/v1/breeds');
                this.catArray = response.data;
                console.log("UUP");
                console.log(response.data[1].name);
                console.log(response.data[1].affection_level);
            } catch (err) {
                console.log(err)
            }
        },
        computedBars(level) {
            return level;
        }
    }
})
