// pages/page3/page3.js


Component({
  pageLifetimes: {
    show() {
      if (typeof this.getTabBar === 'function' &&
        this.getTabBar()) {
        this.getTabBar().setData({
          selected: 2
        })
      }
    },
  },
  data:{
    isProper:false,
  },
  methods:{
    changeStatus:function(){
      console.log(this.data.isProper);
      var laterData = !this.data.isProper;
      this.setData({
        isProper: laterData
      })
    },
    query:function(){
      wx.navigateTo({
        url: '../page31query/page31query',
      })
    },
    activity:function(){
      wx.navigateTo({
        url: '../page32activity/page32activity',
      })
    },
    treehole:function(){
      wx.navigateTo({
        url: '../page33treehole/page33treehole',
      })
    },
    finance:function(){
      wx.navigateTo({
        url: '../myPage/myPage',
      })
    },
   appeal:function(){
      wx.navigateTo({
        url: '../activity/activity',
      })
    },
   freshman:function(){
      wx.navigateTo({
        url: '../myPage/myPage',
      })
    },
    leave:function(){
      wx.navigateTo({
        url: '../myPage/myPage',
      })
    },
    test:function(){
      wx.navigateTo({
        url: '../myPage/myPage',
      })
    }
  }
})
