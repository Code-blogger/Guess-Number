function guessNumber(min = 1, max = Infinity) {
    let x = Math.floor(Math.random() * (max - min) + min);
    console.log(min, max, x);
    return x;
}

function txt(str) {
    document.getElementById('result').innerText = str;
}

function start() {
    const min = prompt('Minimum Value: ', "Number");
    const max = prompt('Maximum Value: ', "Number");

    document.getElementById("main").style.display = "none";

    let element = document.createElement("div");
    element.id = "game";
    element.className = "text-white text-center mx-5 my-5";

    let label = document.createElement("label");
    label.textContent = "Number:";
    label.setAttribute("for", "in");
    element.appendChild(label);

    let input = document.createElement("input");
    input.className = "mx-3";
    input.type = "number";
    input.id = "Num";
    input.setAttribute("name", "in");
    input.max = max;
    input.min = min;
    element.appendChild(input);

    let btn = document.createElement("button");
    btn.id = "check";
    btn.className = "btn btn-outline-light";
    btn.innerText = "Submit";
    element.appendChild(btn);

    document.body.appendChild(element);

    let ele = document.createElement("div");
    ele.id = "result";
    ele.className = "display-3 my-1 text-white text-center";
    document.body.appendChild(ele);

    document.getElementById("check").addEventListener("click", () => {
        console.log("check:", document.querySelector("input").value);
        if (document.querySelector("input").value == guessNumber(min, max)) {
            txt("true");
        } else {
            txt("false");
        }
    })

    let but = document.createElement("button");
    but.id = "stop";
    but.className = "container-fluid btn btn-outline-primary text-center";
    but.innerText = "Stop";
    document.body.appendChild(but);
    but.onclick = () => {
        element.remove();
        ele.innerText = "Thanks for playing Guess-Number Game";
        but.remove();
    }
}