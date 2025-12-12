let yesButton = document.getElementById('yesButton');
let noButton = document.getElementById('noButton');
let question = document.getElementById('soru');
let successMessage = document.getElementById('successMessage');
let buttonsContainer = document.querySelector('.buttons');
let currentSize = 1.2; // Başlangıç font büyüklüğü (CSS'teki 1.2em'e karşılık gelir)

// HAYIR butonuna basıldığında
function handleNo() {
    // EVET butonunu yavaşça büyüt
    currentSize += 0.5; // Her tıklamada 0.5 em büyüt
    yesButton.style.fontSize = currentSize + 'em'; 
    // Padding'i de büyüterek butonu daha belirgin hale getir
    yesButton.style.padding = (10 + (currentSize - 1.2) * 5) + 'px ' + (20 + (currentSize - 1.2) * 10) + 'px'; 

    // EVET butonu çok büyüdüğünde HAYIR butonunu gizle
    if (currentSize > 6) { 
        noButton.style.display = 'none';
        question.textContent = "Hâlâ HAYIR mı? Sanırım seçeneğin kalmadı 😉"; // Mesajı değiştir
    }
}

// EVET butonuna basıldığında
function handleYes() {
    // Soru ve butonları gizle
    question.style.display = 'none';
    buttonsContainer.style.display = 'none';

    // Başarı mesajını ayarla
    successMessage.innerHTML = 'Seni çok seviyorum güzelimmm!';
    
    // Mesajı göster
    successMessage.style.display = 'block';
    
    // Arka planı da değiştirelim
    document.body.style.backgroundColor = '#c8e6c9'; 
}