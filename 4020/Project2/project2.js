let candidateNames = ["Jeb Bush","Ben Carson","Lincoln Chafee","Chris Christie","Ted Cruz","Carly Fiorina","Jim Gilmore","Lindsey Graham","Bobby Jindal","John Kasich","Lawrence Lessig","Martin O'Malley","George Pataki","Rand Paul","Rick Perry","Marco Rubio","Bernie Sanders","Rick Santorum","Donald Trump","Scott Walker","Jim Webb"]

let candidatePix = ["bush.jpg","carson.jpg","chafee.jpg","christie.jpg","cruz.jpg","fiorina.jpg","gilmore.jpg","graham.jpg","jindal.jpg","kasich.jpg","lessig.jpg","omalley.jpg","pataki.jpg","paul.jpg","perry.jpg","rubio.jpg","sanders.jpg","santorum.jpg","trump.jpg","walker.jpg","webb.jpg"]

const output1 = document.querySelector('#oneProject2');
const output2 = document.querySelector('#twoProject2');
const output3 = document.querySelector('#threeProject2');
var i = 0;
var n = 7;
var t = 14;

output1.innerHTML = "<div>" + candidateNames[0] + "<br><img src=pix/"+candidatePix[0]+"></div>";
output2.innerHTML = "<div>" + candidateNames[7] + "<br><img src=pix/"+candidatePix[7]+"></div>";
output3.innerHTML = "<div>" + candidateNames[14] + "<br><img src=pix/"+candidatePix[14]+"></div>";

const change = (oneTwoThree, plusMinus) => {
    switch(true) {
        case (oneTwoThree == 1):
            i = (i + plusMinus) % (candidateNames.length - 14);
            if (i < 0) i = candidateNames.length - 15;
            output1.innerHTML = "<div>" + candidateNames[i] + "<br><img src=pix/"+candidatePix[i]+"></div>";
            break;
        
        case (oneTwoThree == 2):
            n = (n + plusMinus) % (candidateNames.length - 6);
            if (n < 7) n = 13;
            if (n > 13) n = 7;
            output2.innerHTML = "<div>" + candidateNames[n] + "<br><img src=pix/"+candidatePix[n]+"></div>";
            break;
            
        case (oneTwoThree == 3):
            t = (t + plusMinus) % (candidateNames.length-1);
            if (t < 14) t = 20;
            output3.innerHTML = "<div>" + candidateNames[t] + "<br><img src=pix/"+candidatePix[t]+"></div>";
            if (candidateNames[t] == "Jim Webb") {
                if (plusMinus == 1) {
                    t = 13;
                    break;
                }
                i--;
            }
            break;
    }
};
