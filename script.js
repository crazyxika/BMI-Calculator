const form = document.querySelector('form');

form.addEventListener('submit', function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if(height === 0 || height<0 || isNaN(height)){
        results.innerHTML = "Please give a valid Height"
    }

    else if(weight === 0 || weight<0 || isNaN(weight)){
        results.innerHTML = "Please give a valid Weight"
    }

    else {
        const BMI =  (weight / ((height*height)/10000)).toFixed(2);
        
        if(BMI< 18.6){
            results.innerHTML = `<span> ${BMI} UNDER WEIGHT </span>`;
        }

        else if(BMI > 24.9){
            results.innerHTML = `<span> ${BMI} OVER WEIGHT </span>`;
        }

        else{
            results.innerHTML = `<span> ${BMI} NORMAL WEIGHT </span>`;
        }
    }
});
