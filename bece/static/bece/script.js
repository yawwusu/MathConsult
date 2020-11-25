// Start with first question
let counter = 1;

// Load 5 questions at a time
const quantity = 5;

// when DOM loads, render first 20 posts
document.addEventListener('DOMContentLoaded', load)

// window.onscroll = () => {
//   if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
//     load();
//   }
// }

//loads next set of Questions
function load() {
  //Set start and end post numbers , and update counter
  const start = counter;
  const end = start + quantity - 1;
  counter = end + 1;

  // Get new posts and add posts
  // There is a mistake here (the response is different for my case)
  fetch(`/full?start=${start}&end=${end}`)
  .then(response => response.json())
  .then(data => {
    data.question.forEach(add_question);
  })
};

// Add a new post with given contents to DOMContentLoaded
function add_question(contents) {
  // create new question
  const question = document.createElement('div');
  question.className = "question";
  question.innerHTML  = contents;

  // Add post to DOM
  document.querySelector('#questions').append(question)
}
