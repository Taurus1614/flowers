const messages = [
    "Emin misin? Bu bir ömürlük teklif! 😏",
    "Gerçekten emin misin?? İyice düşün… 🤨",
    "Pookie lütfen… Kalbimi kırma! 💔",
    "Bir düşün… Ne kadar tatlı olurduk! 🥰",
    "Eğer hayır dersen, yanağımdan tek bir gözyaşı süzülecek… 😢",
    "Çok üzüleceğim… Hem de aşırı… 🎭",
    "Çook çok üzüleceğim… Oscar’lık bir dram geliyor! 🎬😭",
    "Peki tamam… Seçimine saygı duyuyorum… *iç çeker* 😞",
    "Şaka yaptım! Hadi evet de lütfen! ❤️🥹",
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector(".no-button");
    const yesButton = document.querySelector(".yes-button");
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
