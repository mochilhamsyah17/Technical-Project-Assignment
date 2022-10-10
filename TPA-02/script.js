let button = document.getElementById('btn');

button.addEventListener('click', () => {
    const height = parseInt(document.getElementById('height').value);
    const weight = parseInt(document.getElementById('weight').value);
    const result = document.getElementById('output');

    let height_status=false, weight_status=false;

    if (height === '' || isNaN(height) || (height<=0)) {
        document.getElementById('height_error').innerHTML = 'Tolong masukkan tinggi badan dengan benar!!';
    } else {
        document.getElementById('height_error').innerHTML = '';
        height_status=true;   
    }

    if (weight === '' || isNaN(weight) || (weight<=0)) {
        document.getElementById('weight_error').innerHTML = 'Tolong masukkan berat badan dengan benar!!';
    } else {
        document.getElementById('weight_error').innerHTML = '';
        weight_status=true;   
    }

    if (height_status && weight_status) {

        const bmi = (weight/((height*height)/10000)).toFixed(2);

        if (bmi < 18.6) {
            result.innerHTML = 'Your BMI is ' + bmi + ' which means your weight is Underweight'
            } else if (bmi >= 18.6 && bmi <= 24.9) {
            result.innerHTML = 'Your BMI is ' + bmi + ' which means your weight is Normal'
            } else if (bmi >= 25 && bmi < 30){
            result.innerHTML = 'Your BMI is ' + bmi + ' which means your weight is Overweight'
            }else{
            result.innerHTML = 'Your BMI is ' + bmi + ' which means your weight is Obese'
            }
        }

    else {
        alert('Form Error!');
        result.innerHTML = '';
    }
});