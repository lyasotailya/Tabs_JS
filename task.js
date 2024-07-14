let tabs = document.querySelectorAll('div.tab')
let contents = document.querySelectorAll('div.tab__content')

tabs.forEach((el) => {
    el.onclick = () => {
        let act_tab = document.querySelector('div.tab_active')
        let act_content = document.querySelector('div.tab__content_active')
        let array_tabs = Array.from(tabs)

        act_tab.className = 'tab'
        el.classList.add('tab_active')

        act_content.className = 'tab__content'
        contents[array_tabs.indexOf(el)].classList.add('tab__content_active')
    }
})
