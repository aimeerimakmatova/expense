
function saveBookk(){
    if(inputBookName.value.trim() !== "" && inputUrl.value.trim() !== "" && inputPrice.value.trim() !== ""){

        const obj ={
            bookName: inputBookName.value,
            url: inputUrl.value,
            price: inputPrice.value,
            id: Math.random()
        }
        array.push(obj)
        localStorage.setItem("book", JSON.stringify(array))
        console.log(array);
        inputBookName.value= "",
        inputUrl.value = "",
        inputPrice.value = ""
      
    }
    map()
    cancel()
}
saveBook.addEventListener("click",saveBookk)
