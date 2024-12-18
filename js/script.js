document.addEventListener("DOMContentLoaded", () => {
    const contactButton = document.querySelector(".contact-btn");

    contactButton.addEventListener("click", () => {
        alert("お問い合わせページは現在準備中です。しばらくお待ちください。");
    });
});
document.addEventListener("DOMContentLoaded", () => {
    // 現在のページを取得
    const currentPage = document.body.getAttribute("data-page");

    // ナビゲーションリンクを取得
    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(link => {
        const href = link.getAttribute("href");
        if (href.includes(currentPage)) {
            link.classList.add("current-page");
        }
    });
});

// 現在のページを強調表示
const navLinks = document.querySelectorAll('.nav-links a');
const currentPage = document.body.dataset.page;
navLinks.forEach(link => {
    if (link.getAttribute('href').includes(currentPage)) {
        link.classList.add('current-page');
    }
});

// Heroセクションの背景スライダー
const heroSection = document.querySelector('.hero');
const heroImages = [
    'img/top_img.jpg',
    'img/top_img2.jpeg', // 新しい背景画像
    'img/top_img3.jpg'  // 新しい背景画像
];
let currentImageIndex = 0;

function changeHeroBackground() {
    currentImageIndex = (currentImageIndex + 1) % heroImages.length;
    heroSection.style.backgroundImage = `url('${heroImages[currentImageIndex]}')`;
}
setInterval(changeHeroBackground, 5000); // 5秒ごとに切り替え

// お問い合わせボタンのスムーズスクロール
const contactButton = document.querySelector('.hero-content button');
contactButton.addEventListener('click', () => {
    const contactSection = document.querySelector('#contact');
    contactSection.scrollIntoView({ behavior: 'smooth' });
});

// モーダルのスタイルを追加
const modalStyle = document.createElement('style');
modalStyle.textContent = `
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}
.modal-content {
    background: #fff;
    padding: 20px;
    border-radius: 8px;
    max-width: 500px;
    text-align: center;
}
.close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 1.5rem;
    cursor: pointer;
}
`;
document.head.appendChild(modalStyle);
