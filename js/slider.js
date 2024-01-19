(function(){
    const sliders = [...document.querySelectorAll('.event_body')];
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');
    let value;

    buttonNext.addEventListener('click',()=>{
        changePosition(1);
    })

    buttonBefore.addEventListener('click',()=>{
        changePosition(-1);
    })

    const changePosition = (add)=>{
        const currentEvent = document.querySelector('.event_body--show').dataset.id;
        value = Number(currentEvent);
        value += add;

        sliders[Number(currentEvent)-1].classList.remove('event_body--show');
        if(value === sliders.length+1 || value === 0){
            value = value === 0 ? sliders.length  : 1;
        }

        sliders[value-1].classList.add('event_body--show');

    }
})();