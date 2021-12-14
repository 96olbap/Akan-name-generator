let btnValidate = document.querySelector('button');
let result = document.querySelector('p');

let inputMonth = document.querySelector('#month');
let inputDay = document.querySelector('#day');
let inputYear  = document.querySelector('#year');

btnValidate.addEventListener('click', () =>{
  let month = inputMonth.value;
  let day = inputDay.value;
  let year = inputYear.value;
  result.innerText = moment('${month}/${day}/${year}','MM/DD/YYYY', true).isValid();
});
