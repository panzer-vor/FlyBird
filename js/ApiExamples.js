export class ApiExamples {
  getUserInfo(){
    const params = {
      success(){
        
      },
    }
    wx.getUserInfo(params)
  }
  login(){
    wx.login({})
  }
}