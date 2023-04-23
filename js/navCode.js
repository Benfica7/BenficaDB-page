document.addEventListener("DOMContentLoaded", function() {
    const insertButton = document.getElementById("cb-insert")
    const updateButton = document.getElementById("cb-update")
    const deleteButton = document.getElementById("cb-delete")
    const codeLine = document.getElementById("code-line-crud")


    insertButton.addEventListener("click", function() {
        codeLine.innerHTML = `db.<span class="code-property">insert_one</span>(
    {<span class="code-str">\"name\"</span>: <span class="code-str">\"Benfica\"</span>, <span class="code-str">\"age\"</span>: <span class="code-int">15</span>}
)</span>`;        
    })

    updateButton.addEventListener("click", function() {
        codeLine.innerHTML = `db.<span class="code-property">update_one</span>(
    <span class="code-str">"name"</span>, 
    <span class="code-str">"Benfica"</span>,
    {<span class="code-str">"name"</span>: <span class="code-str">"Washington"</span>, <span class="code-str">"age"</span>: <span class="code-int">67</span>}
)</span>`
    })

    deleteButton.addEventListener("click", function() {
        codeLine.innerHTML = `db.<span class="code-property">delete_one</span>(<span class="code-str">\"name\"</span>, <span class="code-str">\"Washington\"</span>)</span>`;        
    })
})
