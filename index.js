let shoppingList = [];

document.getElementById('addButton').addEventListener('click', addItem);
document.getElementById('clearButton').addEventListener('click', clearList);
document.getElementById('itemInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addItem();
    }
});

function addItem() {
    const itemInput = document.getElementById('itemInput');
    const itemValue = itemInput.value.trim();

    if (itemValue === '') {
        alert('Please enter an item');
        return;
    }

    shoppingList.push({ text: itemValue, purchased: false });
    renderList();
    itemInput.value = '';
}

function markAsPurchased(index) {
    shoppingList[index].purchased = !shoppingList[index].purchased;
    renderList();
}

function clearList() {
    shoppingList = [];
    renderList();
}

function renderList() {
    const shoppingListElement = document.getElementById('shoppingList');
    shoppingListElement.innerHTML = '';

    shoppingList.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.className = item.purchased ? 'purchased' : '';
        listItem.innerHTML = `
            ${item.text}
            <button onclick="markAsPurchased(${index})">${item.purchased ? 'Unmark' : 'Mark Purchased'}</button>
        `;
        shoppingListElement.appendChild(listItem);
    });
}
