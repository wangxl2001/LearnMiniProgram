// pages/index/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        words : "我是一个机器人",
        img : "https://c-ssl.duitang.com/uploads/item/202005/02/20200502100838_bfefj.thumb.1000_0.jpg",
        age : 20,
        students : [
            {name : 'sunwukong', age : 18},
            {name : 'zhubajie', age : 25},
            {name : 'shaheshang', age : 10}
        ],
        counter : 10
    },

    handleBtnClick : function () {
        this.setData({
            counter : this.data.counter + 1
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