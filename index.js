let question1 = 0;
let question2 = 0;

function checkAnswer(answer) {
    const result1 = document.getElementById('result-1');
    const result2 = document.getElementById('result-2');
    const score = document.getElementById('score');
    switch (answer.charAt(0)) {
        case '1':
            if (answer.charAt(1) === 'a') {
                result1.textContent = "ถูกต้อง PIM ย่อมาจาก PIM";
                result1.style.color = 'green';
                question1 = 1
            } else {
                result1.textContent = "Incorrect! Try again.";
                result1.style.color = 'red';
                question1 = 0;
            }
            break;
        case '2':
            if (answer.charAt(1) === 'b') {
                result2.textContent = "ถูกต้อง วิทยาลัยการอาชีพศีขรภูมิตั้งอยู่จังหวัดสุรินทร์";
                result2.style.color = 'green';
                question2 = 1;
            } else {
                result2.textContent = "Incorrect! Try again.";
                result2.style.color = 'red';
                question2 = 0;
            }
            break;

        default:
            break;
    }
    score.textContent = question1 + question2;
}