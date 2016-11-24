Vue.transition('fade', {
    enterClass: 'bounce',
    leaveClass: 'fadeOut'
}); 
new Vue({
    el: 'body',
    data: {
        show: true
    }
});


