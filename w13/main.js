const FORM = document.getElementById("form");
const EXERCISE = document.getElementById("exercise");
const REPS = document.getElementById("reps");
const MINUTES = document.getElementById("minutes");
const OUTPUT = document.getElementById("output");
let DATA = [];
const OUTPUT2 = document.getElementById("output2");
const OUTPUT3 = document.getElementById("output3");
const OUTPUT4 = document.getElementById("output4");

//Can maybe do function, promise, setTimeout, resolve/reject, textContent(in resolve/reject), time
//Also maybe need a function for .catch specifcally

function delayText() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(OUTPUT.textContent = "GO GO GO! YOU GOT THIS!")
        },2000)
    })
}
function delayText2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(OUTPUT2.textContent = "ANND STOP! Calculating your results...")
        }, 2000)
    })
}
function delayText3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(OUTPUT3.textContent = "Here's a pizza 🍕 for working out") 
        }, 2000)
    })
}
function dOutput() {
    return new Promise((resolve,reject) => {
        OUTPUT4.innerHTML = '';
    DATA.forEach(function(item) {
        const eDiv = document.createElement('p');
        setTimeout(() => {
            resolve(eDiv.textContent = `Also here what I got, Excercie: ${item.exercise}, Reps: ${item.reps}, Seconds: ${item.minutes} (ms)`)
        })
        OUTPUT4.appendChild(eDiv);
    })
    })
}
function hideDelay() {
    OUTPUT.textContent='';
    OUTPUT.style.display='block';
    OUTPUT2.textContent='';
    OUTPUT2.style.display='block';
}
function onError(error) {
    console.log(`HEY GOT AN ERROR! ${error}`)
}
//Implement promises and .catch (for errors) into the code 
//I would assume need to do something with my functions by adding a promise and
//add .then and .catch into my addEventListener in order for the code to work
//The promise will have to go into either the functions or the EventListener
//For the program to work properly...

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

    delayText()
    .then(delayText2)
    .then(delayText3)
    .then(hideDelay)
    .then(dOutput)
    .catch(onError)

    //I think this is the Pyramid of Doom
    // delayText(() => {
    //     delayText2(() => {
    //         dOutput();
    //     } );

    //     setTimeout(() => {

    //         setTimeout(()=> {
    //             OUTPUT.textContent='';
    //             OUTPUT.style.display='block';
    //             OUTPUT2.textContent='';
    //             OUTPUT2.style.display='block';
    //         }, mValue)
    //         delayText3();
    //     }, mValue)
    // });
})
