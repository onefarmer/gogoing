/**
 * Created by heck on 2017/6/28.
 */
$(function(){
    if($(".window-box").length>0){
        var window_box=new Swiper(".window-box",{
            wrapperClass: 'window-cut',
            slideClass : 'window-bin',
            direction: 'vertical',
            lazyLoading : true,
            lazyLoadingOnTransitionStart : true,
            speed: 700,
            bulletClass: 'cut',
            bulletActiveClass: 'active',
            paginationClickable: true,
            pagination: '.window-head ul',
            hashnav: true,
            roundLengths : true,
            slidesPerView: 'auto',
            resistanceRatio: 0,
            keyboardControl: true,
            mousewheelControl: true,
            paginationBulletRender:function(swiper,index,className){
                var title=$('.window-bin').eq(index).find('.window-back').attr('data-title')||'';
                if(title!='') return '<li class="'+className+'" data-index="'+(index+1)+'">'+title+'</li>';
            },
            onSlideChangeStart:function(swiper){
                if(swiper.activeIndex==0){
                    $('.window-head').removeClass('active');
                }else{
                    $('.window-head').addClass('active');
                }
                if(swiper.activeIndex==1){
                    $(".item5").addClass("bounceInRight").siblings().addClass("bounceInLeft");
                }else {
                    $(".item5").removeClass("bounceInRight").siblings().removeClass("bounceInLeft");
                }
            }
        })
    }

    if($('.banner-box').length>0){
        var banner_slide=new Swiper('.banner-box',{
            wrapperClass: 'banner-cut',
            slideClass : 'banner-bin',
            speed: 500,
            loop: true,
            autoplay: 4500,
            autoplayDisableOnInteraction: true,
            grabCursor: true,
            keyboardControl: true,
            slidesPerView: 1,
            pagination: '.banner-pager',
            paginationClickable :true

        })
        //$('.banner-ctrl .ctrl-left').click(function(){
        //    banner_slide.slidePrev();
        //});
        //$('.banner-ctrl .ctrl-right').click(function(){
        //    banner_slide.slideNext();
        //});
    }
})