
//A képet így húzzuk be
let data = {
    photo: 'puppies1.png',
    title: 'My title',
    description: 'kiskutya'
  };
  
  $('#photo').attr('src', data.photo);

  //Az aktuális fotó kiválasztva
  let currentPhoto = 0;
let imagesData = [...];
$('#photo').attr('src', imagesData[currentPhoto].photo);