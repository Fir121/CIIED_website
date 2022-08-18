// SCROLL EFFECTS - Header Shadow, BITS PARALLAX, TEXT APPEARANCE
addEventListener('scroll', (event) => {
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
            alert("changing");
            document.getElementById("bitsimage").style.position = "fixed";
        }
        if (document.getElementById("bitsimage").style.top != "0px"){
            document.getElementById("bitsimage").style.top = "0px";
        }
    }


    //  Header Shadow
    if (this.scrollY == 0){
        document.getElementById("topnav").style.boxShadow  = "0 0 0 0";
    }
    else{
        document.getElementById("topnav").style.boxShadow  = "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)";
    }

    //  TEXT APPEARANCE
    if (this.scrollY <= 125){
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
    }
});

// Parallax CIIED Bg background Margin to be below the navbar
function changeMargin(){
    document.getElementById("prlx-div").style.marginTop = document.getElementById('topnav').getBoundingClientRect().height+'px';
}

new ResizeObserver(changeMargin).observe(document.getElementById("prlx-div"));