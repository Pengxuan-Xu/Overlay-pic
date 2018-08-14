export default function magnify(imgID,imgID2,zoom) {


    let img = document.getElementById(imgID);
    let img2 = document.getElementById(imgID2);
    /*create magnifier glass:*/
    let glass = document.createElement("DIV");
    glass.setAttribute("class", "img-magnifier-glass");
    let glass2 = document.createElement("DIV");
    glass2.setAttribute("class", "img-magnifier-glass");
    /*insert magnifier glass:*/
    img.parentElement.insertBefore(glass, img);
    img2.parentElement.insertBefore(glass2, img2);
    /*set background properties for the magnifier glass:*/
    glass.style.backgroundImage = "url('" + img2.src + "')";
    glass.style.backgroundRepeat = "no-repeat";
    glass.style.backgroundSize = (img2.width * zoom) + "px " + (img2.height * zoom) + "px";
    glass2.style.backgroundImage = "url('" + img.src + "')";
    glass2.style.backgroundRepeat = "no-repeat";
    glass2.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
    let bw = 3;
    let w = glass.offsetWidth / 2;
    let h = glass.offsetHeight / 2;

    glass.removeEventListener("mousemove", moveMagnifier);
    img.removeEventListener("mousemove", moveMagnifier);
    glass.removeEventListener("touchmove", moveMagnifier);
    img.removeEventListener("touchmove", moveMagnifier);
    /*execute a function when someone moves the magnifier glass over the image:*/
    glass.addEventListener("mousemove", moveMagnifier);
    img.addEventListener("mousemove", moveMagnifier);
    glass2.addEventListener("mousemove", moveMagnifier);
    img2.addEventListener("mousemove", moveMagnifier);
    /*and also for touch screens:*/
    glass.addEventListener("touchmove", moveMagnifier);
    img.addEventListener("touchmove", moveMagnifier);
    function moveMagnifier(e) {
      /*prevent any other actions that may occur when moving over the image*/
      e.preventDefault();
      /*get the cursor's x and y positions:*/
      let pos = getCursorPos(e);
      let x = pos.x;
      let y = pos.y;
      let t = pos.t;
      /*prevent the magnifier glass from being positioned outside the image:*/
      //if (x > img.width - (w / zoom)) {x = img.width - (w / zoom);}
      //if (x < w / zoom) {x = w / zoom;}
      //if (y > img.height - (h / zoom)) {y = img.h
      //eight - (h / zoom);}
      //if (y < h / zoom) {y = h / zoom;}
      /*set the position of the magnifier glass:*/
      glass.style.left = (x - w) + "px";
      glass.style.top = (y - h) + "px";
      /*display what the magnifier glass "sees":*/
      glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
      if (t <0) {glass.style.visibility = 'hidden';glass2.style.visibility = 'visible'}
      if (t >0) {glass2.style.visibility = 'hidden';glass.style.visibility = 'visible'}
      glass2.style.left = (x - w+img.width+10) + "px";
      glass2.style.top = (y - h) + "px";
      /*display what the magnifier glass "sees":*/
      glass2.style.backgroundPosition = "-" + ((x * zoom) - w + bw-10) + "px -" + ((y * zoom) - h + bw) + "px";
    }
    function getCursorPos(e) {
      e = e || window.event;
      /*get the x and y positions of the image:*/
      let a = img.getBoundingClientRect();
      let b = img2.getBoundingClientRect();
      /*calculate the cursor's x and y coordinates, relative to the image:*/
      let x1 = e.pageX - a.left;
      let y1 = e.pageY - a.top;
      let x2 = e.pageX - b.left;
      let y2 = e.pageY - b.top;
      let t;
      if (x1 > 0) {x = x1; y=y1; t=1}
      if (x1 < 0) {x = x2; y=y2; t=-1}
      /*consider any page scrolling:*/
      let x = x - window.pageXOffset;
      let y = y - window.pageYOffset;
      return {x : x, y : y, t:t};
    }
}