//To toggle symptoms
var toggleButton = document.getElementById('toggle-symptoms');
var symptoms = document.getElementById('symptoms');
toggleButton.addEventListener('click', function () {
    if (symptoms.style.display === 'none') {
        symptoms.style.display = 'block';
    }
    else {
        symptoms.style.display = 'none';
    }
});
//To toggle causes
var ToggleButton = document.getElementById('toggle-causes');
var causes = document.getElementById('causes');
ToggleButton.addEventListener('click', function () {
    if (causes.style.display === 'none') {
        causes.style.display = 'block';
    }
    else {
        causes.style.display = 'none';
    }
});
//To toggle treatment
var Togglebutton = document.getElementById('toggle-treatment');
var treatment = document.getElementById('treatment');
Togglebutton.addEventListener('click', function () {
    if (treatment.style.display === 'none') {
        treatment.style.display = 'block';
    }
    else {
        treatment.style.display = 'none';
    }
});
