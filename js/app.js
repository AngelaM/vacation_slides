window.addEventListener('load', function() {
    baguetteBox.run('.gallery');
  });

let imageInfo = [
  ['Gallatin Range','The Gallatin Range seen behind a valley near the Gardner River', 'snow-dotted mountain range in the distance with green hills and calm river in foreground'],
  ['Roaring Mountain','Fumaroles hiss steam on Roaring Mountain', 'rocky side of mountain with numerous steam vents'],
  ['Grand Tetons','Mountains in Grand Teton National Park', 'snow-capped mountains with cloudy blue sky above them'],
  ['Jenny Lake','Mountains seen behind Jenny Lake in Grand Teton National Park', 'snow-capped mountains behind calm grey lake'],
  ['Roosevelt Arch','Roosevelt Arch stands near the North Entrance in Gardiner', 'stone archway over roadway with incription reading For the Benefit and Enjoyment of the People'],
  ['Lamar Valley','The sun sets over the Lamar Valley', 'orange sunset tinges left half of blue sky over green and yellow meadow with wooden walkway'],
  ['Grand Canyon','The Grand Canyon of the Yellowstone as seen from rocky overlook', 'river runs through deep valley with trees and rocks in foreground'],
  ['Morning Glory','Morning Glory hot spring','pool of yellow water with deep area of blue and green waters at center'],
  ['Grand Prismatic','Grand Prismatic Spring steams in the chill morning air','orange foreground with bright blue steaming spring and tree-covered hill in background'],
  ['Mammoth Springs','Overlooking Mammoth Springs terraces','large white stone terraces with a background of tree-covered green hills'],
  ['Norris Basin','Steaming riverbank in the Norris Geyser Basin','steaming rocky riverbank at left with dark river at right and background of trees'],
  ['Grazing Bison','Bison graze in the Lamar Valley','bright blue sky over green hills dotted with a few grazing buffalo']
];

function displayImages() {
  let html = "";
  for (let i=0; i<imageInfo.length; i++) {

    html += `<div class="image"><a id="test" href="images/pic${i+1}.jpg" 
    data-caption="${imageInfo[i][1]}">${imageInfo[i][0]}</a>
    <img src="images/thumbnails/thumbnail${i+1}.jpg" 
    alt="${imageInfo[i][2]}"></div>`

  }
  document.querySelector(".gallery").innerHTML = html;
}

displayImages();