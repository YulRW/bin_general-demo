// pages/index2/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataList:{
      "text1": "",
      "text2": "",
      "text3": "",
      "text4": "",
    }
  },
  go(e) {
    this.data.dataList.text1  = e.detail.value.text1;
    this.data.dataList.text2  = e.detail.value.text2;
    this.data.dataList.text3  = e.detail.value.text3;
    this.data.dataList.text4  = e.detail.value.text4;
    
    //设置数据缓存
    wx.setStorageSync("msg", this.data.dataList);
    
    //跳转至夜出页面
    wx.navigateTo({
      url: "./../night/night",
    });
  },

})