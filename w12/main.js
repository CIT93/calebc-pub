const FORM = document.getElementById("form");
const EXERCISE = document.getElementById("exercise");
const REPS = document.getElementById("reps");
const MINUTES = document.getElementById("minutes");
const OUTPUT = document.getElementById("output");
let DATA = [];
const OUTPUT2 = document.getElementById("output2");
const OUTPUT3 = document.getElementById("output3");
const OUTPUT4 = document.getElementById("output4");

function delayText(callback) {
    OUTPUT.textContent = "GO GO GO! YOU GOT THIS!"
    setTimeout(callback, 2000)
}
function delayText2(callback) {
    OUTPUT2.textContent = "ANND STOP! Calculating your results..."
    setTimeout(callback, 2000)
}
function delayText3() {
    OUTPUT3.textContent = "Here's a pizza 🍕 for working out"
}
function dOutput() {
    OUTPUT4.innerHTML = '';
    DATA.forEach(function(item) {
        const eDiv = document.createElement('p');
        eDiv.textContent = `Also here what I got, Excercie: ${item.exercise}, Reps: ${item.reps}, Seconds: ${item.minutes} (ms)`
        OUTPUT4.appendChild(eDiv);
    })
}

FORM.addEventListener('submit', function(e) {
    e.preventDefault();
    const eValue = EXERCISE.value;
    const rValue = REPS.value;
    const mValue = parseInt(MINUTES.value);
    DATA.push({
        exercise: eValue,
        reps: rValue,
        minutes: mValue
    })

    delayText(() => {
        delayText2(() => {
            dOutput();
        } );

        setTimeout(() => {

            setTimeout(()=> {
                OUTPUT.textContent='';
                OUTPUT.style.display='block';
                OUTPUT2.textContent='';
                OUTPUT2.style.display='block';
            }, mValue)
            delayText3();
        }, mValue)
    });
})
