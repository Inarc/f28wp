function getCssVar(variable) {
    return getComputedStyle(document.documentElement).getPropertyValue(variable);
}

function setCssVar(variable, value) {
    document.documentElement.style.setProperty(variable, value);
}

function changeColourGreyish(colour) {
    changeTextColourGreyish(colour)
    changeBackgroundColourGreyish(colour);
}

function changeTextColourGreyish(colour) {
    // if CSS vars isn't found, it defaults back to the original grey shown when website is first loaded
    let bodyColour, headColour;

    switch(colour) {
        case 'red':
            bodyColour = getCssVar('--orange');
            headColour = getCssVar('--orange');
            break;
        case 'green':
            bodyColour = getCssVar('--mint');
            headColour = getCssVar('--mint');
            break;
        case 'blue':
            bodyColour = getCssVar('--purple');
            headColour = getCssVar('--purple');
            break;
        case 'grey':
        default:
            bodyColour = 'black';
            headColour = getCssVar('--grey');
            break;
    
    }

    document.getElementById('body').style.color = bodyColour;
    document.getElementById('head').style.color = headColour;
}

function changeBackgroundColourGreyish(colour) {
    let bodyBg = getCssVar('--grey-' + colour);
    let headBg = getCssVar('--dark-grey-' + colour);

    document.getElementById('body').style.backgroundColor = bodyBg;
    document.getElementById('head').style.backgroundColor = headBg;
}
