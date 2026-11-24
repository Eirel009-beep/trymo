/* =================================
   TRYMO - JAVASCRIPT
================================= */

// MOBILE MENU

const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

if (menuButton && nav) {

    menuButton.addEventListener('click', () => {

        const isOpen = nav.classList.toggle('open');

        menuButton.setAttribute(
            'aria-expanded',
            String(isOpen)
        );

        menuButton.textContent = isOpen ? '×' : '☰';

    });

}


// CLOSE MENU AFTER CLICK

document.querySelectorAll('.nav a').forEach(link => {

    link.addEventListener('click', () => {

        if (nav) {
            nav.classList.remove('open');
        }

        if (menuButton) {
            menuButton.textContent = '☰';
            menuButton.setAttribute('aria-expanded', 'false');
        }

    });

});


// SCROLL REVEAL ANIMATION

const revealElements = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {

    const revealObserver = new IntersectionObserver(

        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add('visible');

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.12
        }

    );

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });

} else {

    revealElements.forEach(element => {
        element.classList.add('visible');
    });

}


// WHATSAPP SERVICE BUTTONS

const whatsappButtons = document.querySelectorAll('.whatsapp-order');

const whatsappNumber = '966530035235';

whatsappButtons.forEach(button => {

    button.addEventListener('click', event => {

        event.preventDefault();

        const message = button.dataset.message;

        const whatsappURL =
            'https://wa.me/' +
            whatsappNumber +
            '?text=' +
            encodeURIComponent(message);

        window.open(whatsappURL, '_blank');

    });

});


// CONTACT FORM

const contactForm = document.getElementById('contactForm');

if (contactForm) {

    contactForm.addEventListener('submit', event => {

        event.preventDefault();

        const name = document.getElementById('name').value.trim();

        const phone = document.getElementById('phone').value.trim();

        const email = document.getElementById('email').value.trim();

        const subject = document.getElementById('subject').value;

        const message = document.getElementById('message').value.trim();


        if (!name || !phone || !subject || !message) {

            alert('فضلاً تأكد من تعبئة جميع الحقول المطلوبة.');

            return;

        }


        const whatsappMessage =

            'مرحباً TRYMO! 🍊' + '\n\n' +

            'لدي استفسار وأرغب بالتواصل معكم.' + '\n\n' +

            'الاسم: ' + name + '\n' +

            'رقم الجوال: ' + phone + '\n' +

            'البريد الإلكتروني: ' + (email || 'غير محدد') + '\n' +

            'موضوع الرسالة: ' + subject + '\n\n' +

            'تفاصيل الاستفسار:\n' +

            message;


        const whatsappURL =

            'https://wa.me/' +

            whatsappNumber +

            '?text=' +

            encodeURIComponent(whatsappMessage);


        window.open(whatsappURL, '_blank');

    });

}