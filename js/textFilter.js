/* 
Filters images by the contents of their caption and alt text.

*/

function myFilter() {
    let caption;

    let userInput = document.getElementById('search');
    let filter = userInput.value.toUpperCase();

    let gallery = document.getElementById('gallery');
    let div = gallery.getElementsByTagName('div');
    let images = gallery.getElementsByTagName('a');
    let thumbnails = gallery.getElementsByTagName('img');

    for (let i=0; i< images.length; i++) {
        caption = images[i].getAttribute('data-caption');
        alt = thumbnails[i].getAttribute('alt');
        console.log(alt);
        if ((caption.toUpperCase().includes(filter)) || (alt.toUpperCase().includes(filter))) {
            div[i].style.display = "";
        } else {
            div[i].style.display = "none";
        }
    }
}