//To toggle symptoms
const toggleButton = document.getElementById('toggle-symptoms') as HTMLButtonElement
const symptoms = document.getElementById('symptoms') as HTMLElement

toggleButton.addEventListener('click', ()=> {
    if(symptoms.style.display === 'none') {
        symptoms.style.display = 'block'
    } else {
        symptoms.style.display = 'none'
    }
});

//To toggle causes
const ToggleButton = document.getElementById('toggle-causes') as HTMLButtonElement
const causes = document.getElementById('causes') as HTMLElement

ToggleButton.addEventListener('click', ()=> {
    if(causes.style.display === 'none') {
        causes.style.display = 'block'
    } else {
        causes.style.display = 'none'
    }
});

//To toggle treatment
const Togglebutton = document.getElementById('toggle-treatment') as HTMLButtonElement
const treatment = document.getElementById('treatment') as HTMLElement

Togglebutton.addEventListener('click', ()=> {
    if(treatment.style.display === 'none') {
        treatment.style.display = 'block'
    } else {
        treatment.style.display = 'none'
    }
});