const box = document.querySelector(".box");

const translateButton = document.querySelector(".box #btn-translate");
const clearButton = document.querySelector(".box #clear-list");

const resultSection = document.querySelector(".box .result");


let letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

translateButton.addEventListener("click", () => {
    const text = document.getElementById("text").value.toLowerCase();
    let textArray = text.split("");
    var result = "";
    var marginTopBox = 17;

    textArray.forEach(letter => {
        for (i = 0; i < letters.length; i++)
        {
            if (letter == letters[i])
            {
                i = i+1;
                result += i.toString();

                var pLetter = document.createElement("p");
                pLetter.innerHTML = `<strong>${letter} -->> ${i}</strong>`;
                resultSection.appendChild(pLetter);
                marginTopBox -= 0.5;
                box.style.marginTop = `${marginTopBox}%`;
            }
        }
    });
    var resultP = document.createElement("p");
    resultP.innerHTML = `<strong>RESULTADO: ${result}</strong>`;
    resultSection.appendChild(resultP);
});

clearButton.addEventListener("click", () => {
    window.location.reload();
});