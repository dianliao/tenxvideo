const app = getApp()
Page({
  data: {
    userInfo: {},
    hasUserInfo: false
  },
  
  getUserInfo: function () {
    wx.getUserProfile({
      desc: '获取头像昵称',
      success: res => {
        console.log(res)
        wx.setStorage({ key: 'userInfo', data: res.userInfo })
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    }
  },
  
})