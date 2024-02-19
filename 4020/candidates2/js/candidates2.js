let candidateNames = ["Jeb Bush","Ben Carson","Lincoln Chafee","Chris Christie","Ted Cruz","Carly Fiorina","Jim Gilmore","Lindsey Graham","Bobby Jindal","John Kasich","Lawrence Lessig","Martin O'Malley","George Pataki","Rand Paul","Rick Perry","Marco Rubio","Bernie Sanders","Rick Santorum","Donald Trump","Scott Walker","Jim Webb"]


let candidatePix = ["bush.jpg","carson.jpg","chafee.jpg","christie.jpg","cruz.jpg","fiorina.jpg","gilmore.jpg","graham.jpg","jindal.jpg","kasich.jpg","lessig.jpg","omalley.jpg","pataki.jpg","paul.jpg","perry.jpg","rubio.jpg","sanders.jpg","santorum.jpg","trump.jpg","walker.jpg","webb.jpg"]

const output = document.querySelector('#alsoRan');
const next = document.querySelector('#next');
const previous = document.querySelector('#previous');
var i = 0;

next.addEventListener('click', () => {
    canShow(1);
});

previous.addEventListener('click', () => {
    canShow(-1);
});

    output.innerHTML = "<div>" + candidateNames[0] + "<br><img src=pix/"+candidatePix[0]+"></div>";

const canShow = (plusMinus) => {
    i = (i + plusMinus) % candidateNames.length;
    if (i < 0) i = candidateNames.length - 1;
    output.innerHTML = "<div>" + candidateNames[i] + "<br><img src=pix/"+candidatePix[i]+"></div>";
};


