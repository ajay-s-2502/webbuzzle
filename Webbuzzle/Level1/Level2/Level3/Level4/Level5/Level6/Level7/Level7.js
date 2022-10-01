let moves = 0;
let init = 0;
function start()
{
    addEventListener("click", function() 
    {
        let iyal = document.documentElement;
        let isai = iyal.requestFullScreen || iyal.webkitRequestFullScreen || iyal.mozRequestFullScreen;
        isai.call(iyal);
    }
    );//இயல் இசை நாடகம் -> முத்தமிழ், செம்மொழியாகிய செந்தமிழ் 

    document.getElementById("launch").textContent = "Reset";
    let tile_pos = new Array();
    while(tile_pos.length < 9)
    {
        var num = Math.round(Math.random()*100);
        if(num == 11 || num == 12 ||  num == 13 ||  num == 21 ||  num == 22 ||  num == 23 ||  num == 31 ||  num == 32 ||  num == 33)
        {
            if(!tile_pos.includes(num))
            {
                tile_pos[tile_pos.length] = num;
            }
        }
    }

    document.getElementById("p11").textContent = tile_pos[0];
    document.getElementById("p11").style.background = "url("+tile_pos[0]+".jpg";
    document.getElementById("p11").style.backgroundSize = "contain";
    
    document.getElementById("p12").textContent = tile_pos[1];
    document.getElementById("p12").style.background = "url("+tile_pos[1]+".jpg";
    document.getElementById("p12").style.backgroundSize = "contain";
    
    document.getElementById("p13").textContent = tile_pos[2];
    document.getElementById("p13").style.background = "url("+tile_pos[2]+".jpg";
    document.getElementById("p13").style.backgroundSize = "contain";
    
    document.getElementById("p21").textContent = tile_pos[3];
    document.getElementById("p21").style.background = "url("+tile_pos[3]+".jpg";
    document.getElementById("p21").style.backgroundSize = "contain";
    
    document.getElementById("p22").textContent = tile_pos[4];
    document.getElementById("p22").style.background = "url("+tile_pos[4]+".jpg";
    document.getElementById("p22").style.backgroundSize = "contain";
    
    document.getElementById("p23").textContent = tile_pos[5];
    document.getElementById("p23").style.background = "url("+tile_pos[5]+".jpg";
    document.getElementById("p23").style.backgroundSize = "contain";
    
    document.getElementById("p31").textContent = tile_pos[6];
    document.getElementById("p31").style.background = "url("+tile_pos[6]+".jpg";
    document.getElementById("p31").style.backgroundSize = "contain";
    
    document.getElementById("p32").textContent = tile_pos[7];
    document.getElementById("p32").style.background = "url("+tile_pos[7]+".jpg";
    document.getElementById("p32").style.backgroundSize = "contain";
    
    document.getElementById("p33").textContent = tile_pos[8];
    document.getElementById("p33").style.background = "url("+tile_pos[8]+".jpg";
    document.getElementById("p33").style.backgroundSize = "contain";

    document.getElementById("moves").textContent = "Moves : 0";
    moves = 0;
    init = 1;
}


function check()
{
    let tile_11 = document.getElementById("p11").textContent;
    let tile_12 = document.getElementById("p12").textContent;
    let tile_13 = document.getElementById("p13").textContent;
    let tile_21 = document.getElementById("p21").textContent;
    let tile_22 = document.getElementById("p22").textContent;
    let tile_23 = document.getElementById("p23").textContent;
    let tile_31 = document.getElementById("p31").textContent;
    let tile_32 = document.getElementById("p32").textContent;
    let tile_33 = document.getElementById("p33").textContent;

    if(tile_11 == "11" && tile_12 == "12" && tile_13 == "13" && tile_21 == "21" && tile_22 == "22" && tile_23 == "23" && tile_31 == "31" && tile_32 == "32" && tile_33 == "33")
    {
        return true;
    }
    else
    {
        return false;
    }
}

function nextLevel()
{
    window.location.href="Level8/Level8.html";
}

function replay()
{
    document.getElementById("p11").style.visibility = "visible";
    document.getElementById("p12").style.visibility = "visible";
    document.getElementById("p13").style.visibility = "visible";
    document.getElementById("p21").style.visibility = "visible";
    document.getElementById("p22").style.visibility = "visible";
    document.getElementById("p23").style.visibility = "visible";
    document.getElementById("p31").style.visibility = "visible";
    document.getElementById("p32").style.visibility = "visible";
    document.getElementById("p33").style.visibility = "visible";
    document.getElementById("grid").style.background = "none";
    document.getElementById("grid").style.backgroundColor = "white";
    document.getElementById("next").style.visibility = "hidden";
    document.getElementById("replay").style.visibility = "hidden";
    document.getElementById("launch").style.visibility = "visible";
    document.getElementById("launch").textContent = "Reset";
    document.getElementById("moves").style.width = "150px";
    moves = 0;
    document.getElementById("moves").textContent = "Moves : 0";
}

