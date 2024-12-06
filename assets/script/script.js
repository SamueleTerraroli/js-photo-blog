const displayedAlbum = document.querySelector('.album-section');
const errorMsg = document.querySelector('.error-message');
const overlay = document.getElementById('overlay');
const zoomedCard = document.getElementById('enlarged-card');


errorMsg.innerHTML = '';

const api_url='https://jsonplaceholder.typicode.com/photos?_limit=6';
axios.get(api_url)
    .then(res => {
        res.data.forEach(album =>{
            const{title , url} = album;
            printAlbum(title,url);
            
        });
        addClickEventToCards(); //aggiungo la funzione clicked card a tutte le card
    })
    .catch(error => { 
        errorMsg.classList.remove('d-none');
        errorMsg.innerHTML = `Errore durante la richiesta API: ${error.message}`;
    });
document.querySelector('.close').addEventListener('click', () =>{
    overlay.classList.add('d-none');
});



//FUNCTIONS


//separo le funzioni di creazione e di printing per poter usare la stessa card anche per l'overlay
function printAlbum(title , url){
    const capitalizedTitle = capitalizeFirstLetter(title);
    const cardPrinted = createCard(capitalizedTitle, url); 
        
    displayedAlbum.innerHTML+= 
        `
            <div class="col-12 col-md-6 col-lg-4 d-flex justify-content-center my-5 ">
                    ${cardPrinted}
            </div>
        `;
    

    

}

function createCard(title, url){
    return `
                    <div class="s-card d-flex flex-column ">
                        <img class="pin" src="assets/img/pin.svg" alt="">

                        <div class="img-section">
                            <img src="${url}" alt="${title}">
                        </div>
                        <div class="text-section">
                            <p class="image-description my-3 parisienne-regular">${title}</p>

                        </div>

                    </div>
            `;
}

function capitalizeFirstLetter(title){
    return title.charAt(0).toUpperCase() + title.slice(1);
}

function addClickEventToCards() {
    const cards = document.querySelectorAll ('.s-card');
    cards.forEach(card =>{
        card.addEventListener('click' , ()=>{
            const title = card.querySelector('.image-description').textContent;
            const url = card.querySelector('.img-section img').src;
            showZoomedCard (title,url);
            
        });
    });
    
}

function showZoomedCard(title,url){
    const capitalizedTitle = capitalizeFirstLetter(title);
    zoomedCard.innerHTML = createCard(capitalizedTitle, url);
    overlay.classList.remove('d-none');
    zoomedCard.querySelector('img.pin').classList.add('d-none')

}



