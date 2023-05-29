const html = document.getElementsByTagName('html')[0]
html.setAttribute('style', 'overflow-x: hidden')

// Prevents scrolling on the x axis of the page, usually happens when leaving a comment on the ticket

const main_content_container = document.querySelector('div[class="flex lg:gap-20 max-w-xl w-full py-4 xl:py-12 lg:px-6 px-2 mx-auto"]')
// Main content container
// reduce gap to 25px

const aside = main_content_container.children[5]
// aside that contains customer's info, escalation section, comment section, related tickets
// set width to 230px

const ticket_content = main_content_container.children[6]
// The ticket's content itself
// set width to 800px

const response_area = document.getElementById('answer-form')
// response area
// set position to fixed
// width 500px
// top 70px

const editor_container = document.getElementById('editor-container')
// the actual textarea
// set max-height and height to 470px

const escalate_to_L2 = document.getElementById('nextLevel')
// Assign next level radio button

const mar_atsi_btn = document.getElementById('support-inbox-btn')
// The MAR or Add to Support Inbox button
// set position to fixed
// right: 0
// bottom: 0
// z-index: 1000
// 

const comment_section = document.getElementById('comment-form')
// Comment section
// Set position to fixed
// right 0
// bottom 0
// z-index 999
// height 168px
// width 500px

const comment_name = document.getElementById('comment-username')
// Read-only username above the comment section
// hidden

// Function to show the escalate to L2 section
escalate_to_L2.addEventListener('click', e => {
    // Function that listens when the escalate option is selected/checked

    const escalate_section = document.querySelector('.nextLevelAccordion')
    // The escalate to L2 area
    // set position to fixed 
    // set top to 110px
    // set right to 520px
    escalate_section.setAttribute('style', 'position: fixed; top: 110px; right: 570px; z-index: 999')
// 
})

// const comment_textarea = document.getElementById('comment')

// comment_textarea.addEventListener('')

// Injecting CSS

main_content_container.setAttribute('style', 'gap: 25px !important;')

aside.setAttribute('style', 'width: 230px !important;')

ticket_content.setAttribute('style', 'width: 750px !important; flex-grow: 0 !important;')

response_area.setAttribute('style', 'position: fixed; width: 550px; top: 70px; right: 0; z-index: 999;')

editor_container.setAttribute('style', 'height: 450px; max-height: 450px;')

mar_atsi_btn.setAttribute('style', 'position: fixed; right: 0; bottom: 0; z-index: 1000; height: 2.25rem')

comment_section.setAttribute('style', 'position: fixed; right: 0; bottom: 0; z-index: 999; height: 168px; width: 550px')

comment_name.setAttribute('style', 'display: none;')
