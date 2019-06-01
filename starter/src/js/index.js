// Global App Controller
// import string from './models/Search';
// 
// import {add, mul, ID} from './views/searchView';
// 
// console.log(`Using imported functions! ${add(ID, 2)} and ${mul(ID, 2)}. ${string}`);

// 66d27a235c1233f04619f3d8794dec8f
// https://www.food2fork.com/api/search

import Search from './models/Search';

// Global state of the app
/* - Search Object
 * - Current recipe object
 * - Shopping list object 
 * - Liked Object 
 */
const state = {

}

const controlSearch = async () => {
    // 1) Get query from view
    const query = 'pizza'; //TODO

    if(query){
        // 2) New Search Object and add it to state 
        state.search = new Search(query);

        // 3) Prepare UI for the results

        // 4) Search for recipes 
        // Returns a promisse
        await state.search.getResults();

        // 5) Render the results in the UI
        console.log(state.search.result);
    }
};

document.querySelector('.search').addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});

const search = new Search('pizza');
console.log(search);
search.getResults();