window.onload = function () {
  new Vue({
    el: '#loginBox',             //value为选择器：id, class, tagName
    data: {
      username: '',
      password: ''
    },
    methods: {
      clearPrompt: function () {
        $('.prompts').hide();
      },

      checkParam: function () {
        this.username === '' ? $('.usernameIsEmpty').show() : $('.usernameIsEmpty').hide();
        this.password.length < 6 ? $('.passwordIsShort').show() : $('.passwordIsShort').hide();
        return (this.username != '') && (this.password.length >= 6);
      },

      postLoginInfo: function () {
        var url = 'http://app.hiqiuyi.cn:3001/login';
        this.$http.post(url, {
          username: this.username,
          password: this.password
        }, {
          emulateJSON: true
        }).then(function (res) {
          console.log(res.data);
          if (res.data.msgCode === 0) {
            window.location.href = 'main.html';
          } else if (res.data.msgCode === -2) {
            $('.usernameNotExist').show();
          } else if (res.data.msgCode === -3) {
            $('.passwordIsWrong').show();
          } else {
            $('#loginFail').show();
          }
        }, function () {
          console.error('$http.post ' + url + ' is error!');
        });
      },

      clearValue: function () {
        this.username = '';
        this.password = '';
      },

      login: function () {
        this.clearPrompt();
        this.checkParam() && this.postLoginInfo();
        // this.clearValue();
      },

      gotoReg: function () {
        window.location.href = 'reg.html';
      }
    }
  });

};