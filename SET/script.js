///////////////////////////task_1
let set_task1 = new Set;
set_task1.add(1);
set_task1.add(2);
set_task1.add(3);
set_task1.add(3); 
console.log(set_task1); 

let set2_task1 = new Set([1, 2, 3, 3, 4, 4, 5]);
console.log(set2_task1); 

///////////////////////////task_2
let set_task2 = new Set;
set_task2.add(1);
set_task2.add(2);
set_task2.add(3);

console.log(set_task2); 

set_task2.add(2);
set_task2.add(2);
set_task2.add(2);

console.log(set_task2); 

///////////////////////////task_3
let set_task3 = new Set;
set_task3.add(1);
set_task3.add(2);
set_task3.add(3);

console.log(set_task3);
console.log(set_task3.has(3));
console.log(set_task3.has(4));

///////////////////////////task_3.1
let set_task3_1 = new Set;
let c = 0;

set_task3_1.add(1);
set_task3_1.add(2);
set_task3_1.add(3);

for (let elem of set_task3_1) {
    c += elem;
}

console.log(c);

///////////////////////////task_4
let set_task4 = new Set([1, 2, 3]);
let arr_4 = [...set_task4];
console.log(arr_4);

let set2_task4 = new Set([4, 5, 6]);
let arr2_4 = Array.from(set2_task4);
console.log(arr2_4);

///////////////////////////task_5
let arr_5 = [1, 2, 3];
let set_5 = new Set(arr);

///////////////////////////task_6
function delDuplicates(arr) {
    return [...new Set(arr)];
}
    
let arr = [1, 2, 2, 3, 3, 4, 5];
let result = delDuplicates(arr);
console.log(result);

///////////////////////////task_6
document.addEventListener('DOMContentLoaded', () => {
    let clickedParagraphs = new Set();

    let container = document.querySelector('.container');
    container.addEventListener('click', (event) => {
      if (event.target.tagName === 'P') {
        clickedParagraphs.add(event.target);
      }
    });

    let button = document.querySelector('button');
    button.addEventListener('click', () => {
      clickedParagraphs.forEach(paragraph => {
        paragraph.textContent += '!';
      });
    });
  });


