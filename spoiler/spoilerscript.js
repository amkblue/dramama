$(document).ready(function() {
    // Expand the horizontal tab for CAST
    $('.cast-page .horizontal-tab').animate({
        width: '3%'
    }, 1500, function() {
        // Start typewriting e
        $('.cast-page .typewriter').text('C A S T');
    });

    // Expand the horizontal tab for SPOILERS
    $('.spoiler-main .horizontal-tab').animate({
        width: '3%' 
    }, 1500, function() {
        $('.spoiler-main .typewriter').text('S P O I L E R S');
    });
});

// =========== SPOILER RECAP 
document.addEventListener("DOMContentLoaded", function() {
    var acc = document.getElementsByClassName("accordion");
    var panel = document.getElementsByClassName('pannel');

    function setClass(els, className, fnName) {
        for (var i = 0; i < els.length; i++) {
            els[i].classList[fnName](className);
        }
    }

    for (var i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            var setClasses = !this.classList.contains('active');
            setClass(acc, 'active', 'remove');
            setClass(panel, 'active', 'remove');

            if (setClasses) {
                this.classList.toggle("active");
                this.nextElementSibling.classList.toggle("active");
            }
        });
    }
});

// Ripple button 
const buttons = document.querySelectorAll('.ripple')

buttons.forEach(button => {
    button.addEventListener('click', function (e) {
        const x = e.pageX
        const y = e.pageY

        const buttonTop = e.target.offsetTop
        const buttonLeft = e.target.offsetLeft

        const xInside = x - buttonLeft
        const yInside = y - buttonTop

        const circle = document.createElement('span')
        circle.classList.add('circle')
        circle.style.top = yInside + 'px'
        circle.style.left = xInside + 'px'

        this.appendChild(circle)

        setTimeout(() => circle.remove(), 500)
    })
})

// CONTENT PLACE HOLDER 

const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

function getData() {
  header.innerHTML =
    '<img src="" alt="" />'
  title.innerHTML = 'I cant die yet.'
  excerpt.innerHTML =
    'I havent told you yet that its okay. that I never resented you. I havent thank you for being by my side all these years despite all the harsh words i didnt mean. You were the reason I wanted to live even more.'
  user_img.innerHTML =
    '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLDffUEKvGPVK2zpAKaLw3D-vhS4GwA04yNh_DlC_bQQ&s" alt="" />'
  name.innerHTML = 'Hong Hae In'
  date.innerHTML = 'Episode 14'

  animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
  animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'))
}