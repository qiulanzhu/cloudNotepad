window.onload = function () {
  new Vue({
    el: '#regBox',             //value为选择器：id, class, tagName
    data: {
      username: '',
      password: '',
      rePassword: ''
    },
    methods: {
      clearPrompt: function () {
        $('.prompts').hide();
      },

      checkParam: function () {
        this.username === '' ? $('.usernameIsEmpty').show() : $('.usernameIsEmpty').hide();
        this.password.length < 6 ? $('.passwordIsShort').show() : $('.passwordIsShort').hide();
        this.password != this.rePassword ? $('.passwordNotEqual').show() : $('.passwordNotEqual').hide();

        return (this.username != '') && (this.password.length >= 6) && (this.password == this.rePassword);
      },

      postRegInfo: function () {
        var url = 'http://app.hiqiuyi.cn:3001/reg';
        this.$http.post(url, {
          username: this.username,
          password: this.password
        }, {
          emulateJSON: true
        }).then(function (res) {
          console.log(res.data);
          if (res.data.msgCode === 0) {
            $('#regSuccess').show();
          } else if (res.data.msgCode === -2) {
            $('.usernameExist').show();
          } else {
            $('#regFail').show();
          }
        }, function () {
          console.error('$http.post ' + url + ' is error!');
        });
      },

      clearValue: function () {
        this.username = '';
        this.password = '';
        this.rePassword = '';
      },

      reg: function () {
        this.clearPrompt();
        this.checkParam() && this.postRegInfo();
        // this.clearValue();
      }
    }
  });

};