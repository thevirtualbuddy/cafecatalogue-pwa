const container = document.querySelector(".container")

const cafes = [
  { name: "Bread Cafe", image: "images/bread.jpg", link: "https://www.instagram.com/cakesofbreadcafe_shillong/" },
  { name: "Cafe Shillong", image: "images/cafeshillong.jpg", link: "http://www.cafeshillongbnb.com/"}, 
  { name: "Chill Out Cafe", image: "images/chillout.jpg" , link: "https://website--398253357671881936363-cafe.business.site/"},
  { name: "Dylan's Cafe", image: "images/dylan.jpg" , link: "https://www.dylanscafeshillong.com/"},
  { name: "Little Chef Cafe ", image: "images/lilchef.jpg" , link: "https://littlechefcafe.business.site/"},
  { name: "Mellow Mood Cafe", image: "images/mellowmood.jpg" , link: "https://www.instagram.com/mellow_mood_cafe_shillong/"},
  { name: "ML 05", image: "images/ml05.jpg" , link: "https://www.instagram.com/ml05cafe/"},
  { name: "Munchies", image: "images/munchies.jpg" , link: "https://www.facebook.com/shillongmunchies/"},
  { name: "Open Up Cafe", image: "images/openup.jpg" , link: "https://www.instagram.com/openupcafemawroh/"},

]


const showCafes = () => {
  let output = ""
  cafes.forEach(
    ({ name, image,link }) =>
      (output += `
              <div class="card">
                <img class="card--avatar" src=${image} />
                <h1 class="card--title">${name}</h1>
                <a class="card--link" href=${link}>Visit</a>
              </div>
              `)
  )
  container.innerHTML = output
}

document.addEventListener("DOMContentLoaded", showCafes)

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err));
  });
}
