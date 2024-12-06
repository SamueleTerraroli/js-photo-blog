const displayedAlbum = document.querySelector('.album-section');
const errorMsg = document.querySelector('.error-message');

errorMsg.innerHTML = '';

const api_url='https://jsonplaceholder.typicode.com/photos?_limit=6';
axios.get(api_url)
    .then(res => {
        res.data.forEach(album =>{
            const{title , url} = album;
            printAlbum(title,url);
            
        });
    })
    .catch(error => { 
        errorMsg.classList.remove('d-none');
        errorMsg.innerHTML = `Errore durante la richiesta API: ${error.message}`;
    });

function printAlbum(title , url){
    const capitalizedTitle = capitalizeFirstLetter(title);
    displayedAlbum.innerHTML+= `
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
            </div>`;
}

function capitalizeFirstLetter(title){
    return title.charAt(0).toUpperCase() + title.slice(1);
}


