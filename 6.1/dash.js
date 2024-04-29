// function mouseOver() {
//     console.log(divElement);
//     divElement.style.background="red"
// }
// function mouseOut() {
//     console.log(divElement);
//     divElement.style.background="green"
// }

function onButtonClick(btn) {
    console.log("button clicked: ");
    btn.style.background = "red";
    // const jack = document.write("bu matn chiqishi kerak edi");
    // const h1El = document.querySelector("h1");
    // h1El.appendChild(jack);


}


const spanEl = document.querySelector("#span");
spanEl.addEventListener("click", () => {
    console.log("span element bosildi dumpaladumtash");
    spanEl.style.background = "green";
});
const divEl = document.querySelector("#deiv-El");
function renderText() {
    // setTimeout(() => {
    const texes = {
        name: "jack",
        surname: "hello",
        Age: "how are you",
    };
    texes.forEach(text => {
        const h1El = document.createElement("h1");
        h1El.textContent = text;
        divEl.appendChild(h1El);
            
    });
    // }, 1000);
}
    function myFunction() {
    alert('Sahifa polnostyu yuklandi!');
};
function myFunction() {
const x = document.getElementById("myInput").value;
    document.getElementById("content").innerHTML = "Siz kiritgan qiyymat: " + x;
};
function myFunction1() {
    var xs = document.getElementById("mySelect").value;
    document.getElementById("demo").innerHTML = "Siz tanlagan tanlov: " + xs;
}


function student() {
    const studentobj = {
        name: "jack",
        surname: "rorasst",
        email: "jackforest77@gmail.com",
        numer: 13,
    
    };
   studentobj.forEach(obj => {
    const h2El = document.createElement("h2");
    h2El.textContent = obj;
    divEl.appendChild(h2El);
});
}

function onSelect(selectOption) {
    const h4El = document.querySelector("#message");
    if (selectOption.value === "en") {
     h4El.textContent="hello every one !!!"
    } if (selectOption.value === "uz") {
        h4El.textContent = "assalomu aleykum hammag";

    } if (selectOption.value === "ru") {
        h4El.textContent = "zdrastvuyte dorogie telezriteli!!!";
    }
};
function myFunction2() {
    document.getElementById("s8").innerHTML = "Siz myDiv ustiga o'tdingiz!";
}
function light() {
    document.getElementById("imggg").innerHTML=`.src="./bulbon.gif.url"`
};
function dark() {
 document.getElementById("imggg").src = "./bulbon.gif.url" 
}

const bttn = document.querySelector("#Command");
bttn.onButtonClick = function (event) {
    if (event.altKey && event.shiftKey) {
        alert('assalomu aleykum okam ');
    }
}

