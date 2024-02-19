const buildList = document.querySelector('#userInput');

for (var i = 0; i < 100; i++) {
    buildList.innerHTML += "<option value="+i+">"+i+"</option>";
}

    buildList.innerHTML += "<option value="+14872+">"+14872+"</option>";

const compare = () => {
    let answer = document.querySelector('#userInput');
    answer = answer.value;
    answer = Number(answer);
    let reaction = document.querySelector('#response');
    
/*    if (answer === 24) {
        reaction.innerHTML = "The answer is correct";
    } else if (answer > 24 && answer <= 28) {
        reaction.innerHTML="The answer is too high but close";
    } else if (answer > 28) {
        reaction.innerHTML="The answer is too high";        
    } else if (answer < 24 & answer >= 20) {
        reaction.innerHTML="The answer is too low but close";
    } else if (answer < 20) {
        reaction.innerHTML="The answer is too low";        
    }
    */

    switch(true) {
        case (answer == 14872):
        reaction.innerHTML = "correct";
        break;

        case (answer < 14872 && answer >= 14865):
        reaction.innerHTML = "too low, but close";
        break;

        case (answer < 14872):
        reaction.innerHTML = "too low";
        break;

        case (answer > 14872 && answer <= 14878):
        reaction.innerHTML = "too high, but close";         
        break;

        case (answer > 14872):
        reaction.innerHTML = "too high";         
        break;
    }

};
