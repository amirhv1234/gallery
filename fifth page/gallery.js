$(document).ready(function(){
    $("#search-icon").click(function(){
        $("#search-box").show();
        $("#search-icon").hide();
        $("#search-icon-close").show();
        $(".btn-search").show();
    })
})
$(document).ready(function(){
    $("#search-icon-close").click(function(){
        $("#search-box").hide();
        $("#search-icon").show();
        $("#search-icon-close").hide();
        $(".btn-search").hide();
    })
})
$(document).ready(function(){
    $("#div-photo1").click(function(){
   $(".div-multy-city").show();
   $(this).hide();
 })
})
$(document).ready(function(){
    $("#close-city").click(function(){
   $(".div-multy-city").hide();
   $("#div-photo1").show();
 })
})

function input1(){
    var search = document.getElementById("search-box").value;
    console.log(search);
    
    
    
    if (search == "city"){
        document.getElementById("fruits").style.display = "none";
        document.getElementById("mountain").style.display = "none";
        document.getElementById("food").style.display = "none";
        document.getElementById("car").style.display = "none";
        document.getElementById("jungle").style.display = "none";
        document.getElementById("technology").style.display = "none";
        document.getElementById("div-photo1").style.marginTop = "55px";
        

    }else if(search == "fruit"){
    document.getElementById("div-photo1").style.display = "none";
    document.getElementById("mountain").style.display = "none";
    document.getElementById("food").style.display = "none";
    document.getElementById("car").style.display = "none";
    document.getElementById("jungle").style.display = "none";
    document.getElementById("technology").style.display = "none";
    document.getElementById("fruits").style.marginTop = "55px";
    }else if(search == "mountain"){
        document.getElementById("div-photo1").style.display = "none";
        document.getElementById("fruits").style.display = "none";
        document.getElementById("food").style.display = "none";
        document.getElementById("car").style.display = "none";
        document.getElementById("jungle").style.display = "none";
        document.getElementById("technology").style.display = "none";
        document.getElementById("mountain").style.marginTop = "55px";
        }else if(search == "food"){
            document.getElementById("div-photo1").style.display = "none";
            document.getElementById("fruits").style.display = "none";
            document.getElementById("mountain").style.display = "none";
            document.getElementById("car").style.display = "none";
            document.getElementById("jungle").style.display = "none";
            document.getElementById("technology").style.display = "none";
            document.getElementById("food").style.marginTop = "55px";
            }else if(search == "car"){
                document.getElementById("div-photo1").style.display = "none";
                document.getElementById("fruits").style.display = "none";
                document.getElementById("mountain").style.display = "none";
                document.getElementById("food").style.display = "none";
                document.getElementById("jungle").style.display = "none";
                document.getElementById("technology").style.display = "none";
                document.getElementById("car").style.marginTop = "55px";
                }else if(search == "jungle"){
                    document.getElementById("div-photo1").style.display = "none";
                    document.getElementById("fruits").style.display = "none";
                    document.getElementById("mountain").style.display = "none";
                    document.getElementById("food").style.display = "none";
                    document.getElementById("car").style.display = "none";
                    document.getElementById("technology").style.display = "none";
                    document.getElementById("jungle").style.marginTop = "55px";
                    }else if(search == "technology"){
                        document.getElementById("div-photo1").style.display = "none";
                        document.getElementById("fruits").style.display = "none";
                        document.getElementById("mountain").style.display = "none";
                        document.getElementById("food").style.display = "none";
                        document.getElementById("car").style.display = "none";
                        document.getElementById("jungle").style.display = "none";
                        document.getElementById("technology").style.marginTop = "55px";
                        }
    

}
function secondcar(){
    document.getElementById("second-page").style.display = "block";

}
function fruitpage(){
    document.getElementById("fruit-page").style.display = "block";
}
function mountainpage(){
    document.getElementById("mountain-page").style.display = "block";
}
function foodpage(){
    document.getElementById("food-page").style.display = "block";
}
function junglepage(){
    document.getElementById("jungle-page").style.display = "block";
}
function techpage(){
    document.getElementById("tech-page").style.display = "block";
}
function citypage(){
    document.getElementById("city-page").style.display = "block";
}



