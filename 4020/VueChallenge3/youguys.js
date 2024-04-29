Vue.component('students', {
    props: {},
    template: `
        <div>
            <div v-for="eachStudent in yall">
                <h1 >{{eachStudent.stu_name}} {{eachStudent.last_name}}</h1>   
                <p>{{eachStudent.fact}}</p>
            </div>
        </div>  
    `,
    data() {
        return {
            dompart1: 'http://',
            dompart2: "/images/me.jpg",
            yall: [ {
                "stu_name": "Kathryn",
                "last_name": "Wallace",
                "domain": "kathryndwallace.com/5110",
                "section": "5110",
                "fact": " I have never broken a bone.",
                "freecode": "",
                "count": "335"
            }, {
                "stu_name": "Patty",
                "last_name": "Irizarry",
                "domain": "patriciairizarry.com/5110",
                "section": "7110",
                "fact": "    I speak spanish, english and french, and have two dogs and a horse who understand none of it (at least, they ignore me like they don't understand). ",
                "freecode": "",
                "count": "337"
            }, {
                "stu_name": "Brady",
                "last_name": "Eastin",
                "domain": "bradyeastin.com/7110",
                "section": "7110",
                "fact": " I'm a first year EM student, NMI grad assistant, and Producer of TEDxUGA.",
                "freecode": "",
                "count": "338"
            }, {
                "stu_name": "Olivia",
                "last_name": "Carino",
                "domain": "ocarino.com",
                "section": "7110",
                "fact": "I am a first year EM Masters student and work at the Provost. I love playing video games and recently built my first PC! \"Toss a coin to your witcher..\"",
                "freecode": "",
                "count": "340"
            }, {
                "stu_name": "Christy ",
                "last_name": "Onanuga",
                "domain": "christianaonanuga.com/5110",
                "section": "5110",
                "fact": "I weighed 2 pounds 1 ounce when I was born. ",
                "freecode": "",
                "count": "341"
            }, {
                "stu_name": "Alex",
                "last_name": "Miller",
                "domain": "millsplays.com",
                "section": "7110",
                "fact": "Love Sports, Video Games, and Tech. Got to work for ESPN College Gameday for the weekend when they came to Athens for the Notre Dame game.\r\n\r\n...O' Valley of Plenty, O' Valley of Plenty, O'...",
                "freecode": "",
                "count": "342"
            }, {
                "stu_name": "Mia",
                "last_name": "Savelli",
                "domain": "miasavelli.com/5110",
                "section": "5110",
                "fact": "I am sophomore CS major and New Media Certificate participant. I would like to become a video game developer!",
                "freecode": "",
                "count": "346"
            }, {
                "stu_name": "Kendall",
                "last_name": "Lake",
                "domain": "kendallalake.com/NMIX7110",
                "section": "7110",
                "fact": "Curator for TEDxUGA, NMI grad assistant, and second-year EM student. In the rare hours I escape the fourth floor, I love reading, crocheting, and going to yoga at M3.",
                "freecode": "",
                "count": "347"
            }, {
                "stu_name": "Ev",
                "last_name": "Andrews",
                "domain": "evandrews.com/7110",
                "section": "7110",
                "fact": "  I'm a journalist and in my first year of the EMM program. I'm constantly listening to music and I love boardgames. they/them",
                "freecode": "",
                "count": "348"
            }, {
                "stu_name": "Elle ",
                "last_name": "Henderson",
                "domain": "www.ellettehenderson.com/7110",
                "section": "7110",
                "fact": "  I've eaten a live fish ",
                "freecode": "",
                "count": "349"
            }, {
                "stu_name": "Maggie ",
                "last_name": "Weir",
                "domain": "maggieweir.com/5110",
                "section": "5110",
                "fact": "  I have a cat named Chicken! I also love music and am an avid concert-goer. In my free time, I like to read, go to the gym and do puzzles. ",
                "freecode": "",
                "count": "350"
            }, {
                "stu_name": "Kira",
                "last_name": "Lewitt",
                "domain": "kiralewitt.com/5110",
                "section": "5110",
                "fact": " I am in the Spiderman Homecoming movie!",
                "freecode": "",
                "count": "351"
            }, {
                "stu_name": "Brian",
                "last_name": "Hall",
                "domain": "brianhallnmix.com",
                "section": "5110",
                "fact": "A Cognitive Science (focus in Artificial Intelligence + Psychology) and Philosophy Major. I have always been interested in the creative uses of technology to spread ideas, and hope to do the same some day.",
                "freecode": "",
                "count": "353"
            }, {
                "stu_name": "Alison",
                "last_name": "Jibilian",
                "domain": "alisonjibilian.com/7110",
                "section": "7110",
                "fact": "I walk everywhere",
                "freecode": "",
                "count": "354"
            }]
        }
    },
    methods: {}
})
var studentdata = new Vue({
    el: '#students'
});