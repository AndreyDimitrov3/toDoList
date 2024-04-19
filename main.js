document.addEventListener('DOMContentLoaded', function(){

    document.querySelector('#button').addEventListener('click', addList);

    function addList(){
        let x = document.getElementById('input').value;
        let li = document.createElement("li");
        li.append(x);
        
        let removeBtn  = document.createElement('button');
        removeBtn.classList.add('remove');
        li.append(removeBtn);

        document.getElementById('list').append(li);

        removeBtn.addEventListener('click', removeItem)
    }

    function removeItem(e) {
        e.target.parentNode.remove();
    }
})
