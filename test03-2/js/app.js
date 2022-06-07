Vue.component('todo-footer', {
    template: '<p>This is another global child component</p>'
});

var cmp = {
    template: '<p>This is another local child component</p>'
}

var app = new Vue({
    el: '#app',
    date: {
        message: 'This is a parent component'
    },
    components: {
        'todo-list': cmp
    }
});

