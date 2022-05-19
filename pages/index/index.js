
const app = getApp()

Page({
    data:{
        id:0
        },
           aaa:function(e){
             
              var id = e.currentTarget.dataset.id;
              console.log(id)
            wx.navigateTo({
                url: '/pages/jianjie/jianjie?id='+id,
              })
           },
          
 
})
