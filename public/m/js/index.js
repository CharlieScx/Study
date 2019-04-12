window.onload = function() {
    //获得slider插件对象
    var gallery = mui('.mui-slider');
    gallery.slider({
        interval: 5000 //自动轮播周期，若为0则不自动播放，默认为0；
    });

    // 搜索栏的背景透明
    window.onscroll = function() {
        var bannerHeight = document.querySelector('.mui-slider').offsetHeight;
        var barNav = document.querySelector('header');
        var opacity = 0;
        // 获取页面滚动出去的距离，有兼容性问题
        var offsetTop = document.body.scrollTop || document.documentElement.scrollTop;
        if (offsetTop > bannerHeight) {
            opacity = bannerHeight / offsetTop;
        } else {
            opacity = 1;
        }
        barNav.style.backgroundColor = "rgba(0,102,153," + opacity + ")"
    }

}