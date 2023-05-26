console.log(chrome)

const container = document.querySelector('body main[role=main]')
// width = 400px
// position = relative


const yourAnswer = document.getElementById("answer-form")
// position = fixed
// right = 0
// top = 4.5rem
// width = 500px;

const asideContainer = document.querySelector("aside.shrink-0")
// width = 15rem

const somethingThis = document.querySelector("body.body-bg-color > div.flex")

const editor = document.getElementById("editor-container")

const escalateP = document.querySelector('#answer-form > div:nth-child(4)')

const escalate = document.querySelector("div.nextLevelAccordion")

const myRadio = document.getElementById("nextLevel")

const parent = document.getElementById('display-questions')




// gap = 2rem


const cannedResponseModal = document.getElementById("canned-response-modal")

container.setAttribute('style', 'width: 600px !important; flex-grow: .5 !important;')

yourAnswer.setAttribute('style', "position: fixed !important; right: 0; top: 4.5rem; width: 500px !important; z-index: 9999; box-shadow: 0 2px 20px rgb(0 0 0 / 10%) !important;")

asideContainer.setAttribute('style', 'width: 15rem !important;')

somethingThis.setAttribute('style', 'gap: 2rem !important;')

cannedResponseModal.setAttribute('style', 'left: -5rem !important;')

editor.setAttribute('style', 'max-height: 575px !important;')



myRadio.addEventListener('change', () => {
    if (myRadio.checked) {
        escalateP.setAttribute('style', 'position: relative;')
        escalate.setAttribute('style', 'position: absolute; left: -600px; top: -502px; max-width: 575px !important;')
    }
})

const toggler = document.createElement('button')
toggler.style.display = "none"
