const singins = document.querySelectorAll('.singin');

 //loop through all dropdown elements

 singins.forEach(singin => {

    const select = singin.querySelector('.select');
    const caret = singin.querySelector('.caret');
    const profile = singin.querySelector('.profile');
    const options = singin.querySelector('.profile li');
    const selected = singin.querySelector('.selected');


    select.addEventListener('click', () => {
        
        select.classList.toggle('select-clicked');

        caret.classList.toggle('caret-rotate');

        profile.classList.toggle('menu-open');

    });

    options.forEach(option => {
        
        option.addEventListener('click', () => {

            selected.innerText = option.innerText;

            select.classList.remove('select-clicked');

            caret.classList.remove('caret-rotate');

            profile.classList.remove('profile-open');

            options.forEach(option => {
                option.classList.remove('active');
            });

            option.classList.add('active');
        });
    });
 });