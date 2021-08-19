// pages/myPage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    account:"001",
    password:"1750000",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  accountInput:function(e){
    this.setData({
      account: e.detail.value
    })
  },
  passwordInput:function(e){
    this.setData({
      password: e.detail.value
    })
  },
  login: function(){
    wx.cloud.callFunction({
      name: 'mylogin',
      data: {
        account:this.data.account,
        password:this.data.password
      },
      success: res => {
        console.log('[云函数] [login] success ', res.result)
        /*wx.navigateBack({
          delta: 0,
        })*/
      },
      fail: err => {
        console.error('[云函数] [login] 调用失败', err)
       
      }
    })
    console.log("login!account:"+this.data.account+" pass:"+this.data.password);
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

  },

})