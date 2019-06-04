import axios from 'axios';
import key from '../config';
// import * as configFile from '../config';

export default class Search {
    constructor(query) {
        this.query = query;
        this.result;
    }

    // AJAX call 
    async getResults(){
        try {
            // HTTP request library called axios
            // Do the ajax call and returns a promisse
            const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
            // console.log(res);
            this.result = res.data.recipes;
        } catch (error){
            alert(error);
        }
    }
}


