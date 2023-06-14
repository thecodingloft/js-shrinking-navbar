// FUNCTIONAL PROGRAMMING
const navbarSelector = 'nav#navbar';
const navbar = document.querySelector(navbarSelector);

function addStyles(selector) {
    const style = `
        ${selector} {
            transition: height 0.5s ease-in-out
        }

        ${selector}.small {
            height: 60px;
        }
    `
    const styleTag = document.createElement('style');
    styleTag.innerHTML = style;
    document.head.appendChild(styleTag);
}

addStyles(navbarSelector);

window.addEventListener('scroll', () => {
    window.scrollY > 10 
        ? navbar.classList.add('small') 
        : navbar.classList.remove('small')
})

// OBJECT ORIENTED PROGRAMMING
class ShrinkingElement {
    constructor(selector, w) {
        this.selector = selector
        this.element = null;
        this.styles = '';
        this.init();
        console.log(selector, this.element)

        w.addEventListener('scroll', () => {
            console.log('scrolling');
            w.scrollY > 10 
                ? this.element.classList.add('small') 
                : this.element.classList.remove('small')
        })
    }

    getElement() {
        this.element = document.querySelector(this.selector)
    }

    addStyles() {
        this.styles = `
            ${this.selector} {
                transition: height 0.5s ease-in-out;
            }

            ${this.selector}.small {
                height: 60px;
            }
        `
        const styleTag = document.createElement('style');
        styleTag.innerHTML = this.styles;
        document.head.appendChild(styleTag);
        console.log(styleTag);
    }

    init() {
        this.getElement();
        this.addStyles();
    }


}

const shrinkingNavbar = new ShrinkingElement('nav#navbar', window);