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
    profile:"../../images/badge.png",
    gender:"../../images/badge.png",
    name:"大琪",
    campus:"四平路校区",
    chara:"正式队员",
    time:"2018年09月",
    num:"066",
    pos:"守门员",
    isOfficial:false,
  },
  methods:{
    
  }
})
