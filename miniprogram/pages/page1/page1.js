// pages/page1/page1.js

Component({
  pageLifetimes: {
    show() {
      if (typeof this.getTabBar === 'function' &&
        this.getTabBar()) {
        this.getTabBar().setData({
          selected: 0
        })
      }
    }
  },
  data: {
    imageURLs:[
        '../../images/badge.png',
        '../../images/badge.png',
        '../../images/badge.png',
      ],
     informs:[
       '','','',
     ] ,
     passages:[
      '','','',
    ] 
  },
  methods: {
    clickMore:function(e){
      
    },
  }
})
