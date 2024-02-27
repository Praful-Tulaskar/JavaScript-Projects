const addbtn = document.querySelector("#add-btn");
const main = document.querySelector("main");

addbtn.addEventListener(
    "click",
    function(){
        addNote();
    }
)



const saveNotes = () => {
    const Notes = document.querySelectorAll(".notes textarea");
    console.log(Notes);
    const data = [];
    Notes.forEach(
        (note) => {
            data.push(note.value);
        }
    )

    if(data.length === 0){
        localStorage.removeItem("Notes");
    }
    else{
        localStorage.setItem("Notes", JSON.stringify(data));
    }
}



const addNote = (text= "") => {
    const note = document.createElement("div");
    note.classList.add("notes");
    note.innerHTML = `
    <div class="notes-header">
        <i class="fa-solid fa-trash" id= "dlt"></i>
        <i class="fa-solid fa-floppy-disk" id= "save"></i>
    </div>
    <textarea>${text}</textarea>
    `;

    note.querySelector("#dlt").addEventListener(
        "click",
        function() {
            note.remove();
            saveNotes();
        }
    )

    note.querySelector("#save").addEventListener(
        "click",
        function(){
            saveNotes()
        }
    )

    note.querySelector("textarea").addEventListener(
        "focusout",
        function() {
            saveNotes();
        }
    )

    main.appendChild(note);
    saveNotes();
}

// (
//     function(){
//         const lsNotes = JSON.parse(localStorage.getItem("Notes"));
//         lsNotes.forEach(
//            (ele) => {
//             addNote(ele);
//            } 
//         )
//         if(lsNotes.length === 0){
//             localStorage.removeItem("Notes")
//         }
//         else{
//             addNote();
//         }
//     }
// )()

(
    function() {
        const lsNotes = JSON.parse(localStorage.getItem("Notes"));
        if (lsNotes === null) {
            addNote()
        } else {
            lsNotes.forEach(
                (lsNote) => {
                    addNote(lsNote)
                }
            )
        }

    }
)()