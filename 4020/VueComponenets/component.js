Vue.component('toast', {
    props: {
        toastopinion: String,
        color: String
    },
    template: /*html*/
    `
    <div>
        <button v-on:click="checkToast">check the toast</button>
        <h3>The toast is {{toastState}}</h3>
        <h3 :style="{ backgroundColor: color }">{{toastopinion}}</h3>
    </div>
    `,
    data() { 
        return { toastState: "burnt" }
    },
    methods: {
        checkToast() {
            this.toastState = "perfect"
        }
    }
})


var co = new Vue({
    el: '#co',
    
})