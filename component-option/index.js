Vue.component('button-counter', {
  // 直接Objectを保持せずクロージャになっている
  data: function() {
    return {
      count: 0
    };
  },
  // テンプレートはルートの要素は単一である必要がある
  template: `
    <div>
      <span>count: </span>
      <button @click="++count">{{ count }}</button>
    </div>
  `
});

const app = new Vue({
  el: '#app'
});
