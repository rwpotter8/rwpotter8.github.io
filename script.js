const names = [];

function addName() {
    const nameInput = document.getElementById('name-input');
    const name = nameInput.value.trim();
    if (name) {
        names.push(name);
        updateNameList();
        nameInput.value = '';
    }
}

function updateNameList() {
    const nameList = document.getElementById('name-list');
    nameList.innerHTML = '';
    names.forEach((name, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = name;
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-button';
        removeButton.onclick = () => removeName(index);
        listItem.appendChild(removeButton);
        nameList.appendChild(listItem);
    });
}

function removeName(index) {
    names.splice(index, 1);
    updateNameList();
}

function pickRandomSentence() {
    const sentences = [
        "Hello, NAME! How are you today?",
        "It's a beautiful day, isn't it, NAME?",
        "NAME, you are doing a great job!",
        "Keep up the good work, NAME!",
        "Have you seen the latest news, NAME?",
        "NAME, don't forget to take a break!",
        "What are your plans for the weekend, NAME?",
        "NAME, your hard work is paying off!"
    ];
    if (names.length > 0) {
        const randomName = names[Math.floor(Math.random() * names.length)];
        const randomSentence = sentences[Math.floor(Math.random() * sentences.length)].replace("NAME", randomName);
        document.getElementById('random-sentence').textContent = randomSentence;
    } else {
        document.getElementById('random-sentence').textContent = "Please add at least one name.";
    }
}