var col = document.querySelector('#col');

function populate() {
    $.getJSON('https://raw.githubusercontent.com/emuel/api/master/5110', function(data) {    

        for (var i = 0; i < data.length; i++) {

            if (i != 1) {
                col.innerHTML+="<div class='card'><div class='texts'><h4>Name: " + data[i].stu_name + " "+ data[i].last_name + "</h4><p>Fact: " + data[i].fact + "</p></div><img src='https://www." + data[i].domain +"/images/me.jpg'></div>";
            } else {
                col.innerHTML+="<div class='card'><div class='texts'><h4>Name: " + data[i].stu_name + " "+ data[i].last_name + "</h4><p>Fact: " + data[i].fact + "</p></div><img src='https://kevintrdo.github.io/nmc/4020/images/me.jpg'></div>";
            }
        }

    });
}

populate();