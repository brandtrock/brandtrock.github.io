$(function(){
    // Cache selectors
    var navbar = $("#navbar"),
        navbarHeight = navbar.outerHeight(),
        menuItems = navbar.find("a"),
        scrollItems = menuItems.map(function(){
          var item = $($(this).attr("href"));
          if (item.length) { return item; }
        });

    // Nav selection on click
    navbar.find("li").on("click", function(){
        navbar.find("li.active").removeClass("active");
        $(this).addClass("active");
    });

    // Nav selection on scroll
    $(window).scroll(function(){
       // Get container scroll position
       var fromTop = $(this).scrollTop() + navbarHeight;
       // Get id of current scroll item
       var cur = scrollItems.map(function(){
         if ($(this).offset().top < fromTop)
           return this;
       });
       // Get the id of the current element
       cur = cur[cur.length-1];
       var id = cur && cur.length ? cur[0].id : "";
       // Set/remove active class
       menuItems.parent().removeClass("active").end().filter("[href='#" + id + "']").parent().addClass("active");
    });
});