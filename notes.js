

const input = document.getElementById('input-note');

const btn = document.getElementById('btn');

const noteList = document.getElementById('notes');

let arr = [];
let archiveNotes = [];

btn.addEventListener('click', ()=> {
    if(input.value) {
        let note = input.value;
        arr.push(note);
        archiveNotes.push(arr[0]);
        arr.forEach(element => {
            let newLi = document.createElement('li');
            newLi.textContent = element;
            noteList.appendChild(newLi);
            newLi.addEventListener('click', (e) => {
                input.value = newLi.textContent;
                e.path[0].nextSibling.remove();
                e.path[0].remove();
            })
            let btn = document.createElement('button');
            btn.textContent = 'delete';
            notes.appendChild(btn);
            btn.addEventListener('click', e => {
                archiveNotes.forEach((element, index) => {
                    if(e.path[0].previousSibling.textContent == element) {
                        archiveNotes.splice(index, 1);
                    }  
                });
                e.path[0].previousSibling.remove();
                e.path[0].remove();
                console.log(archiveNotes);

            });
        });
        input.value = '';
        arr = [];
    };
})