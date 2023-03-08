const todoList = [
    {
        id: 1,
        title: 'Take out the trash',
        skills: [
            'Open a beer to make the experience more fun',
            'Make sure all trash has been collected from all rooms',
            'Separate out any recycling and compost that found its way to trash',
            'Throw trash in apartment dumpster',
            'Finish beer and add beer bottle/can to recycling'
        ]
    },
    {
        id: 2,
        title: 'Make the bed',
        skills: [
            'Clear all pillows, humans, and dogs from bed',
            'If dog remains on bed, accept their fate',
            'Make bed as usual by covering and straightening blankets on bed',
            'Ignore dog-shaped lump in middle of bed',
        ]
    },
    {
        id: 3,
        title: 'Feed the cutest dog',
        skills:[
            'Measure out 1 cup of dog food',
            'Add a scoop of pumpkin puree',
            'Add daily dog vitamin',
            'Torment dog by pretending to eat her food',
            'Give food bowl to dog instead'
        ]
    },
    {
        id: 4,
        title: 'Take the cutest dog on a walk',
        skills: [
            'Find a playlist of good dog-walking music',
            'Put harness and booties on dog',
            'Leash up your dog so they do not feel left out',
            'Wander around aimlessly with dog'
        ]
    },
    {
        id: 5,
        title:'Go for a long run',
        skills: [
            'Put on running shoes and running clothes',
            'Stretch and hydrate beforehand',
            'Select a playlist of good running music',
            'Enjoy the run!'
        ]
    }
]

const peopleContainer = document.getElementById('people')

for (const todo of todoList) {
    let todoDescription = ''

    for (const skill of todo.skills) {
        todoDescription += `<li>${skill}</li>`
    }

    peopleContainer.innerHTML += `
        <div class="card" id="${todo.id}">
            <h2>${todo.title}</h2>
            <ol>
                ${todoDescription}
            </ol>
        </div>
    `
}

for (const todo of todoList) {
    const todoEl = document.getElementById(todo.id)
    console.log(todoEl)
    todoEl.addEventListener('click', () => {
        //employeeEl.remove()
        if (todoEl.style.backgroundColor === 'gray') {
            todoEl.style.backgroundColor = 'transparent'
        } else {
            todoEl.style.backgroundColor = 'gray'
        }
    })
}

