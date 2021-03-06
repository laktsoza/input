

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
                e.target.nextSibling.remove();
                e.target.remove();
            })
            let btn = document.createElement('button');
            btn.textContent = 'delete';
            notes.appendChild(btn);
            btn.addEventListener('click', e => {
                console.log(e.target);
                archiveNotes.forEach((element, index) => {
                    if(e.target.previousSibling.textContent == element) {
                        archiveNotes.splice(index, 1);
                    }  
                });
                e.target.previousSibling.remove();
                e.target.remove();
                console.log(archiveNotes);

            });
        });
        input.value = '';
        arr = [];
    };
})