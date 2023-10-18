function getRandomColour() {
    let c = function () { return Math.floor(Math.random()*256); }
    return 'rgb(' + c() + ',' + c() + ',' + c() + ')';
}

function createTable(randomColour = true, colour) {
    const width = 12, height = 12, tileSize = 32;
    let table = "";

    for (let i=0; i<height; i++) {
        table += '<tr';
        table += ' height="' + tileSize + 'px"';
        table += '>';

        for (let j=0; j<width; j++) {
            if (randomColour) {
                colour = getRandomColour();
            }

            table += '<td'
            table += ' width="' + tileSize + 'px"'
            table += ' style="background-color:' + colour + '"';
            table += ' onclick="createTable(false, \'' + colour + '\')"';
            table += '></td>';
        }

        table += '</tr>'
    }

    document.getElementById('colourTable').innerHTML = table;
}

window.onload = function() {
    createTable();
}