/*
                <div class="col-12 col-md-6 col-lg-4 d-flex justify-content-center my-5 ">
                    <div class="s-card d-flex flex-column ">
                        <img class="pin" src="assets/img/pin.svg" alt="">

                        <div class="img-section">
                            <img src="assets/img/400.svg" alt="">
                        </div>
                        <div class="text-section">
                            <p class="image-description my-3"></p>

                        </div>

                    </div>
                </div>
*/

const api_url='https://jsonplaceholder.typicode.com/photos?_limit=6';
axios.get(api_url)
    .then(res => {
    console.log(res.data);
    
})

