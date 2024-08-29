const BASE_URL = 'https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1';

const catBtn = document.getElementById('change-cat');


const getCats = async() => {
    
        const data = await fetch(BASE_URL)
            .then(res => res.json())
            .catch(e=>console.log(e.message));
           
        
        return data.url;
   
    
};

const loadImg = async () => {
    const catImg = document.getElementById('cat');
    catImg.src = await getCats();
};

catBtn.addEventListener('click', loadImg);

//loadImg();
