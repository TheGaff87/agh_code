const imgDiv = document.getElementById('img')

function getImages() {
    document.getElementsByTagName('button')[0].style.display = 'none';
    fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=2000&page=1&api_key=e6qeMVwVAobScq3QGBBCsWdk4haOxrTmcBfB3RPI')
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      displayImages(myJson.photos);
    });
}

function displayImages(images) {

    //Should definitely be divided into smaller functions; ran out of time

    let store = [];

    for (let i = 0; i <= images.length; i++) {
        if (images[i] != undefined) {
        let newImg = new Image(500,500);
        newImg.src = images[i]['img_src'];
        newImg.alt = images[i]['id'];
        store.push(newImg);
        }
  }
  
  //div to display images one at a time
  let displayDiv = document.createElement('div');
  displayDiv.id = 'display_div';
  imgDiv.appendChild(displayDiv);

  //current img and counter; there are probably better implementations but this was my reasonably quick one; append first img to display div
  let currentImg = store[0];
  let counter = 0;
  displayDiv = document.getElementById('display_div');
  displayDiv.appendChild(currentImg);


  const nextBtn = document.createElement('button');
  nextBtn.id = 'next_btn';
  nextBtn.innerHTML = 'Next Photo';
  imgDiv.appendChild(nextBtn);

  //navigates through all images using counter above to match to images in store array
  imgDiv.addEventListener('click', function() {
      if (event.target.matches('#next_btn')) {
        counter += 1;
          if (counter == 25) {
              currentImg = store[0];
              displayDiv.innerHTML = '';
              displayDiv.appendChild(currentImg);
              counter = 0;
          }else{
              currentImg = store[counter];
              displayDiv.innerHTML = '';
              displayDiv.appendChild(currentImg);
          }
      }
  })

}