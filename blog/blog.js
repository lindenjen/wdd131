const articles = [
	{
		id: 1,
		title: 'Septimus Heap Book One: Magyk',
		date: 'July 5, 2022',
		description:
			'If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.',
		imgSrc: 'Magkycover2.jpg',
		imgAlt: 'Book cover for Septimus Heap 1',
		ages: '10-14',
		genre: 'Fantasy',
		stars: '****'
	},
	{
		id: 2,
		title: 'Magnus Chase Book One: Sword of Summer',
		date: 'December 12, 2021',
		description:
			'The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.',
		imgSrc:
			'MagnusChase.jpg',
		imgAlt: 'Book cover for Magnus Chase 1',
		ages: '12-16',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐'
	}
]

function generateArticles() {
    const container = document.getElementById("articles"); 

 
    articles.forEach(article => {
       
        const articleDiv = document.createElement("div");
        articleDiv.classList.add("article");

        const articleTitle = document.createElement("h2");
        articleTitle.textContent = article.title;

        const articleDate = document.createElement("p");
        articleDate.textContent = article.date;

        const articleImage = document.createElement("img");
        articleImage.src = article.image;
        articleImage.alt = article.title;

        const articleDescription = document.createElement("p");
        articleDescription.textContent = article.description;

        
        articleDiv.appendChild(articleTitle);
        articleDiv.appendChild(articleDate);
        articleDiv.appendChild(articleImage);
        articleDiv.appendChild(articleDescription);

        container.appendChild(articleDiv);
    });
}


window.addEventListener("load", generateArticles);