

var heightElem = document.getElementById("height");
var iconElem = document.getElementById("iconStyle");

//set heightElem handler
heightElem.oninput = function(event) {
    //document.querySelector("temp").innerHTML = "";

    var height = heightElem.value;
    var icon = iconElem.value;
    console.log("Testing height: " + height);
    drawPyramid(height, icon);



    //showValueElem = "<span>"+heightElem.value+"</span>";
    //heightElem.appendChild().innerHTML = showValueElem;
}

function printValue(height) {
    alert("The value is this" + height);
}

//set iconElem handler
iconElem.onchange = function(event) {
    var height = heightElem.value;
    var icon = iconElem.value;
    console.log("Testing icon: " + icon);
    drawPyramid(height, icon);
}


/**
 * drawPyramid
 *
 * Renders, in the HTML document, a Mario pyramid of the specified height
 */
function drawPyramid(height, icon) {

    // first, clear the old content
    document.getElementById("pyramid").innerHTML = "";

    // for each row....
    for (var row = 0; row < height; row++) {

        // figure out number of bricks and spaces
        var numBricks = row + 2;
        var numSpaces = height - row - 1;

        // build up a string for this row
        var rowStr = "";
        for (var i = 0; i < numSpaces; i++) {
            var spaceChar = "&nbsp"; // this is the HTML encoding for a space " "
            rowStr += spaceChar;
        }
        for (var i = 0; i < numBricks; i++) {
            rowStr += icon;
        }

        // make a <p> element for this row, and insert it into the #pyramid container
        rowElem = document.createElement("p");
        rowElem.innerHTML = rowStr;
        document.getElementById("pyramid").appendChild(rowElem);
    }
}
