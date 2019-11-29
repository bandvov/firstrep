import { movie } from './movie.js';

export default class MovieLIst {
    constructor(data) {
        this.data = data;
    }
    drawToDom(selector) {
        selector.innerHTML = this.movieLIst;
    }
    renderMovies() {
        this.fragment = document.createDocumentFragment();
        data.forEach((elem)=>{
            this.fragment.appendChild(movie(elem));
        })
    }
}