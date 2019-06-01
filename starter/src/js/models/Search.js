import axios from 'axios';
export default class Search {
    constructor(query) {
        this.query = query;
        this.result;
    }

    // AJAX call 
    async getResults(){
        // parameter for the request
        const key = '66d27a235c1233f04619f3d8794dec8f';
        try {
            // HTTP request library called axios
            // Do the ajax call and returns a promisse
            const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
            this.result = res.data.recipes;
        } catch (error){
            alert(error);
        }
    

    }
}


