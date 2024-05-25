const menuButton = document.querySelector("#menu-button");
function toggleMenu() {
    const menu = document.querySelector("#menu");
    
  menu.classList.toggle("hide");
}

menuButton.addEventListener("click", toggleMenu);

function closeViewer() {
  div = document.querySelector("#viewer-div");
  div.remove();
}

function viewerTemplate(pic, alt) {
  return `<div id="viewer-div" class="viewer">
    <span class="close"><a onclick="closeViewer()">&times;</></span>
    <img class="viewer-content" id="img01" src="${pic}" alt="${alt}">
    </div>`;
}

function viewHandler(event) {
  
  const srcArray = event.target.src.split("-");
  fullUrl = srcArray[0] + "-full.jpeg";
  //alert(fullUrl);

  htmltoinsert = viewerTemplate(fullUrl, event.target.alt);
  //alert(htmltoinsert);
  element = document.querySelector("body");
  element.insertAdjacentHTML("afterbegin", htmltoinsert)

	// create a variable to hold the element that was clicked on from event.target

	// get the src attribute from that element and 'split' it on the "-"

	// construct the new image file name by adding "-full.jpeg" to the first part of the array from the previous step

	// insert the viewerTemplate into the top of the body element
	// (element.insertAdjacentHTML("afterbegin", htmltoinsert))

	// add a listener to the close button (X) that calls a function called closeViewer when clicked

}

