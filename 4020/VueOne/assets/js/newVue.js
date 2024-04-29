var header = new Vue({
    el: '#header',
        data:{
            yourName: 'Kevin Do',
            description: "I can't do a backflip",
            linkOne: "Instruction",
            link2: "My Portfolio",
            link3: "About me, OK??",
            link4: "Contact",
            link4: "my list",            
            avatar: "images/cat-war.png"
        }
})

var list = new Vue ({
    el: '#list',
        data:{
            favorite: ['Interstellar', 'Inglorious Bastards', 'Dune 2', 
            'Star Wars series', 'Kill Bill'],
            title: "Favorites Movies"
        }
})

var portfolio = new Vue ({
    el: '#portfolio',
    data: {
        portfolioTitle: "Spain without the S",
        portfolioText: "Supa Prettyy",
        image1: "images/one.jpg",
        imgText1: "City with Mountains",
        image2: "images/two.jpg",
        imgText2: "Elevated Structure",
        image3: "images/three.jpg",
        imgText3: "Overcast City",
        image4: "images/four.jpg",
        imgText4: "Beneath the Hill",
        image5: "images/five.jpg",
        imgText5: "Urban Park",
        image6: "images/six.jpg",
        imgText6: "Bird's Eye View"
    }
})

var conditional = new Vue({
    el: "#conditional",
    data: {
        sectionName: "Questions",
        teacherName: "",
        country: ""
    }
});

var functional = new Vue({
    el: '#function',
    data: {
        bgColor: '',
        colors: ['red', 'green', 'blue']
    },
    methods: {
        changeColor(color) {
            this.bgColor = color;
        }
    }
})

var contact = new Vue({
    el: '#contact',
    data: {
        contactTitle: 'Contact Me!',
        contactText: 'I am no criminal!',
    }
});