// pages/night/night.js

// var util = require("../../utils/util");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "code": "7305",
    "name": "",
    "day": "",
    "hour": "",
    "min": "",
    "addr": "西01-04",
    "type": "晚归",
    "number": "",
    "academy": "计算机学院"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (option) {

    //调用数据缓存
    var msg = wx.getStorageSync("msg");

    //获取当前时间
    let time = new Date();
    let day = time.getDate();
    let hour = time.getHours();
    let min = time.getMinutes();

    //设置数据,生成图片页面
    this.setData({
      code: msg.text1,
      name: msg.text2,
      number: msg.text3,
      day:day,
      hour:hour,
      min:min
    })
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