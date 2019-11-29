import MovieLIst from './components/movie-list.js';

import movieService from './components/movies-service.js';

let input = document.querySelector('.search-input');
input.addEventListener('input',function(e){
let searchText = e.target.value;
movieService.getVideoByText(searchText).then((r)=>r.json()).then((result)=>console.log(result));

},false);