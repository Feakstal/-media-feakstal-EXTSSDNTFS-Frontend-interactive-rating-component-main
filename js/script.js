const submit = document.querySelector('.button-submit');
const ratingItem = document.querySelectorAll('.rating-item');
const selectedRatingNum = document.querySelector('.selected-rating__text span')
const thankYouBlock = document.querySelector('.thank-you');
const ratingComponent = document.querySelector('.rating-component');

for (const item of ratingItem) {
  item.addEventListener('click', (e) => {
    selectedRatingNum.innerHTML = e.currentTarget.innerText;
  });
}

submit.addEventListener('click', () => {
  if (selectedRatingNum.innerHTML) {
    ratingComponent.classList.add('_hidden');
    thankYouBlock.classList.remove('_hidden');
  } else {
    alert("Error: You haven't selected a rating");
  }
});
