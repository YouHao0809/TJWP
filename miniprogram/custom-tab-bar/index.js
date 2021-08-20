Component({
  data: {
    selected: null,
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    list: [{
      pagePath: "pages/page1/page1",
      iconPath: "/images/badge.png",
      selectedIconPath: "/images/badge.png",
      text: "TJWP"
    }, {
      pagePath: "/pages/page2/page2",
      iconPath: "/images/badge.png",
      selectedIconPath: "/images/badge.png",
      text: "文化墙"
    }, {
      pagePath: "/pages/page3/page3",
      iconPath: "/images/badge.png",
      selectedIconPath: "/images/badge.png",
      text: "人事服务"
    }, {
      pagePath: "/pages/page4/page4",
      iconPath: "/images/badge.png",
      selectedIconPath: "/images/badge.png",
      text: "我的"
    }]
  },
  attached() {},
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      console.log(data.index)
      wx.switchTab({url})
      this.setData({
        selected: data.index
      })
    }
  }
})