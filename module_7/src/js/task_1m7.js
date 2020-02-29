const listOfCategories = document.querySelectorAll('.item');
const categoryItem = document.querySelectorAll('h2');

console.log(`There are ${listOfCategories.length} categories in this list =)`);
for (let i = 0; i < listOfCategories.length; i += 1) {
  console.log(
    `Category: ${categoryItem[i].textContent}  Amount of items ${listOfCategories[i].lastElementChild.children.length}`,
  );
}
