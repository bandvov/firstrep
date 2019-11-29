import config from '../config.js';

function getVideoByText(text) {
    if (!text) {
        return;
    }
    return fetch(config.searchMovieUrl +text);
}

export default {
    getVideoByText
}