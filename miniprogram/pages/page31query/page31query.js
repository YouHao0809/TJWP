// pages/page31query/page31query.js
Page({

  /**
   * 页面的初始数据
   */ 
  data: {
   upper1: 1,
   upper2: 1,
   index1:0,
   index2:0,
   year: ['2017-2018', '2018-2019', '2019-2020', '2020-2021','2021-2022'],
   semaster:['一','二']
  },
 switchUpper1:function(e){
    console.log(this.data.upper1);
    if(e.target.dataset.name != this.data.upper1){
      this.setData({
        upper1: e.target.dataset.name
      })

    }
 },
 switchUpper2:function(e){
  console.log(this.data.upper2);
  if(e.target.dataset.name != this.data.upper2){
    this.setData({
      upper2: e.target.dataset.name
    })

  }
},
bindPickerChange: function (e) {
  console.log('picker发送选择改变，携带值为', e.detail.value)
  if(e.target.dataset.name=="picker1"){
    this.setData({
      index1: e.detail.value
    })
  }
  else{
    this.setData({
      index2: e.detail.value
    })
  }
  
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