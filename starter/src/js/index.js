// Global App Controller
// import string from './models/Search';
// 
// import {add, mul, ID} from './views/searchView';
// 
// console.log(`Using imported functions! ${add(ID, 2)} and ${mul(ID, 2)}. ${string}`);

// 66d27a235c1233f04619f3d8794dec8f
// https://www.food2fork.com/api/search

import Search from './models/Search';
import Recipe from './models/Recipe';
import * as searchView from './views/searchView'; 
import {element, renderLoader, clearLoader} from './views/base';

// Global state of the app
/* - Search Object
 * - Current recipe object
 * - Shopping list object 
 * - Liked Object 
 */
const state = {

}

/*  
*
*
SEARCH CONTROLLER
*
*
*/

const controlSearch = async () => {
    // 1) Get query from view
    const query = searchView.getInput();

    if(query){
        // 2) New Search Object and add it to state 
        state.search = new Search(query);

        // 3) Prepare UI for the results
        searchView.clearInput();
        searchView.clearResults();
        renderLoader(element.searchRes);

        try{
            // 4) Search for recipes 
            // Returns a promisse
            await state.search.getResults();

            // 5) Render the results in the UI
            clearLoader();
            searchView.renderResults(state.search.result);
        }catch(err){
            alert('Something went wrong...');
            clearLoader();
        }
    }
};

element.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});

element.searchResPages.addEventListener('click', e => {
    const btn = e.target.closest('.btn-inline');
    if(btn){
        const goToPage = parseInt(btn.dataset.goto, 10);
        searchView.clearResults();
        searchView.renderResults(state.search.result, goToPage);
    }
});

/*  
*
*
RECIPE CONTROLLER
*
*
*/

const controlRecipe = async () => {
    // hash code of the recipe, get id from url 
    const id = window.location.hash.replace('#', '');
    console.log(id);

    if(id){
        // Prepare UI for changes

        // Create a new Recipe object
        state.recipe = new Recipe(id);

        try{
            // Get recipe data
            await state.recipe.getRecipe();

            // Calculate servings and time
            state.recipe.calcTime();
            state.recipe.calcServings();

            // Render recipe
            console.log(state.recipe);
        }catch(error){
            alert('Error rending the recipe...');
        }
        
    }
}

// window.addEventListener('hashchange', controlRecipe);
// window.addEventListener('load', controlRecipe);
['hashchange', 'load'].forEach(event => window.addEventListener(event, controlRecipe));