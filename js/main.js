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

function generateName(){
  var gender = document.querySelector('input[type = "radio"]:checked').value;
  var female = getElementById('female');
  var male = getElementById('male')
  var birthDay = function(month, day, year) {
    var month = document.getElementById('month').value;
    var day = document.getElementById('day').value;
    var year = document.getElementById('year').value;

    var yy = parseInt(year.slice(-2));
    var mm = parseInt(month);
    var dd = parseInt(day);
    var cc = parseInt(year.slice(0,2));
    var date = (((cc/4) -2*cc-1) + ((5*yy/4)) + ((26*(mm+1)/10)) + dd) %7
    var dDay = Math.ceil(date);
  }


}
