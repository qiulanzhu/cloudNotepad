window.onload=function(){
  new Vue({
    el: '#editor-container',
    data: {
      editorContent: ''
    },
    ready: function () {
      var self = this;
      var editor = new wangEditor('editor-trigger');
      editor.onchange = function () {
        self.editorContent = editor.$txt.html();
      };
      editor.create();
    }
  });
};