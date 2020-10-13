const all = [
  {
    id: 1,
    title: 'Pepper Steak',
    calories: '250g - 679',
    image: 'images/Pepper-steaks.jpg',
    time: '30 minutes',
    ingredients: '2 tablespoons coarsely ground black pepper<br><br>50g steak, such as Scotch or eye fillet<br><br>salt to taste<br><br>oil for frying1/2 shallot, finely chopped<br><br>4 tablespoons beef stock<br><br>4 tablespoons double cream<br><br>50ml cognac or brandy<br><br>',
    type: 'weight',
    steps: [
      { type: 'video', url: 'https://www.youtube.com/embed/nsw0Px-Pho8', desc: 'Bring the steak to room temperature. Brush with a little oil. Sprinkle the crushed peppercorns on both sides of the steak, gently pressing the peppercorns onto the surface of the meat so they stick.', },
      { type: 'image', url: 'images/BBQ-Sauce.jpg', desc: 'Heat a heavy based pan or BBQ to medium high. Place steak into the hot pan and cook for 2-3 minutes on each side until cooked to your liking. Do not turn the steak more than twice.' },
      { type: 'image', url: 'images/Roasted-potatoes-carrots.jpg', desc: 'Serve with whole potatoes with broccoli and carrots.' }
    ]
  },
  {
    id: 2,
    title: 'Balsamic Salad',
    calories: '100g - 131',
    image: 'images/balsamic_salad.jpg',
    time: '10 minutes',
    ingredients: '2 cups torn mixed salad greens<br><br>1 plum tomato, cut into wedges<br><br>1/2 cup chopped sweet yellow pepper<br><br>2 tablespoons balsamic vinaigrette<br><br>2 tablespoons shredded Asiago cheese<br><br>',
    type: 'vegetarian',
    steps: [
      { type: 'image', url: 'images/balsamic_salad.jpg', desc: 'This is step 1.', },
      { type: 'image', url: 'images/balsamic_salad.jpg', desc: 'Heat a heavy based pan or BBQ to medium high. Place steak into the hot pan and cook for 2-3 minutes on each side until cooked to your liking. Do not turn the steak more than twice.' },
      { type: 'image', url: 'images/balsamic_salad.jpg', desc: 'Serve with whole potatoes with broccoli and carrots.' }
    ]
  },
  {
    id: 3,
    title: ' Chicken Breast',
    calories: '100g - 80',
    image: 'images/chicken_breast.jpg',
    time: '15 minutes',
    ingredients: '150 g chicken breast <br><br>500g water <br><br>salt to taste<br><br>',
    type: 'weight',
    steps: [
      { type: 'image', url: 'images/chicken_breast.jpg', desc: 'Add water to a sause pan.', },
      { type: 'image', url: 'images/chicken_breast.jpg', desc: 'Heat a heavy based pan or BBQ to medium high. Place steak into the hot pan and cook for 2-3 minutes on each side until cooked to your liking. Do not turn the steak more than twice.' },
      { type: 'image', url: 'images/chicken_breast.jpg', desc: 'Serve with whole potatoes with broccoli and carrots.' }
    ]
  }
];

$(function() {
  const href = window.location.href;
  if (href.indexOf('home.html') >= 0) {
    showHome();
});

// views
function showHome() {
  const favorites = getLocalStorage('favorite');
  const button1 = getLocalStorage('toggle-button1');
  const button2 = getLocalStorage('toggle-button2');
  const button3 = getLocalStorage('toggle-button3');
  const array = [
    { name: 'weight', flag: button1.length > 0 },
    { name: 'vegetarian', flag: button2.length > 0 },
    { name: 'muscle', flag: button3.length > 0 },
  ]
  let html = '';
  all.filter(el => array.filter(i => i.flag > 0).length === 0 ? true : array.filter(i => i.flag > 0).findIndex(j => j.name === el.type) >= 0).forEach(item => {
    html += `<div class="card">
                <div class="card-body">
                    <h4 class="card-title">${item.title}</h4>
                    <h6 class="text-muted card-subtitle mb-2">${item.calories}</h6>
                    <a href="instructions.html?id=${item.id}">
                        <img alt="Pepper Steak" src="${item.image}" style="width: 97%">
                    </a>
                    </p>
                    <i class="fa fa-heart"
                      onClick="toggleFavorite(${item.id})"
                      style="font-size: 20px;color: rgb(${favorites.find(i => i === item.id) ? '255,0,0': 'gray'});margin: 5px;margin-right: 23px;">
                    </i>
                    <i class="fa fa-thumbs-down" style="font-size: 20px;color: grey; margin: 5px;margin-right: 23px;"></i>
                    <a class="card-link" href="#" style="font-size: 20px;">Share</a>
                </div>
            </div>`
  });
  $('#cards').html(html)
}



// tab
function openTab(evt, tabName) {
  // Declare all variables
  var i, tabcontent, tablinks;
  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}