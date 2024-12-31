// Selecting Item
const selectFontSize = document.querySelector("#selectFontSize");
const selectBgColor = document.querySelector("#selectBgColor");
const resetButton = document.querySelector("#resetButton");
const mainElement = document.querySelector("main");


// setvalues
const setValues = (getFontSize, getBgColor) => {
    selectBgColor.value = getBgColor;
    selectFontSize.value = getFontSize;
    mainElement.style.fontSize = getFontSize;
    mainElement.style.backgroundColor = getBgColor;
}


//load LocalStorage value
const initailSetup = () => {
    const getFontSize =  localStorage.getItem("fontSize");
    const getBgColor = localStorage.getItem("BgColor");

    if (getBgColor && getFontSize) {
        setValues(getFontSize, getBgColor);
    }

    if (!getBgColor && !getFontSize) {
        setValues("16px", "aqua");
    }

    if (!getBgColor && getFontSize) {
        setValues(getFontSize, "aqua");
    }

    if (getBgColor && !getFontSize) {
        setValues("16px", getBgColor);
    }

}

initailSetup();

// changeFontSize 
const changeFontSize = (event) => {
    const selectedFontSize = event.target.value;
    mainElement.style.fontSize = selectedFontSize;
    localStorage.setItem("fontSize", selectedFontSize);
}

// changeBgcolor
const changeBgcolor =(event) => {
    const selectedBgColor =event.target.value;
    mainElement.style.backgroundColor = selectedBgColor;
    localStorage.setItem("BgColor", selectedBgColor);
}

// clearlocalStorage
const clearLocalStorage = () => {
    localStorage.removeItem("fontSize");
    localStorage.removeItem("BgColor")
    setValues("16px", "aqua");
}

// add event listener
selectFontSize.addEventListener("change", changeFontSize);
selectBgColor.addEventListener("change", changeBgcolor);
resetButton.addEventListener("click", clearLocalStorage);

