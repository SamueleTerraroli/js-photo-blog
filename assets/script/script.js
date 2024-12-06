const displayedAlbum = document.querySelector('.album-section');
const errorMsg = document.querySelector('.error-message');
const overlay = document.getElementById('overlay')

errorMsg.innerHTML = '';

const api_url='https://jsonplaceholder.typicode.com/photos?_limit=6';
axios.get(api_url)
    .then(res => {
        res.data.forEach(album =>{
            const{title , url} = album;
            printAlbum(title,url);
            
        });
        clickedCard();
    })
    .catch(error => { 
        errorMsg.classList.remove('d-none');
        errorMsg.innerHTML = `Errore durante la richiesta API: ${error.message}`;
    });

function printAlbum(title , url){
    const capitalizedTitle = capitalizeFirstLetter(title);
    const cardPrinted = 
        `
                <div class="col-12 col-md-6 col-lg-4 d-flex justify-content-center my-5 ">
                    <div class="s-card d-flex flex-column ">
                        <img class="pin" src="assets/img/pin.svg" alt="">

                        <div class="img-section">
                            <img src="${url}" alt="${capitalizedTitle}">
                        </div>
                        <div class="text-section">
                            <p class="image-description my-3 parisienne-regular">${capitalizedTitle}</p>

                        </div>

                    </div>
                </div>
        `;
    
    displayedAlbum.innerHTML+= cardPrinted;

    

}

function capitalizeFirstLetter(title){
    return title.charAt(0).toUpperCase() + title.slice(1);
}

function clickedCard() {
    const cards = document.querySelectorAll ('.s-card');
    cards.forEach(card =>{
        card.addEventListener('click' , ()=>{
            overlay.classList.remove('d-none')
        });
    });
}



