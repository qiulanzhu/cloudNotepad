window.onload = function () {
  new Vue({
    el: '#loginBox',             //value为选择器：id, class, tagName
    data: {
      bool: true,
      arr: ['one', 'two', 'three'],
      json: {a:'one', b:'two', c:'three'},
      username: '',
      password: ''
    },
    methods:{
      login: function () {
        alert(this.username + '---' + this.password);
      }
    }
  });
};