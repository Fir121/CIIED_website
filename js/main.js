// SCROLL EFFECTS - Header Shadow, BITS PARALLAX, TEXT APPEARANCE
addEventListener('scroll', (event) => {
    //  Header Shadow
    if (this.scrollY == 0){
        document.getElementById("topnav").style.boxShadow  = "0 0 0 0";
    }
    else{
        document.getElementById("topnav").style.boxShadow  = "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)";
    }
    
    // Parallax
    if (document.getElementById("conts").getBoundingClientRect().top >= document.getElementById('bitsimage').getBoundingClientRect().height){
        if (document.getElementById("conts").style.marginTop != "0px"){
            document.getElementById("conts").style.marginTop = "0px";
        }
        if (document.getElementById("bitsimage").style.position != ""){
            document.getElementById("bitsimage").style.position = "";
        }
    }
    else if (document.getElementById("bitsimage").getBoundingClientRect().top <= 0){
        if (document.getElementById("conts").style.marginTop != document.getElementById('bitsimage').getBoundingClientRect().height+'px'){
            document.getElementById("conts").style.marginTop = document.getElementById('bitsimage').getBoundingClientRect().height+'px';
        }
        if (document.getElementById("bitsimage").style.position != "fixed"){
            document.getElementById("bitsimage").style.position = "fixed";
        }
        if (document.getElementById("bitsimage").style.top != "0px"){
            document.getElementById("bitsimage").style.top = "0px";
        }
    }


    

    //  TEXT APPEARANCE
    if (this.scrollY <= 225){
        acronym = document.getElementsByClassName("hidethis");
        for (let i=0; i<acronym.length; i++){
            acronym[i].style.opacity = "1";
        }
    }
    else{
        acronym = document.getElementsByClassName("hidethis");
        for (let i=0; i<acronym.length; i++){
            acronym[i].style.opacity = "0";
        }
        document.getElementById("js_scrollPrompt").style.display = "none";
    }
});

// Parallax CIIED Bg background Margin to be below the navbar
function changeMargin(){
    document.getElementById("prlx-div").style.marginTop = document.getElementById('topnav').getBoundingClientRect().height+'px';
}

new ResizeObserver(changeMargin).observe(document.getElementById("prlx-div"));


//letter by letter print
function printLetterByLetter(destination, message, speed){
    var i = 0;
    var interval = setInterval(function(){
        if (message.charAt(i) == "<"){
            document.getElementById(destination).innerHTML += "<br>";
            i += 4
            return;
        }
        document.getElementById(destination).innerHTML += message.charAt(i);
        i++;
        if (i > message.length){
            clearInterval(interval);
            // show scroll prompt
            document.getElementById("js_scrollPrompt").style.display = "block";
        }
    }, speed);
}

printLetterByLetter("lbyl", "Ideas are easy.<br><br>Implementation is difficult.", 100);
