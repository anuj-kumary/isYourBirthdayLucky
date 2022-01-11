const checkBirthdayIsLucky = document.getElementById('checkBirthdayIsLucky');
const dateOfBirth = document.getElementById('date-of-birth');
const luckyNumber = document.getElementById('lucky-number');
const output = document.querySelector('.output');
const alertCrossIcon = document.getElementById('crossIcon');
const alertBox = document.getElementById('alertBox')

const outputPass = `<div class="label">Hurray!!You are a lucky person!</div><img width="100%" height="200px" src = "images/undraw_Party_re_nmwj.svg" alt="image" ">`
const outputFail = `<div class="label">Oops!!Your birthday is not a lucky number!</div><img width="100%" height="200px" src = "images/undraw_walk_dreaming_u58a.svg" alt="image" ">`

alertCrossIcon.addEventListener('click', () => {
    alertBox.style.display = "none";
})

const compareValue = ( sum , luckyNumber ) => {
    if (sum % luckyNumber === 0) {
        output.innerHTML = outputPass
    } else {
        output.innerHTML = outputFail
    }
}


const checkBirthday = () => {
    const dob = dateOfBirth.value;
    const sum = calculateDob(dob)
    compareValue(sum, luckyNumber.value)
}


const calculateDob = (dob) => {
    dob = dob.replaceAll("-", "");
    let sum = 0;
    for (let index = 0; index < dob.length; index++) {
        sum = sum + Number(dob.charAt(index))
    }
    return sum;
}


checkBirthdayIsLucky.addEventListener('click', (e) => {
    e.preventDefault();
    checkBirthday();
});