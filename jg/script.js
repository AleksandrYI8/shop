

let count = 0
let counter = document.querySelector('.counter')
let counter_val = parseInt(counter.textContent)
let five = document.querySelector('#five')
let bag_box = document.querySelector('.bag-box')
let all = document.querySelector('#all')

function reloade() {
    let bag_div = document.createElement('div')
    let bag_img = document.createElement('div')
    let bag_text = document.createElement('div')
    let save = document.createElement('button')
    let bag = document.createElement('img')
    let bag_text_h2 = document.createElement('h2')
    let bag_text_p = document.createElement('p')
    let bag_price = document.createElement('div')
    let bag_p = document.createElement('p')
    let bag_p_sec = document.createElement('p')
    let bag_p_therd = document.createElement('p')

    bag_div.classList.add('bag-div')
    bag_img.classList.add('bag-img')
    bag_text.classList.add('bag-text')
    save.classList.add('save')
    save.innerHTML = "save"
    bag.classList.add('bag')
    bag.src = "./img/bag.png"
    bag_text_h2.classList.add('bag-text-h2')
    bag_text_h2.innerHTML = "MEN’S CLOTHING (120)"
    bag_text_p.classList.add('bag-text-p')
    bag_text_p.innerHTML = "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
    bag_price.classList.add('bag-price')
    bag_p.classList.add('bag-p-first')
    bag_p.innerHTML = "109"
    bag_p_sec.classList.add('bag-p-second')
    bag_p_sec.innerHTML = "3,9"
    bag_p_therd.classList.add('bag-p-therd')
    bag_p_therd.innerHTML = "120"

    bag_box.append(bag_div)
    bag_div.append(bag_img, bag_text)
    bag_img.append(bag)
    bag_text.append(bag_text_h2, bag_text_p, bag_price, save)
    bag_price.append(bag_p, bag_p_sec, bag_p_therd)

    save.onclick = () => {
        if (save.classList.contains('saved')) {
            count--
            save.innerHTML = "save"
            save.classList.remove('saved')

        } else {
            count++
            save.innerHTML = "saved"
            save.classList.add('saved')

        }

        counter.textContent = count
    }
}


all.onclick = () => {

    
    let bag_child = bag_box.childElementCount
    if (bag_box.classList.contains('hide')) {
        
        
        if (bag_child < 10) {
            for (let i = 0; i < 10; i++) {
                reloade()
                
            }
        } else {

        }

        bag_box.classList.remove('hide')

    } else {
        bag_box.classList.add('hide')
    }
}


five.onclick = () => {
    let bag_child = bag_box.childElementCount
    if (bag_box.classList.contains('hide')) {
        
        
        if (bag_child < 5) {
            for (let i = 0; i < 5; i++) {
                reloade()
                
            }
        } else {

        }

        bag_box.classList.remove('hide')

    } else {
        bag_box.classList.add('hide')
    }
}
