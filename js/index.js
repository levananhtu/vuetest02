"use strict";
let app = new Vue({
    el: "#app",
    data: {
        message: "Hello leviathan!"
    }
});
/**/
let app2 = new Vue({
    el: "#app-2",
    data: {
        message: "You loaded this page on " + (new Date()).toString()
    }
});
/**/
let whatever = new Vue({
    el: ".whatever",
    data: {
        message01: "This is for .whatever class",
        message02: "This is message 02"
    }
});
/**/
let app3 = new Vue({
    el: "#app-3",
    data: {
        seen: true
    }
});
/**/
let app4 = new Vue({
    el: "#app-4",
    data: {
        processes: [
            {name: "Learn Java", didStart: true},
            {name: "Learn Javascript", didStart: true},
            {name: "Learn Laravel", didStart: false},
            {name: "Learn Vuejs", didStart: true},
            {name: "Learn Spring Boot", didStart: true},
            {name: "Learn Golang", didStart: false},
            {name: "Learn Spring Security", didStart: true},
        ]
    }
});
/**/
app4.processes.push({name: "C++", didStart: false});
/**/
let app5 = new Vue({
    el: '#app-5',
    data: {
        message: 'Hello Vue.js!'
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
});
/**/
Vue.component("todo-item", {
    template: "<li>This is a component</li>"
});
let app6 = new Vue({
    el: "#app-6"
});