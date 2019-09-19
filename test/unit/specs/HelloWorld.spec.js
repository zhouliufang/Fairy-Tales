import Vue from 'vue'
import MainHello from '@/components/MainHello'

describe('MainHello.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(HelloWorld)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
      
  })
})
