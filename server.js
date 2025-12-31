let total = 0;
let items = 0;

function addToCart(name, price) {
    // Animasi sederhana
    const btn = event.target;
    const originalText = btn.innerText;
    
    btn.innerText = "MASUK KERANJANG! ✅";
    btn.style.background = "#CCFF00";
    btn.style.color = "black";
    
    setTimeout(() => {
        btn.innerText = originalText;
        btn.style.background = "";
        btn.style.color = "";
    }, 1000);

    // Update Logic
    total += price;
    items++;
    
    // Update UI
    document.getElementById('count').innerText = items;
    
    // Notifikasi lucu
    console.log(`Lo baru aja beli ${name}. Sip!`);
}

// Efek Scroll Parallax sederhana
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const heroImg = document.querySelector('.cup-mockup');
    heroImg.style.transform = `translateY(${scrolled * 0.5}px)`;
});
