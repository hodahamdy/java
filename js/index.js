//hamsk el swar
 var imglist = document.querySelectorAll(".img-item");
// keda mska el div el eswd
var lightBoxContainer = document.querySelector(".lightBox-container")




var close = document.getElementById("close")


var lightBox = document.querySelector(".lightBox")


for(var i=0; i<imglist.length; i++)
    {
        imglist[i].addEventListener("click", function(ev){
        var imgPath = ev.target.src;
            
            
            lightBox.style.backgroundImage="url("+imgPath+")"
        
            
            
            
        lightBoxContainer.classList.add("show")
            close.addEventListener("click",function(){
                        lightBoxContainer.classList.remove("show")

                
                
                
            }
                                  
                                  
                                  
                                  
                                  )
            
    })
    }
    