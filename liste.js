const getRandomColor = () =>
'#'+(Math.random()*0xFFFFFF<<0).toString(16)
const clickColorElement = (element) => {
    element.addEventListener(
        "click",
        (e) => (e.target.style.color= getRandomColor())
    );
} ;
clickColorElement(document.querySelector("ol"));