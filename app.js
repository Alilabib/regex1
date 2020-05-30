// var reg = /[a-z]ig/ //This Means Form a to z  and in global file and incase sensetive

// var reg2 = new RegExp(['a - z'], "ig");

const inputs = document.querySelectorAll('input');

const patterns = {
    username: /^[a-z\d\s]{5,12}$/i,
    telephone: /^\d{11}$/,
    password: /^[\w/d@-]{8,12}$/i,
    slug: /^[\a-z\d-]{8,20}$/,
    email: /^([a-z\d\.-]+)@([a-z\d-]+).([a-z]{2,8})(\.[a-z]{2,8})?$/,
}

function validate(field, pattern) {
    console.log(pattern.test(field.value));
    if (pattern.test(field.value)) {
        field.className = 'valid';
    } else {
        field.className = 'invalid';
    }
}

inputs.forEach((input) => {
    input.addEventListener("keyup", (e) => {
        // console.log(e.target.attributes.name.value);
        // console.log(e.target.value);
        console.log(e.target.attributes.name.value);
        validate(e.target, patterns[e.target.attributes.name.value]);
    })
});