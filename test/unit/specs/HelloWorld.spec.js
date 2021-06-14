import Vue from 'vue'
import toyota from '@/components/toyota'

describe('toyota.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(toyota)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
      .toEqual('Welcome to Your Vue.js App')
  })
})
