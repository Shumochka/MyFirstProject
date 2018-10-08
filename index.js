function createGallery ( event ) {

  event.target.style.display = 'none';

  if ( !pictures ) return;

  var gallery = document.createElement ( 'section' );
  document.body.appendChild ( gallery );
  gallery.style.border = "double 15px red";
  gallery.style.boxShadow = "10px 10px 20px #11111";
  gallery.style.background = "#ffd618";

  for ( var i = 0; i < pictures.length; i++ ) {
    var img = document.createElement ( 'img' );
    img.src = pictures [i];

    img.className = "ico";
    gallery.appendChild ( img );
    img.onclick = function ( event ) {
      if ( event.target.className == "ico" )
           event.target.className = "full_image";
      else event.target.className = "ico";
    }
  }
}

var pictures = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4svqMrIPBCZPuDCYuFP8ume_9ag72ik4-MPOD2uXV7s1ToYjI",
  "http://molloko.com/wp-content/uploads/2014/10/business-autumn-7.jpg",
  "https://scontent-atl3-1.cdninstagram.com/vp/1b05876c571272084882a0ce231e79fe/5C3E4C27/t51.2885-15/e35/23098758_1662154587163640_4426151703347200000_n.jpg",
  "https://zabavnik.club/wp-content/uploads/2018/07/osen_i_kofe_12_20070314.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpGAGg-xx20KIQmoEZ-974k-iVdGkb5K6xbYibpvxeDQ3sOOBw",
  "https://i.pinimg.com/236x/85/bb/81/85bb819d91578a38a9524029cdc40f66.jpg",
  "https://i.pinimg.com/474x/99/f0/c2/99f0c29d9bbe0c3fe165e45b4cf03d21--health-desserts-easy-desserts.jpg",
  "https://st3.depositphotos.com/4431055/13306/i/450/depositphotos_133066698-stock-photo-hot-coffee-book-and-autumn.jpg",
  "https://st.depositphotos.com/1642625/3387/i/950/depositphotos_33870839-stock-photo-cozy-mug-of-coffee-on.jpg",
  "http://tmstudia.ru/site/wp-content/uploads/2018/09/9782niceimage.ru-72821.jpg"
];
