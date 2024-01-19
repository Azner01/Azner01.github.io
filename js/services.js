(function(){
    const titleServices = [...document.querySelectorAll('.services_title')];
    console.log(titleServices)
    titleServices.forEach(services =>{
        services.addEventListener('click', ()=>{
            let height = 0;
            let answer = services.nextElementSibling;
            let addPadding = services.parentElement.parentElement;

            addPadding.classList.toggle('services_padding--add');
            services.children[0].classList.toggle('services_arrow--rotate');

            if(answer.clientHeight === 0){
                height = answer.scrollHeight;
            }

            answer.style.height = `${height}px`;
        })
    });
})();