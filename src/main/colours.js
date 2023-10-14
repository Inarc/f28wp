function getRandomColour() {
    let c = function () { return Math.floor(Math.random()*256); }
    return 'rgb(' + c() + ',' + c() + ',' + c() + ')';
}

function createTable() {
    const width = 12, height = 12, tileSize = 32;
    let table = "";
    for (let i=0; i<height; i++) {
        table += '<tr height="' + tileSize + 'px">';
        for (let j=0; j<width; j++) {
            table += '<td width="' + tileSize + 'px" style="background-color:' + getRandomColour() + '"></td>';;
        }
        table += '</tr>'
    }
    document.getElementById('colourTable').innerHTML = table;
}

window.onload = function() {
    createTable();
}