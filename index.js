

  function notshow1()
  {
    
      
            $('.week1list').removeClass('dropdown-menu-show').addClass('dropdown-menu');
            $('#Week2Title').css("top","62px");
            $('#Week3Title').css("top","214px");
            $('.week2list').css("top","124px");
            $('.week3list').css("top","276px");
       
   
  }
    
   function show1 ()
   {
    
      
            $('.week1list').addClass('dropdown-menu-show').removeClass('dropdown-menu');
            $('#Week2Title').css("top","287px");
            $('#Week3Title').css("top","439px");
            $('.week2list').css("top","349px");
            $('.week3list').css("top","501px");
           $('#week2list.dropdown-toggle::after').css("transform","rotate(270deg)") 
          
   }
   function notshow2 ()
   {
    
       
             $('.week2list').removeClass('dropdown-menu-show').addClass('dropdown-menu');
        $('#Week3Title').css("top","349px");
        $('.week3list').css("top","411px");
        
        
        
       
    
   }
    function show2()
    {
        
           
                $('.week2list').addClass('dropdown-menu-show').removeClass('dropdown-menu');
                $('#Week3Title').css("top","439px");
                $('.week3list').css("top","501px");
                
       
    }
    
    function week1Toggle()
    {
         $('#Week1Title').click(function()
    {
        if($('.week1list').hasClass('dropdown-menu-show'))
        {
           notshow1();
        }
        else if($('.week1list').hasClass('dropdown-menu'))
        {
            show1();
        }
       
    });
    }
   function week2Toggle()
   {
        $('#Week2Title').click(function()
    {
        if($('.week2list').hasClass('dropdown-menu-show'))
        {
           notshow2();
        }
        else if($('.week2list').hasClass('dropdown-menu'))
        {
            show2();
        }
       
    });
   }
   
    week1Toggle();
    week2Toggle();
       
        
    

 