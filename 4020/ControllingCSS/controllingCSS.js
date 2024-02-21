
const sq = document.querySelector('#square');

const changeCSS = () => {
    sq.style.backgroundColor ='red';
    sq.style.borderRadius ='90%';
    sq.style.height = '100px';
    sq.style.width = '100px';
    sq.style.backgroundImage = 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2XdpEbZTTtQlvVL16l6ESeAk6X5RO28DXEUVQUfr3nQ&s")'
};

const changeCSSs = (bg, radius) => {
    sq.style.backgroundColor = bg;
    sq.style.borderRadius = radius;
    sq.style.height = '100px';
    sq.style.width = '100px';
}