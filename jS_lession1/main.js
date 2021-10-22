
// $(document).ready(function(){
//     $(".meomeo").click(function(){
//       $(this).hide();
//     });
//   });
// $(document).ready(function(){
//     $(".meomeo").dblclick(function(){
//       $(this).show();
//     });
//   });  

$(document).ready(function(){
    $("#btnhide").click(function(){
        $("#meomeo").hide(function(){
            
                alert("Bạn đang ẩn thông tin của Đại Ca :  Dưa hấu đẹp trai khoai to nhất xóm !");
            
        });
    });
});
$(document).ready(function(){
    $("#btnshow").click(function(){
        $("#meomeo").show(function(){
            alert("InFo của anh hấu nè mấy em !")
        });
    });
});

$(document).ready(function(){
    $("#btnwter").click(function(){
        $("#wter").css("color" , "red").slideUp(2000).slideDown(2000);
    });
});
// $(document).ready(function(){

//     $("#btnshow").click(function(){
//         $(".meomeo").show();
//     });
// });
// $(document).ready(function(){
//     $("#flip").click(function(){
//       $("#panel").slideDown("slow");
//     });
//   });

//   $(document).ready(function(){
//     $("#flip").dblclick(function(){
//       $("#panel").slideUp("slow");
//     });
//   });  

//   $(document).ready(function(){
//     $("button").click(function(){
//       $("#div1").fadeIn();
//       $("#div2").fadeIn("slow");
//       $("#div3").fadeIn(3000);
//     });
//   });
//   $(document).ready(function(){
//     $("button").dblclick(function(){
//       $("#div1").fadeOut(1000);
//       $("#div2").fadeOut(2000);
//       $("#div3").fadeOut(3000);
//     });
//   });
  
//   $(document).ready(function(){
//     $("button").click(function(){
//       $("div").animate({
//         left: '470px',
//         opacity: '3.5',
//         height: '+=350px',
//         width: '+=350px'
//       });
//     });
//   });

//   $(document).ready(function(){
//     $("button").click(function(){
//       $("div").animate({
//         height: 'toggle ',
//       });
//     });
//   });  


$(document).ready(function(){
    $("#btnSVL").click(function(){
      alert("Value: " + $("#test").val());
    });
  });


  $(document).ready(function(){
    $("#btn1").click(function(){
      alert("Text: " + $("#test1").text());
    });
    $("#btn2").click(function(){
      alert("HTML: " + $("#test1").html());
    });
  });  



  $(document).ready(function(){
    $("#btnSHR").click(function(){
      alert($("#w3s").attr("href"));
    });
  });


  $(document).ready(function(){
    $("#btnST").click(function(){
      $("#test2").text("Hello world!");
    });
    $("#btnSH").click(function(){
      $("#test3").html("<b>Hello world!</b>");
    });
    $("#btnSV").click(function(){
      $("#test4").val("Dolly Duck");
    });
  });


  
