
// get the ul
const ul = document.getElementById('navbar__list')

// get all sections
const sections = document.querySelectorAll('section')
const scrollList = []

sections.forEach((section, i) => {
    // add the scroll to scroll List
    scrollList.push(section.getBoundingClientRect().top + window.scrollY)
    // making li for each section
    const li = document.createElement('li')
    li.classList.add('section'+ (i+1))
    li.innerText = 'Section ' + (i+1)
    // append the li to ul
    ul.appendChild(li)
})

// get lis
const lis = document.querySelectorAll('li')

// loop throught all lis to add event listener to scroll to section
lis.forEach(function(li, index) {
    li.addEventListener('click', (e) => {
        window.scroll({top: scrollList[index], behavior: 'smooth'})
    })
})

// add the active class to the current section
window.addEventListener('scroll', () => {
    let current = ''
    sections.forEach(section => {
        const sectionTop = section.offsetTop
        if(pageYOffset >= sectionTop) {
            current = section.getAttribute('id')
        }
        section.classList.remove('active')
    })
    const sect = document.getElementById(current) 
    if(sect) {
        sect.classList.add('active')
        const li = document.getElementsByClassName(sect.getAttribute('id'))[0]
        lis.forEach(function(li, index) {
            li.classList.remove('active-li')
        })
        li.classList.add('active-li')
    }

})
