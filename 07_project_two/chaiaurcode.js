const form = document.querySelector('form');

form.addEventListener('submit' , fucntion(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#results');
    if(height === '' || height <= 0 || isNaN(height)) {
        result.0innerHTML = "please give a valid height";
    } else if(weight === '' || weight <= 0 || isNaN(weight)) {
        result.innerHTML = "please give a valid weight";
    }
    else {
        cosnt bmi = (weight/(height * height) / 100000).toFixed(2);
        result.innerHTML = `<span>${bmi}</span>`
    }
    result.innerHTML = `${height}`;
})