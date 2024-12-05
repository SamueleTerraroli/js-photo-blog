const displayedAlbum = document.querySelector('.album-section');
const errorMsg = document.querySelector('.error-message');

const api_url='https://jsonplaceholder.typicode.com/photos?_limit=6';
axios.get(api_url)
    .then(res => {
        res.data.forEach(album =>{
            const{title , url} = album;
            displayedAlbum.innerHTML+= `
            <div class="col-12 col-md-6 col-lg-4 d-flex justify-content-center my-5 ">
                    <div class="s-card d-flex flex-column ">
                        <img class="pin" src="assets/img/pin.svg" alt="">

                        <div class="img-section">
                            <img src="${url}" alt="${title}">
                        </div>
                        <div class="text-section">
                            <p class="image-description my-3">${title}</p>

                        </div>

                    </div>
                </div>`;
        });
    })
    .catch(error => { 
        errorMsg.classList.remove('d-none');
        errorMsg.innerHTML = `Errore durante la richiesta API: ${error.message}`;
    });



