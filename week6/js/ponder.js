function convert(grade) {
    switch (grade){
        case 'A':
            points = 4;
            break;
        case 'B':
            points = 3;
            break;
        case 'C':
            points = 2;
            break;
        case 'D':
            points = 1;
            break;
        case 'F':
            points = 0;
            break;
        default:
            alert('not a valid grade');
    }
    return points;
}

const words = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
          
const students = [
    {last: 'Andrus', first: 'Aaron', grade: 'A'},
    {last: 'Masa', first:'Manny', grade: 'B'},
    {last: 'Tanda', first: 'Tamanda', grade: 'D'}
];

// Keep the HTML list empty 
// create js code to put in the elements
// Use all given .js code in the ponder

let furitHtml = '';
words.forEach((fruit) => {
    furitHtml += `<li>${fruit}</li>`;
});

document.querySelector('.fruits').innerHTML = furitHtml;


let studentHtml = '';

students.forEach((student) => {
        studentHtml += `
        <h2>
            ${student.first} ${student.last}, Grade:${student.grade}, Point: ${convert(student.grade)}
        </h2>`;
});

document.querySelector(".studentList").innerHTML = studentHtml;

// finish it in the future: user input grade adder
// if (studentList) {
//     studentList.innerHTML = studentHtml;

//     // Add event listeners
//     document.querySelectorAll('.grade-input').forEach(input => {
//         input.addEventListener('input', (e) => {
//             const grade = e.target.value.toUpperCase();
//             e.target.value = grade; // Auto-uppercase the input visually
            
//             const index = e.target.getAttribute('data-index');
//             const pointsDisplay = document.getElementById(`points-${index}`);
            
//             if (['A', 'B', 'C', 'D', 'F'].includes(grade)) {
//                 const points = convert(grade);
//                 pointsDisplay.textContent = ` - Points: ${points}`;
//             } else if (grade === '') {
//                 pointsDisplay.textContent = '';
//             } else {
//                 pointsDisplay.textContent = ' - Invalid Grade';
//             }
//         });
//     });
// }
