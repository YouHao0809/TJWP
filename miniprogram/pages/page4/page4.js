// pages/page4/page4.js


Component({
  pageLifetimes: {
    show() {
      if (typeof this.getTabBar === 'function' &&
        this.getTabBar()) {
        this.getTabBar().setData({
          selected: 3
        })
      }
    }
  },
  data:{
    profile:"../../images/badge.png"
  },
  methods:{
    
  }
})
