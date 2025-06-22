/*=============== SHOW SIDEBAR ===============*/
const showSidebar = (toggleId, sidebarId, headerId, mainId) =>{
    const toggle = document.getElementById(toggleId),
          sidebar = document.getElementById(sidebarId),
          header = document.getElementById(headerId),
          main = document.getElementById(mainId)
 
    if(toggle && sidebar && header && main){
        toggle.addEventListener('click', ()=>{
            /* Show sidebar */
            sidebar.classList.toggle('show-sidebar')
            /* Add padding header */
            header.classList.toggle('left-pd')
            /* Add padding main */
            main.classList.toggle('left-pd')
        })
    }
 }
 showSidebar('header-toggle','sidebar', 'header', 'main')


 document.addEventListener('DOMContentLoaded', () => {
    // 1. Title animation
    const homeİmg = document.querySelector('.home__img');
    setTimeout(() => {
      homeİmg.classList.add('animate');
    }, 300);

    const hiAm = document.querySelector('.hi__am')
    setTimeout(() => {
        hiAm.classList.add('animate');   
    }, 300)

    const social = document.querySelector('.social')
    setTimeout(() => {
        social.classList.add('animate');
    }, 300)

    const sidebar = document.querySelector('.sidebar')
    setTimeout(() => {
        sidebar.classList.add('animate')
    }, 300)

    const header = document.querySelector('.header__container')
    setTimeout(() => {
        header.classList.add('animate')
    }, 300)
})
 
 /*=============== LINK ACTIVE ===============*/
 const sidebarLink = document.querySelectorAll('.sidebar__list a')
 
 function linkColor(){
     sidebarLink.forEach(l => l.classList.remove('active-link'))
     this.classList.add('active-link')
 }
 
 sidebarLink.forEach(l => l.addEventListener('click', linkColor))
 
 /*=============== DARK LIGHT THEME ===============*/ 
 const themeButton = document.getElementById('theme-button')
 const darkTheme = 'dark-theme'
 const iconTheme = 'ri-sun-fill'
 
 // Previously selected topic (if user selected)
 const selectedTheme = localStorage.getItem('selected-theme')
 const selectedIcon = localStorage.getItem('selected-icon')
 
 // We obtain the current theme that the interface has by validating the dark-theme class
 const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
 const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-clear-fill' : 'ri-sun-fill'
 
 // We validate if the user previously chose a topic
 if (selectedTheme) {
   // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
   document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
   themeButton.classList[selectedIcon === 'ri-moon-clear-fill' ? 'add' : 'remove'](iconTheme)
 }
 
 // Activate / deactivate the theme manually with the button
 themeButton.addEventListener('click', () => {
     // Add or remove the dark / icon theme
     document.body.classList.toggle(darkTheme)
     themeButton.classList.toggle(iconTheme)
     // We save the theme and the current icon that the user chose
     localStorage.setItem('selected-theme', getCurrentTheme())
     localStorage.setItem('selected-icon', getCurrentIcon())
 })


/*============================ kurallar==============*/


 document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Sayfanın yenilenmesini önler

    let name = document.getElementById("nameInput").value.trim();
    let email = document.getElementById("emailInput").value.trim();
    let message = document.getElementById("messageInput").value.trim();
    let messageBox = document.getElementById("messageBox");
    
    let namePattern = /^[A-Za-zÇçĞğİıÖöŞşÜü\s]{3,20}$/;
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!namePattern.test(name)) {
        showMessage("❌ İsim sadece harflerden oluşmalı ve 3-20 karakter uzunluğunda olmalıdır.", "error");
        return;
    }

    if (!emailPattern.test(email)) {
        showMessage("❌ Geçerli bir e-posta adresi girin.", "error");
        return;
    }

    if (message.length < 5) {
        showMessage("❌ Mesaj en az 5 karakter uzunluğunda olmalıdır.", "error");
        return;
    }

    showMessage("✅ Form başarıyla gönderildi!", "success");
    document.getElementById("myForm").reset(); // Formu sıfırla
});

function showMessage(text, type) {
    let messageBox = document.getElementById("messageBox");
    messageBox.innerText = text;
    messageBox.className = type;
    messageBox.style.display = "block";
};