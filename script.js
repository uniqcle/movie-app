const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";

async function getMovies(){
    const resp = await fetch(APIURL); 
    const data = await resp.json(); 

    console.log( data )

        data.results.forEach(movie => {
            const img = document.createElement('img')
            img.src = IMGPATH + movie.poster_path; 
            document.body.appendChild(img); 
        })
    return data; 
}    

getMovies(); 
    


