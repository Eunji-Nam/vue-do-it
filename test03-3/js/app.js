// 할일 #1 전역 컴포넌트 등록하기 
// sibling-component 를 이름으로 갖는 새로운 컴포넌트를 아래에 등록해보세요.
// options : template, props

Vue.component('child-component', {
  props: ['propsdata'],
  template: '<p>{{ propsdata }}</p>'
});

Vue.component('sibling-component', {
  props: ['siblingdata'],
  template: '<p>{{ siblingdata }}</p>'
})

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue! passed from Parent Component',

    // 할일 #2 데이터 속성 추가하기 
    // data 속성을 1개 더 지정하고 (예: anotherMessage) 임의의 문자열을 값으로 대입해보세요.
    // 새로 지정한 data 속성은 위 sibling-component에 props로 전달합니다.
    anotherMessage: '안녕 뷰! 부모 컴포넌트로 가렴'
  }
});
