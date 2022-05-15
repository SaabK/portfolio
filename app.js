class TypeWriter {
    constructor(txtElement, wait = 3000, words) {
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.type();
        this.wait = parseInt(wait, 10);
        this.isDeleting = false;
    }

    type() {
        const current = this.wordIndex % this.words.length;
        const fullTxt = this.words[current];

        // Check if Deleting
        if (this.isDeleting) {
            // Remove char
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            // Add char
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        // Type Speed
        let typeSpeed = 300;
        if (this.isDeleting) {
            typeSpeed /= 2;
        }

        // If word is complete
        if (!this.isDeleting && this.txt === fullTxt) {
            // Make a pause at end
            typeSpeed = this.wait;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.wordIndex++;

            typeSpeed = 220;
        }

        this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

        setTimeout(() => this.type(), typeSpeed);
    }
}

document.addEventListener('DOMContentLoaded', init);

function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    new TypeWriter(txtElement, wait, words);
}

function menu() {
    let container = document.querySelector('.hamburger-menu .container');
    if (container.style.display === "block") {
        container.style.display = "none";
    } else {
        container.style.display = "block";
    }
    container.innerHTML = `<div class="links"><div class="link"><a href="#">Home</a></div>
    <div class="link"><a href="#">About</a></div>
    <div class="link"><a href="#">Skills</a></div>
    <div class="link"><a href="#">Contact Me</a></div></div>`

}

// this is seriously no copied