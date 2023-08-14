jQuery(document).ready(function(){
    $('.navi > li').mouseover(function(){
        $(this).find('.submenu').stop().slideDown(500);
    }).mouseout(function(){
        $(this).find('.submenu').stop().slideUp(500);
    })

    $('.imgSlide a:gt(0)').hide();
    setInterval(()=>{
        $('.imgSlide a:first-child')
        .fadeOut(1000)
        .next('a')
        .fadeIn(1000)
        .end()
        .appendTo('.imgSlide')
    }, 3000)

    $('.notice li:first').click(function(){
        $('#modal').addClass('active')
    })
    $('.btn').click(function(){
        $('#modal').removeClass('active')
    })
})