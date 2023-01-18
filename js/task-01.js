const liEl = document.querySelectorAll('li.item');

console.log("Number of categories:", liEl.length)

const liElText = liEl.forEach((element) => {
    console.log("Category:", element.firstElementChild.textContent);
    console.log("Elements:", element.querySelectorAll('li').length);
})

