function validateDate(){
  let monthValid = document.getElementById('month').value;
  let dayValid = document.getElementById('day').value;
  let yearValid = document.getElementById('year').value;

  if (monthValid <= 0 || monthValid > 12) {
    alert('please enter a valid month');
  }else if (dayValid <= 0 || dayValid > 31) {
    alert('please enter a valid day');
  }else {
    alert('please proceed to enter your gender');
  }
}
