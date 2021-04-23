if(($('.week1list').hasClass('dropdown-menu-show') )||($('.week2list').hasClass('dropdown-menu-show') ))
{
    $('#Week1Title').click(function()
    {if($('.week1list').hasClass('dropdown-menu-show'))
    {
        $('.week1list').removeClass('dropdown-menu-show').addClass('dropdown-menu');
        $('#Week2Title').css("top","62px");
        $('#Week3Title').css("top","214px");
        $('.week2list').css("top","124px");
        $('.week3list').css("top","276px");
    }else{
        $('.week1list').addClass('dropdown-menu-show').removeClass('dropdown-menu');
        $('#Week2Title').css("top","287px");
        $('#Week3Title').css("top","439px");
        $('.week2list').css("top","349px");
        $('.week3list').css("top","501px");
       $('#week2list.dropdown-toggle::after').css("transform","rotate(270deg)") 
    }
       
    });
    $('#Week2Title').click(function()
    {
        if($('.week2list').hasClass('dropdown-menu-show'))
    {
        $('.week2list').removeClass('dropdown-menu-show').addClass('dropdown-menu');
        $('#Week3Title').css("top","349px");
        $('.week3list').css("top","411px");
    }else{
        $('.week2list').addClass('dropdown-menu-show').removeClass('dropdown-menu');
        $('#Week3Title').css("top","439px");
        $('.week3list').css("top","501px");
    }
    });
}
else
{
    $(window).click(function ()
    {
        if($('.week1list').hasClass('dropdown-menu'))
        {
            $('.week1list').addClass('dropdown-menu-show').removeClass('dropdown-menu');
            $('#Week2Title').css("top","287px");
            $('#Week3Title').css("top","439px");
            $('.week2list').css("top","349px");
            $('.week3list').css("top","501px");
           $('#week2list.dropdown-toggle::after').css("transform","rotate(270deg)") 
        }if($('.week2list').hasClass('dropdown-menu'))
        {
            $('.week2list').addClass('dropdown-menu-show').removeClass('dropdown-menu');
            $('#Week3Title').css("top","439px");
            $('.week3list').css("top","501px");
        }
    })
}


 