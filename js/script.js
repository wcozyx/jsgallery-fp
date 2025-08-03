function upDate(previewPic){
    document.getElementById('image').style.backgroundImage = "url('"+ previewPic.src +"')";
    document.getElementById('image').innerHTML = previewPic.alt;  
	}

function unDo(){
    document.getElementById('image').style.backgroundImage = "url('')";
    document.getElementById('image').innerHTML = 'Hover over an image below to display here.';	
	}

function selectImages(){
    currentImages = document.querySelectorAll('img');
    for (let i = 0; i < currentImages.length; i++) {
        console.log('Image ' + i);
        currentImages[i].setAttribute ("tabindex","0");
    }
   }