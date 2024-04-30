Vue.component('bobcat', {
    props: {
        catchoosing: String
    },
    template:
        `<div class="cards">

        <h2>{{ thename }}</h2>
        <h3>Adaptability Score: {{ adapt }}</h3>
        <h3 id="description">Description: <p>{{ description }}</p></h3>
        <h3 id="origin" > Origin: <p>{{ origin }} </p></h3>
        <h3 id="temperament">Temperament: <p>{{ temperament }} </p></h3>
        <div id="labelingState">
            <div>
            <label class="labeling" for="child">Child Friendly:</label>
            <div class="stars" id="child">{{ starRating(child_friendly) }}</div>
            </div>
            <div>
            <label class="labeling" for="dog">Dog Friendly:</label>
            <div class="stars" id="dog">{{ starRating(dog_friendly) }}</div>
            </div>
            <div>
            <label class="labeling" for="energy">Energy Level:</label>
            <div class="stars" id="energy">{{ starRating(energy_level) }}</div>
            </div>
            <div>
            <label class="labeling" for="shedding">Shedding Level:</label>
            <div class="stars" id="shedding">{{ starRating(shedding_level) }}</div>
            </div>
            <div>
            <label class="labeling" for="social">Social Needs Level:</label>
            <div class="stars" id="social">{{ starRating(social_needs) }}</div>
            </div>
            <div>
            <label class="labeling" for="stranger">Stranger Friendly Level:</label>
            <div class="stars" id="stranger">{{ starRating(stranger_friendly) }}</div>
            </div>
        </div>
        <button v-on:click="slideshow()">slideshow</button><br><br>
    
        <div><img :src="image.url"><br></div></div>`
    ,
    data() {
        return {
            image: "",
            thename: "",
            allofit: [],
            i: 0,
            adapt: 0,
            description: "",
            origin: "",
            temperament: "",
            margin: "30px",
            marginbottom: "60px",
            child_friendly: 0,
            dog_friendly: 0,
            energy_level: 0,
            shedding_level: 0,
            social_needs: 0,
            stranger_friendly: 0
        }
    },
    created() {
        this.loadNextImage(this.catchoosing);
    },
    methods: {
        async loadNextImage(breedID) {
            try {
                axios.defaults.headers.common['x-api-key'] = "5707ff43-c0b5-456f-864a-78a03c24ea46"
                let response = await axios.get('https://api.thecatapi.com/v1/images/search?breed_ids=' + breedID, {
                    params: {
                        limit: 10,
                        size: "full"
                    }
                })
                //grabs the id in order to target new url for more data

                let theid = response.data[0].id;
//response2 is a new variable that uses the id to get data from a URL with additional information
                let response2 = await axios.get('https://api.thecatapi.com/v1/images/' + theid, {})
                this.adapt = response2.data.breeds[0].adaptability;
                this.thename = response2.data.breeds[0].name;
                this.allofit = response.data;
                this.description = response2.data.breeds[0].description;
                this.origin = response2.data.breeds[0].origin;
                this.temperament = response2.data.breeds[0].temperament
                this.child_friendly = response2.data.breeds[0].child_friendly;
                this.dog_friendly = response2.data.breeds[0].dog_friendly;
                this.energy_level = response2.data.breeds[0].energy_level;
                this.shedding_level = response2.data.breeds[0].shedding_level;
                this.social_needs = response2.data.breeds[0].social_needs;
                this.stranger_friendly = response2.data.breeds[0].stranger_friendly;
            } catch (err) {
                console.log(err)
            }
            this.slideshow()
        },
        async slideshow() {

            if (this.i >= this.allofit.length) {
                this.i = 0;
            }
            this.image = this.allofit[this.i];
            this.i++;
        },
        starRating(level) {
            let stars = '';
            for (let i = 0; i < level; i++) {
                stars += '★'; // Add a star for each level
            }
            return stars;
        }
    }
});

var one = new Vue({
    el: '#bobcat',
});
