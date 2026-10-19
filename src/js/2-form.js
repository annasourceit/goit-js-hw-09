
const formState = {
    email: "",
    message: "",
};

const form = document.querySelector('.feedback-form');
const input = document.querySelector('.feedback-form-input');
const textarea = document.querySelector('.feedback-form-textarea');

//localStorage.removeItem('feedback-form-state');
const feedbackFormState = localStorage.getItem('feedback-form-state');
const currentSettings = JSON.parse(feedbackFormState);

if (feedbackFormState) {

    input.value = currentSettings.email;
    textarea.value = currentSettings.message;
};

form.addEventListener('input', (event) => {

    const formData = new FormData(form);
  
    const formState = {
        email: formData.get('email').trim(),
        message: formData.get('message').trim(),
    };
    
    localStorage.setItem('feedback-form-state', JSON.stringify(formState));
});


form.addEventListener('submit', (event) => {

    event.preventDefault();

    const formData = new FormData(form);
    
    const email = formData.get('email').trim();
    const message = formData.get('message').trim();

    if (email && message) {
        
        const formState = {
            email: email,
            message: message,
        };
        console.log(formState); 
        localStorage.removeItem('feedback-form-state');
    } else {
        alert('Fill please all fields');
    }
    
    form.reset();
});