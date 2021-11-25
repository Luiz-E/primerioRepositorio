// const text = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt, in. Fugit ipsam ad similique asperiores atque velit aspernatur veniam. Accusantium aspernatur, fuga quam unde quae voluptatem suscipit obcaecati minus eum.";
// const para = document.querySelector("main p")

// let word = document.createElement("span")
// word.className = "word"

// for (let i = 0; i < text.length; i++) {
//     if (text[i] === " ") {
//         para.appendChild(word)
//         word = document.createElement("span")
//         word.className = "word"
//     }
    
//     const letter = document.createElement("span")
//     letter.className = "letter"
//     letter.innerText = text[i]
//     word.appendChild(letter)

// }

// para.appendChild(word)
//expressão regular
//structure 
const stats = {
    errors: 0,
    corrects: 0,
    time: 0
}
const text = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt, in. Fugit ipsam ad similique asperiores atque velit aspernatur veniam. Accusantium aspernatur, fuga quam unde quae voluptatem suscipit obcaecati minus eum.";
const para = document.querySelector("main p")

let textElements = [];

const createWord = () => {
    const element = document.createElement("span")
    element.className = "word"
    return element
} 

const createLetter = (word, letter) => {
    const element = document.createElement("span")
    element.className = "letter"
    element.innerText = letter
    textElements.push(element)
    word.appendChild(element)
}

let word = createWord();

// for (let i = 0; i < text.length; i++) 
text.split('').forEach(letter => {
    if (letter === " ") {
        para.appendChild(word)
        word = createWord()
    }
    createLetter(word, letter)
})

para.appendChild(word)




let pos = 0

setInterval (() => {stats.time++}, 1000)

window.addEventListener("keydown", ev => {
    const estaCorreto = (ev.key === text[pos])

    if (estaCorreto) {
        textElements[pos].classList.remove("wrong")
        textElements[pos].classList.add("correct")
        stats.corrects++;
    } else {
        textElements[pos].classList.add("wrong")
        stats.errors++;
    }
    pos++
})