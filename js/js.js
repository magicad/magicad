$(document).ready(function(){

  if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    $(".view.hover").click(function(){
      var id = $(this).find("a.info").attr("data-target");
      $(id).modal("show");
    });
  }

  $(".modal-title").click(function(){
    $(".modal.fade.in").modal("hide");
  })

  ///
  function addFadeClass(item){
    item.addClass("animate-show");
  }

  $(".view.hover").each(function(){
    var items = $(".view.hover");
    var time = 100;
    items.each(function() {
      var a = $(this);
      setTimeout( function(){ addFadeClass(a); }, time)
      time += 100;
    });
  });
  ///

  // var items = $(".view.hover");
  // items.each(function() {
  //   $(this).addClass("animate-show");
  // });

  $(".navbar-nav a").click(function(e){
    e.preventDefault();
    var klass = $(this).attr("data-type");
    $(".view.hover").each(function(){
      if($(this).hasClass(klass) || klass == "all"){
        $(this).removeClass("animate-hide").addClass("animate-show");
      }else{
        $(this).addClass("animate-hide").removeClass("animate-show");
      }
    });
  });
});