function move(tile)
{
    if(document.getElementById(tile).textContent != "11" && init == 1)
    {
        switch (tile)
        {
            case "p11":
                if(document.getElementById("p12").textContent == "11")
                {
                    var temp = document.getElementById("p12").textContent;
                    document.getElementById("p12").textContent = document.getElementById("p11").textContent;
                    document.getElementById("p11").textContent = temp;
                    document.getElementById("p11").style.background = "url("+document.getElementById("p11").textContent+".jpg)";
                    document.getElementById("p11").style.backgroundSize = "contain";
                    document.getElementById("p12").style.background = "url("+document.getElementById("p12").textContent+".jpg)";
                    document.getElementById("p12").style.backgroundSize = "contain";
                    moves++;
                    document.getElementById("moves").textContent = "Moves : "+moves;
                }
                if(document.getElementById("p21").textContent == "11")
                {
                    var temp = document.getElementById("p21").textContent;
                    document.getElementById("p21").textContent = document.getElementById("p11").textContent;
                    document.getElementById("p11").textContent = temp;
                    document.getElementById("p11").style.background = "url("+document.getElementById("p11").textContent+".jpg)";
                    document.getElementById("p11").style.backgroundSize = "contain";
                    document.getElementById("p21").style.background = "url("+document.getElementById("p21").textContent+".jpg)";
                    document.getElementById("p21").style.backgroundSize = "contain";
                    moves++;
                    document.getElementById("moves").textContent = "Moves : "+moves;
                }
                if(check())
                {
                    setTimeout(function()
                    {
                        document.getElementById("p11").style.visibility = "hidden";
                        document.getElementById("p12").style.visibility = "hidden";
                        document.getElementById("p13").style.visibility = "hidden";
                        document.getElementById("p21").style.visibility = "hidden";
                        document.getElementById("p22").style.visibility = "hidden";
                        document.getElementById("p23").style.visibility = "hidden";
                        document.getElementById("p31").style.visibility = "hidden";
                        document.getElementById("p32").style.visibility = "hidden";
                        document.getElementById("p33").style.visibility = "hidden";
                        document.getElementById("launch").style.visibility = "hidden";
                        document.getElementById("next").style.visibility = "visible";
                        document.getElementById("replay").style.visibility = "visible";
                        document.getElementById("grid").style.background = "url('Winner.gif')";
                        let end = new Audio('End.mp3');
                        end.play();
                        document.getElementById("grid").style.backgroundSize = "contain";
                        document.getElementById("moves").textContent = "You have completed in "+moves+" moves!";
                        document.getElementById("moves").style.width = "600px";
                    } , 500);
                }
                break;
            
            case "p12":
                if(document.getElementById("p11").textContent == "11")
                {
                    var temp = document.getElementById("p11").textContent;
                    document.getElementById("p11").textContent = document.getElementById("p12").textContent;
                    document.getElementById("p12").textContent = temp;
                    document.getElementById("p11").style.background = "url("+document.getElementById("p11").textContent+".jpg)";
                    document.getElementById("p11").style.backgroundSize = "contain";
                    document.getElementById("p12").style.background = "url("+document.getElementById("p12").textContent+".jpg)";
                    document.getElementById("p12").style.backgroundSize = "contain";
                    moves++;
                    document.getElementById("moves").textContent = "Moves : "+moves;
                }
                if(document.getElementById("p22").textContent == "11")
                {
                    var temp = document.getElementById("p22").textContent;
                    document.getElementById("p22").textContent = document.getElementById("p12").textContent;
                    document.getElementById("p12").textContent = temp;
                    document.getElementById("p22").style.background = "url("+document.getElementById("p22").textContent+".jpg)";
                    document.getElementById("p22").style.backgroundSize = "contain";
                    document.getElementById("p12").style.background = "url("+document.getElementById("p12").textContent+".jpg)";
                    document.getElementById("p12").style.backgroundSize = "contain";
                    moves++;
                    document.getElementById("moves").textContent = "Moves : "+moves;
                }
                if(document.getElementById("p13").textContent == "11")
                {
                    var temp = document.getElementById("p13").textContent;
                    document.getElementById("p13").textContent = document.getElementById("p12").textContent;
                    document.getElementById("p12").textContent = temp;
                    document.getElementById("p13").style.background = "url("+document.getElementById("p13").textContent+".jpg)";
                    document.getElementById("p13").style.backgroundSize = "contain";
                    document.getElementById("p12").style.background = "url("+document.getElementById("p12").textContent+".jpg)";
                    document.getElementById("p12").style.backgroundSize = "contain";
                    moves++;
                    document.getElementById("moves").textContent = "Moves : "+moves;
                }
                break;
        
            case "p13":
                if(document.getElementById("p12").textContent == "11")
                {
                    var temp = document.getElementById("p12").textContent;
                    document.getElementById("p12").textContent = document.getElementById("p13").textContent;
                    document.getElementById("p13").textContent = temp;
                    document.getElementById("p13").style.background = "url("+document.getElementById("p13").textContent+".jpg)";
                    document.getElementById("p13").style.backgroundSize = "contain";
                    document.getElementById("p12").style.background = "url("+document.getElementById("p12").textContent+".jpg)";
                    document.getElementById("p12").style.backgroundSize = "contain";
                    moves++;
                    document.getElementById("moves").textContent = "Moves : "+moves;
                }
                if(document.getElementById("p23").textContent == "11")
                {
                    var temp = document.getElementById("p23").textContent;
                    document.getElementById("p23").textContent = document.getElementById("p13").textContent;
                    document.getElementById("p13").textContent = temp;
                    document.getElementById("p13").style.background = "url("+document.getElementById("p13").textContent+".jpg)";
                    document.getElementById("p13").style.backgroundSize = "contain";
                    document.getElementById("p23").style.background = "url("+document.getElementById("p23").textContent+".jpg)";
                    document.getElementById("p23").style.backgroundSize = "contain";
                    moves++;
                    document.getElementById("moves").textContent = "Moves : "+moves;
                }
                break;
    
            case "p21":
                if(document.getElementById("p11").textContent == "11")
                {
                    var temp = document.getElementById("p11").textContent;
                    document.getElementById("p11").textContent = document.getElementById("p21").textContent;
                    document.getElementById("p21").textContent = temp;
                    document.getElementById("p11").style.background = "url("+document.getElementById("p11").textContent+".jpg)";
                    document.getElementById("p11").style.backgroundSize = "contain";
                    document.getElementById("p21").style.background = "url("+document.getElementById("p21").textContent+".jpg)";
                    document.getElementById("p21").style.backgroundSize = "contain";
                    moves++;
                    document.getElementById("moves").textContent = "Moves : "+moves;
                }
                if(document.getElementById("p22").textContent == "11")
                {
                    var temp = document.getElementById("p22").textContent;
                    document.getElementById("p22").textContent = document.getElementById("p21").textContent;
                    document.getElementById("p21").textContent = temp;
                    document.getElementById("p22").style.background = "url("+document.getElementById("p22").textContent+".jpg)";
                    document.getElementById("p22").style.backgroundSize = "contain";
                    document.getElementById("p21").style.background = "url("+document.getElementById("p21").textContent+".jpg)";
                    document.getElementById("p21").style.backgroundSize = "contain";
                    moves++;
                    document.getElementById("moves").textContent = "Moves : "+moves;
                } 
                if(document.getElementById("p31").textContent == "11")
                {
                    var temp = document.getElementById("p31").textContent;
                    document.getElementById("p31").textContent = document.getElementById("p21").textContent;
                    document.getElementById("p21").textContent = temp;
                    document.getElementById("p31").style.background = "url("+document.getElementById("p31").textContent+".jpg)";
                    document.getElementById("p31").style.backgroundSize = "contain";
                    document.getElementById("p21").style.background = "url("+document.getElementById("p21").textContent+".jpg)";
                    document.getElementById("p21").style.backgroundSize = "contain";
                    moves++;
                    document.getElementById("moves").textContent = "Moves : "+moves;
                } 
                break;
            
            case "p22":
                if(document.getElementById("p12").textContent == "11")
                {
                    var temp = document.getElementById("p12").textContent;
                    document.getElementById("p12").textContent = document.getElementById("p22").textContent;
                    document.getElementById("p22").textContent = temp;
                    document.getElementById("p12").style.background = "url("+document.getElementById("p12").textContent+".jpg)";
                    document.getElementById("p12").style.backgroundSize = "contain";
                    document.getElementById("p22").style.background = "url("+document.getElementById("p22").textContent+".jpg)";
                    document.getElementById("p22").style.backgroundSize = "contain";
                    moves++;
                    document.getElementById("moves").textContent = "Moves : "+moves;
                } 
                if(document.getElementById("p21").textContent == "11")
                {
                    var temp = document.getElementById("p21").textContent;
                    document.getElementById("p21").textContent = document.getElementById("p22").textContent;
                    document.getElementById("p22").textContent = temp;
                    document.getElementById("p21").style.background = "url("+document.getElementById("p21").textContent+".jpg)";
                    document.getElementById("p21").style.backgroundSize = "contain";
                    document.getElementById("p22").style.background = "url("+document.getElementById("p22").textContent+".jpg)";
                    document.getElementById("p22").style.backgroundSize = "contain";
                    moves++;
                    document.getElementById("moves").textContent = "Moves : "+moves;
                } 
                if(document.getElementById("p23").textContent == "11")
                {
                    var temp = document.getElementById("p23").textContent;
                    document.getElementById("p23").textContent = document.getElementById("p22").textContent;
                    document.getElementById("p22").textContent = temp;
                    document.getElementById("p23").style.background = "url("+document.getElementById("p23").textContent+".jpg)";
                    document.getElementById("p23").style.backgroundSize = "contain";
                    document.getElementById("p22").style.background = "url("+document.getElementById("p22").textContent+".jpg)";
                    document.getElementById("p22").style.backgroundSize = "contain";
                    moves++;
                    document.getElementById("moves").textContent = "Moves : "+moves;
                } 
                if(document.getElementById("p32").textContent == "11")
                {
                    var temp = document.getElementById("p32").textContent;
                    document.getElementById("p32").textContent = document.getElementById("p22").textContent;
                    document.getElementById("p22").textContent = temp;
                    document.getElementById("p32").style.background = "url("+document.getElementById("p32").textContent+".jpg)";
                    document.getElementById("p32").style.backgroundSize = "contain";
                    document.getElementById("p22").style.background = "url("+document.getElementById("p22").textContent+".jpg)";
                    document.getElementById("p22").style.backgroundSize = "contain";
                    moves++;
                    document.getElementById("moves").textContent = "Moves : "+moves;
                } 
                break;
            
            case "p23":
                if(document.getElementById("p13").textContent == "11")
                {
                    var temp = document.getElementById("p13").textContent;
                    document.getElementById("p13").textContent = document.getElementById("p23").textContent;
                    document.getElementById("p23").textContent = temp;
                    document.getElementById("p13").style.background = "url("+document.getElementById("p13").textContent+".jpg)";
                    document.getElementById("p13").style.backgroundSize = "contain";
                    document.getElementById("p23").style.background = "url("+document.getElementById("p23").textContent+".jpg)";
                    document.getElementById("p23").style.backgroundSize = "contain";
                    moves++;
                    document.getElementById("moves").textContent = "Moves : "+moves;
                } 
                if(document.getElementById("p22").textContent == "11")
                {
                    var temp = document.getElementById("p22").textContent;
                    document.getElementById("p22").textContent = document.getElementById("p23").textContent;
                    document.getElementById("p23").textContent = temp;
                    document.getElementById("p22").style.background = "url("+document.getElementById("p22").textContent+".jpg)";
                    document.getElementById("p22").style.backgroundSize = "contain";
                    document.getElementById("p23").style.background = "url("+document.getElementById("p23").textContent+".jpg)";
                    document.getElementById("p23").style.backgroundSize = "contain";
                    moves++;
                    document.getElementById("moves").textContent = "Moves : "+moves;
                } 
                if(document.getElementById("p33").textContent == "11")
                {
                    var temp = document.getElementById("p33").textContent;
                    document.getElementById("p33").textContent = document.getElementById("p23").textContent;
                    document.getElementById("p23").textContent = temp;
                    document.getElementById("p33").style.background = "url("+document.getElementById("p33").textContent+".jpg)";
                    document.getElementById("p33").style.backgroundSize = "contain";
                    document.getElementById("p23").style.background = "url("+document.getElementById("p23").textContent+".jpg)";
                    document.getElementById("p23").style.backgroundSize = "contain";
                    moves++;
                    document.getElementById("moves").textContent = "Moves : "+moves;
                } 
                break;
            
            case "p31":
                if(document.getElementById("p21").textContent == "11")
                {
                    var temp = document.getElementById("p21").textContent;
                    document.getElementById("p21").textContent = document.getElementById("p31").textContent;
                    document.getElementById("p31").textContent = temp;
                    document.getElementById("p21").style.background = "url("+document.getElementById("p21").textContent+".jpg)";
                    document.getElementById("p21").style.backgroundSize = "contain";
                    document.getElementById("p31").style.background = "url("+document.getElementById("p31").textContent+".jpg)";
                    document.getElementById("p31").style.backgroundSize = "contain";
                    moves++;
                    document.getElementById("moves").textContent = "Moves : "+moves;
                } 
                if(document.getElementById("p32").textContent == "11")
                {
                    var temp = document.getElementById("p32").textContent;
                    document.getElementById("p32").textContent = document.getElementById("p31").textContent;
                    document.getElementById("p31").textContent = temp;
                    document.getElementById("p32").style.background = "url("+document.getElementById("p32").textContent+".jpg)";
                    document.getElementById("p32").style.backgroundSize = "contain";
                    document.getElementById("p31").style.background = "url("+document.getElementById("p31").textContent+".jpg)";
                    document.getElementById("p31").style.backgroundSize = "contain";
                    moves++;
                    document.getElementById("moves").textContent = "Moves : "+moves;
                } 
                break;
            
            case "p32":
                if(document.getElementById("p31").textContent == "11")
                {
                    var temp = document.getElementById("p31").textContent;
                    document.getElementById("p31").textContent = document.getElementById("p32").textContent;
                    document.getElementById("p32").textContent = temp;
                    document.getElementById("p31").style.background = "url("+document.getElementById("p31").textContent+".jpg)";
                    document.getElementById("p31").style.backgroundSize = "contain";
                    document.getElementById("p32").style.background = "url("+document.getElementById("p32").textContent+".jpg)";
                    document.getElementById("p32").style.backgroundSize = "contain";
                    moves++;
                    document.getElementById("moves").textContent = "Moves : "+moves;
                } 
                if(document.getElementById("p22").textContent == "11")
                {
                    var temp = document.getElementById("p22").textContent;
                    document.getElementById("p22").textContent = document.getElementById("p32").textContent;
                    document.getElementById("p32").textContent = temp;
                    document.getElementById("p22").style.background = "url("+document.getElementById("p22").textContent+".jpg)";
                    document.getElementById("p22").style.backgroundSize = "contain";
                    document.getElementById("p32").style.background = "url("+document.getElementById("p32").textContent+".jpg)";
                    document.getElementById("p32").style.backgroundSize = "contain";
                    moves++;
                    document.getElementById("moves").textContent = "Moves : "+moves;
                }
                if(document.getElementById("p33").textContent == "11")
                {
                    var temp = document.getElementById("p33").textContent;
                    document.getElementById("p33").textContent = document.getElementById("p32").textContent;
                    document.getElementById("p32").textContent = temp;
                    document.getElementById("p33").style.background = "url("+document.getElementById("p33").textContent+".jpg)";
                    document.getElementById("p33").style.backgroundSize = "contain";
                    document.getElementById("p32").style.background = "url("+document.getElementById("p32").textContent+".jpg)";
                    document.getElementById("p32").style.backgroundSize = "contain";
                    moves++;
                    document.getElementById("moves").textContent = "Moves : "+moves;
                } 
                break;
            
            case "p33":
                if(document.getElementById("p32").textContent == "11")
                {
                    var temp = document.getElementById("p32").textContent;
                    document.getElementById("p32").textContent = document.getElementById("p33").textContent;
                    document.getElementById("p33").textContent = temp;
                    document.getElementById("p32").style.background = "url("+document.getElementById("p32").textContent+".jpg)";
                    document.getElementById("p32").style.backgroundSize = "contain";
                    document.getElementById("p33").style.background = "url("+document.getElementById("p33").textContent+".jpg)";
                    document.getElementById("p33").style.backgroundSize = "contain";
                    moves++;
                    document.getElementById("moves").textContent = "Moves : "+moves;
                } 
                if(document.getElementById("p23").textContent == "11")
                {
                    var temp = document.getElementById("p23").textContent;
                    document.getElementById("p23").textContent = document.getElementById("p33").textContent;
                    document.getElementById("p33").textContent = temp;
                    document.getElementById("p23").style.background = "url("+document.getElementById("p23").textContent+".jpg)";
                    document.getElementById("p23").style.backgroundSize = "contain";
                    document.getElementById("p33").style.background = "url("+document.getElementById("p33").textContent+".jpg)";
                    document.getElementById("p33").style.backgroundSize = "contain";
                    moves++;
                    document.getElementById("moves").textContent = "Moves : "+moves;
                } 
                break;
        }
    }
}