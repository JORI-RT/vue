// import Vue from 'vue'
//import HelloWorld from '@/components/HelloWorld'
import KbnBoardView from '@/components/templates/KbnBoardView'
import { mount } from '@vue/test-utils'

describe('HelloWorld.vue', () => {
  // it('should render correct contents', () => {
  //   const Constructor = Vue.extend(HelloWorld)
  //   const vm = new Constructor().$mount()
  //   expect(vm.$el.querySelector('.hello h1').textContent)
  //     .toEqual('Welcome to Your Vue.js App')
  // })
//  it('use test-utils', () => {
//    expect(mount(HelloWorld).find('.hello h1').text())
//      .toEqual('Welcome to Your Vue.js App')
//  })

  it('use test-utils', () => {
    expect(mount(KbnBoardView).find('p').text())
      .toEqual('Boad Page')
  })
})
