document.addEventListener("DOMContentLoaded", () => {
    // 現在のページを取得
    const currentPage = document.body.getAttribute("data-page");
    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(link => {
        const href = link.getAttribute("href");
        if (href.includes(currentPage)) {
            link.classList.add("current-page");
        }
    });

    // ハンバーガーメニューの動作
    const hamburger = document.querySelector(".hamburger-menu");
    const navLinksContainer = document.querySelector(".nav-links");

    if (hamburger && navLinksContainer) {
        hamburger.addEventListener("click", () => {
            navLinksContainer.classList.toggle("show");
        });
    }

    // Heroセクションの背景スライダー
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        const heroImages = [
            'img/top_img.jpg',
            'img/top_img2.jpeg',
            'img/top_img3.jpg'
        ];
        let currentImageIndex = 0;

        function changeHeroBackground() {
            currentImageIndex = (currentImageIndex + 1) % heroImages.length;
            heroSection.style.backgroundImage = `url('${heroImages[currentImageIndex]}')`;
        }
        setInterval(changeHeroBackground, 5000);
    }

    // お問い合わせボタンのスムーズスクロール
    const contactButton = document.querySelector('.hero-content button');
    if (contactButton) {
        contactButton.addEventListener('click', () => {
            const contactSection = document.querySelector('#contact');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
});
