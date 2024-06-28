import recipes from './recipes.mjs';

function random(num) {
	return Math.floor(Math.random() * num);
}

function getRandomListEntry(list) {
	const listLength = list.length;
	const randomNum = random(listLength);
	return list[randomNum];
}

// to test
console.log(getRandomListEntry(recipes));

function recipeTemplate(recipe) {
	return `
         <article class="recipe">
            <img class="photo" src="${recipe.image}" alt="Example Recipe">
            <div>
                <div style="border: 1px solid black; display: inline-block; padding: 4px;">
                    ${tagsTemplate(recipe.tags)}
                </div>
            <h2>${recipe.name}</h2>
            ${ratingTemplate(recipe.rating)}
            <p class="description">${recipe.description}</p>
            </div>
        </article>
    `;
}

function tagsTemplate(tags) {
    let html = "";
    let x = 0;
    for (let tag of tags) {
        if (x > 0) html += ", ";
        html += `${tag}`;
        x++;
    }
    return html;
}

function ratingTemplate(rating) {
    let html = `<div class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">`;
    for (let i = 0; i < rating; i++) {
        html += `<span aria-hidden="true" class="icon-star">⭐</span>`;
    }
    for (let i = rating; i < 5; i++) {
        html += `<span aria-hidden="true" class="icon-star">☆</span>`;
    }
    html += `</div>`;
    return html;
}


function renderRecipes(recipeList) {
	// get the element we will output the recipes into
    
    //let section = document.querySelector("#section");
    let section = document.getElementById("recipes");
    //alert(section);
    
	// use the recipeTemplate function to transform our recipe objects into recipe HTML strings
    //let recipe = getRandomListEntry(recipes);
    let html = recipeTemplate(recipeList[0]);

	// Set the HTML strings as the innerHTML of our output element.
    //alert(html);
    section.innerHTML = html;
}

function init() {
    const recipe = getRandomListEntry(recipes)
    // render the recipe with renderRecipes.
    renderRecipes([recipe]);
}

init();
//let recipe = getRandomListEntry(recipes);
//let html = recipeTemplate(recipe)
//alert(html);