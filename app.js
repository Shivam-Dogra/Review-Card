let users = [
    {
        id:"1",
        name: "John Snow",
        job: "UI/UX Designer",
        picture: "./images/user1.png",
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, itaque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta saepe numquam quasi quos praesentium temporibus.'
            
    },
    {
        id:"2",
        name: "Micheal Scott",
        job: "Regional Mamager",
        picture: "./images/user2.png",
        text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.'

    },
    {
        id:"3",
        name: "Joey Tribianni",
        job: "Actor",
        picture: "./images/user3.png",
        text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.'
 
    },
    {
        id:"4",
        name: "Racheal Green",
        job: "Fashion Designer",
        picture: "./images/user4.png",
        text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. '
  
    }
];

const btnLeft = document.querySelector('.fa-chevron-left');
const btnRight = document.querySelector('.fa-chevron-right');

const img = document.querySelector('.display-picture')
const author = document.querySelector('.name')
const job = document.querySelector('.job')
const text = document.querySelector('.review')

let currentItem = 0;

window.addEventListener('DOMContentLoaded', function(){
    let item = users[currentItem];
    img.src = item.picture;
    author.textContent = item.name;
    job.textContent = item.job;
    text.textContent = item.text;
})


btnRight.addEventListener('click', ()=> {
    currentItem++;
    if(currentItem > users.length-1){
        currentItem = 0;
    }

    dispayCard(currentItem);
})

btnLeft.addEventListener('click', ()=> {
    currentItem--;
    if(currentItem < 0){
        currentItem = users.length-1;
    }

    dispayCard(currentItem);
})


function dispayCard(person){
    let item = users[person];
    img.src = item.picture;
    author.textContent = item.name;
    job.textContent = item.job;
    text.textContent = item.text;
}
