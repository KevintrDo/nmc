new Vue({
    el: '#app',

    data() {

        return {
            info: null,
            moreData: [],
            imgMaker: [],
            whichDawg: "",
            selector: -1
        }
    },
    mounted: function mounted() {
        this.showme('cocker');
    },

    methods: {
        async    showme(index) {
            await    axios
                .get('https://dog.ceo/api/breed/spaniel/' + index + '/images')
                    .then(response => (this.info = response.data));
            console.log(this.info.message)
            this.moreData = this.info.message;
            this.sliderForward();
        },
        sliderForward() {
            this.selector++;
            this.whichDawg = this.moreData[this.selector];
            if (this.selector > this.moreData.length) {
                this.selector = 0;
            }
        },
        sliderBackward() {
            this.selector--;
            this.whichDawg = this.moreData[this.selector];
            if (this.selector < 0) {
                this.selector = this.moreData.length - 1;
            }
        }
    }
})