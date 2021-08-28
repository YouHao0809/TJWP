// pages/page32activity/page32activity.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activities: [
      {
        isJoin: 1,
        name: "活动1",
        detail: "活动1的概述",
        creater: "大琪",
        restTime:"15小时",
        iconType:"success"
      },
      {
        isJoin: 0,
        name: "活动2",
        detail: "活动2的概述",
        creater: "大琪",
        restTime:"15小时",
        iconType:"cancel"
      },
      {
        isJoin: 2,
        name: "活动3",
        detail: "活动3的概述",
        creater: "大琪",
        restTime:"15小时",
        iconType:"info_circle"
      },
      

    ]
  },
  addActivity:function(){
    wx.navigateTo({
      url: '../page321activityadd/page321activityadd',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})