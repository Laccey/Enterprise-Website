var rent = {
    showImg:function (index) {
        var $rollobj = $(".banner");
        var $rolllist = $rollobj.find("div a");
        var newhref = $rolllist.eq(index).attr("href");
        $(".banner_img").attr("href",newhref)
            .find("div").eq(index).stop(true,true).fadeIn().siblings().fadeOut();
        $rolllist.removeClass("active").eq(index).addClass("active");
    }
};
$(function () {
    // navBar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('nav').addClass('topBar2');
            $('#gotop').css('display','block');
        }
        else {
            $('nav').removeClass('topBar2');
            $('#gotop').css('display','none');
        }
    });
    //Scroll Top
    $('#gotop').click(function() {
        $('body,html').animate({scrollTop:0},'fast');
        return false;
    });
    //sidebar
    $('#consult_close').click(function () {
       $('.consult_open').animate({right:'-180px'},200);
       $('#consult').animate({right:'0'},200);
    });
    $('#consult').click(function () {
        $('.consult_open').animate({right:'0'},200);
        $('#consult').animate({right:'-40px'},200);
    });
    //banner图轮播
    var $imgrolls = $(".banner>div.banner_dot a");
    var len  = $imgrolls.length;
    var index = 0;
    var adTimer = null;
    $imgrolls.mouseover(function() {
        index = $imgrolls.index(this);
        rent.showImg(index);
    }).eq(0).mouseover();
    //滑入 停止动画，滑出开始动画.
    $('.banner').hover(function(){
        if(adTimer){
            clearInterval(adTimer);
        }
    },function(){
        adTimer = setInterval(function(){
            rent.showImg(index);
            index++;
            if(index==len){index=0;}
        } , 3000);
    }).trigger("mouseleave");
    //滚动动画
    if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))){
        new WOW().init();
    };

    //瀑布流
        var dataArr = [
            {picUrl:'../../img/products/p2.jpg',width:500,height:298,title:'一居室',desc:'面积：110平米 价格：17000/月'},
            {picUrl:'../../img/products/p1.jpg',width:500,height:450,title:'两居室',desc:'面积：110平米 价格：17000/月'},
            {picUrl:'../../img/products/p8.jpg',width:635,height:850,title:'一居室',desc:'面积：110平米 价格：17000/月'},
            {picUrl:'../../img/products/p3.jpg',width:500,height:298,title:'一居室',desc:'面积：110平米 价格：17000/月'},
            {picUrl:'../../img/products/p1.jpg',width:500,height:450,title:'一居室',desc:'面积：110平米 价格：17000/月'},
            {picUrl:'../../img/products/p7.jpg',width:500,height:298,title:'一居室',desc:'面积：110平米 价格：17000/月'},
            {picUrl:'../../img/products/p1.jpg',width:500,height:450,title:'一居室',desc:'面积：110平米 价格：17000/月'},
            {picUrl:'../../img/products/p4.jpg',width:500,height:298,title:'一居室',desc:'面积：110平米 价格：17000/月'},
            {picUrl:'../../img/products/p6.jpg',width:500,height:298,title:'一居室',desc:'面积：110平米 价格：17000/月'},
            {picUrl:'../../img/products/p8.jpg',width:635,height:850,title:'一居室',desc:'面积：110平米 价格：17000/月'},
            {picUrl:'../../img/products/p5.jpg',width:500,height:298,title:'一居室',desc:'面积：110平米 价格：17000/月'},
            {picUrl:'../../img/products/p1.jpg',width:500,height:450,title:'一居室',desc:'面积：110平米 价格：17000/月'},
            {picUrl:'../../img/products/p9.jpg',width:460,height:624,title:'一居室',desc:'面积：110平米 价格：17000/月'},
            {picUrl:'../../img/products/p4.jpg',width:500,height:298,title:'一居室',desc:'面积：110平米 价格：17000/月'},
            {picUrl:'../../img/products/p2.jpg',width:500,height:298,title:'一居室',desc:'面积：110平米 价格：17000/月'},
            {picUrl:'../../img/products/p3.jpg',width:500,height:298,title:'一居室',desc:'面积：110平米 价格：17000/月'},
            {picUrl:'../../img/products/p1.jpg',width:500,height:450,title:'一居室',desc:'面积：110平米 价格：17000/月'},
            {picUrl:'../../img/products/p4.jpg',width:500,height:298,title:'一居室',desc:'面积：110平米 价格：17000/月'},
            {picUrl:'../../img/products/p6.jpg',width:500,height:298,title:'一居室',desc:'面积：110平米 价格：17000/月'},
            {picUrl:'../../img/products/p1.jpg',width:500,height:450,title:'一居室',desc:'面积：110平米 价格：17000/月'},
            {picUrl:'../../img/products/p5.jpg',width:500,height:298,title:'一居室',desc:'面积：110平米 价格：17000/月'},
            {picUrl:'../../img/products/p2.jpg',width:500,height:298,title:'一居室',desc:'面积：110平米 价格：17000/月'},
            {picUrl:'../../img/products/p1.jpg',width:500,height:450,title:'两居室',desc:'面积：110平米 价格：17000/月'},
            {picUrl:'../../img/products/p8.jpg',width:635,height:850,title:'一居室',desc:'面积：110平米 价格：17000/月'},
            {picUrl:'../../img/products/p3.jpg',width:500,height:298,title:'一居室',desc:'面积：110平米 价格：17000/月'},
            {picUrl:'../../img/products/p1.jpg',width:500,height:450,title:'一居室',desc:'面积：110平米 价格：17000/月'},
            {picUrl:'../../img/products/p7.jpg',width:500,height:298,title:'一居室',desc:'面积：110平米 价格：17000/月'},
            {picUrl:'../../img/products/p9.jpg',width:460,height:624,title:'一居室',desc:'面积：110平米 价格：17000/月'},
            {picUrl:'../../img/products/p4.jpg',width:500,height:298,title:'一居室',desc:'面积：110平米 价格：17000/月'},
            {picUrl:'../../img/products/p2.jpg',width:500,height:298,title:'一居室',desc:'面积：110平米 价格：17000/月'},
            {picUrl:'../../img/products/p3.jpg',width:500,height:298,title:'一居室',desc:'面积：110平米 价格：17000/月'},
            {picUrl:'../../img/products/p7.jpg',width:500,height:298,title:'一居室',desc:'面积：110平米 价格：17000/月'},
        ];

        $.each(dataArr, function(index, item) {
            $(".masonry").append('<div class="masonry_info masonry_item wow fadeInUp">' +
                '<a href="post/index.html">'+
                '<div class="masonry_img" style="height:0;padding-bottom:'+cRate(item) * 100 + "%"+'" data-src="'+item.picUrl+'"><div class="masonry_img_shade"></div></div>' +
                '<div class="masonry_text"><h4>'+ item.title + '</h4><p>'+ item.desc +'</p></div><div class="masonry_arrow"><i></i></div></a>' +
                '</div>');
        });

        var boxArr = $('.masonry_info'),
            num = Math.floor(document.body.clientWidth / boxArr.eq(0).outerWidth(true)),
            columnHeightArr = [];
            columnHeightArr.length = num;

        arrangement();

        $('body').css('minHeight',Math.max.apply(null, columnHeightArr));

        lazyLoad();

        function arrangement() {
            boxArr.each(function(index, item) {
                if (index < num) {
                    columnHeightArr[index] = $(item).position().top + $(item).outerHeight(true);
                } else {
                    var minHeight = Math.min.apply(null, columnHeightArr),
                        minHeightIndex = $.inArray(minHeight, columnHeightArr);
                    $(item).css({
                        position: 'absolute',
                        top: minHeight,
                        left: boxArr.eq(minHeightIndex).position().left
                    });
                    columnHeightArr[minHeightIndex] += $(item).outerHeight(true);
                }
            });
        }

        function lazyLoad() {
            var boxArr = $('.masonry_item');
            boxArr.each(function(index, item) {
                var viewTop = $(item).offset().top - $(window).scrollTop(),
                    imgObj = $(item).find('.masonry_img');
                if ((viewTop < $(window).height()) && ($(item).offset().top + $(item).outerHeight(true) > $(window).scrollTop())) {
//                console.log($(item).attr('data-src'));
                    imgObj.css('backgroundImage','url('+imgObj.attr("data-src")+')').removeClass('data-src');
                    $(item).removeClass('masonry_item');
                }
            })
        }

        function cRate(obj) {
            return obj.height / obj.width;
        }

        function scrollLoad() {
            var viewHeight = $(window).scrollTop() + $(window).height(),
                minHeight = Math.min.apply(null, columnHeightArr);
            if (viewHeight >= minHeight) {
                //loadMore...
            }
        }

        $(window).scroll(function() {
            lazyLoad();
            scrollLoad();
        });
});