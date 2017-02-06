window.onload = function () {
  new Vue({
    el: '#regBox',             //value为选择器：id, class, tagName
    data: {
      bool: true,
      arr: ['one', 'two', 'three'],
      json: {a:'one', b:'two', c:'three'},
      username: '',
      password: '',
      rePassword: ''
    },
    methods:{
      reg: function () {
        alert(this.username + '---' + this.password + '---' + this.rePassword);
      }
    }
  });
};