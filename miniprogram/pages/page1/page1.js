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
      {
        image:"../../images/badge.png",
        title:"标题一",
        subtitle:"这是副标题或者简介",
        url:""
      }, {
        image:"../../images/badge.png",
        title:"标题二",
        subtitle:"这是副标题或者简介如果长度超过一排会怎么样呢？",
        url:""
      }, {
        image:"../../images/badge.png",
        title:"标题三",
        subtitle:"这是副标题或者简介",
        url:""
      },
    ] 
  },
  methods: {
    clickMore:function(e){
      
    },
  }
})
