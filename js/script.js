
document.addEventListener("DOMContentLoaded", () => {
    // --- Splash Screen Logic ---
    const splash = document.getElementById("splash");
    if (splash) {
        setTimeout(() => {
            splash.classList.add('hidden');
            setTimeout(() => {
                splash.style.display = "none";
            }, 1000); // Wait for CSS transition (0.8s) to complete
        }, 2500); // 2.5 seconds delay for splash
    }

    // --- Reveal Animation on Scroll ---
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // --- Initialize Cart State ---
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) cartCount.innerText = "0";
});

// --- Cart Functions ---
function toggleCart() {
    const cartWrapper = document.querySelector('.cart-open-wrapper');
    if (cartWrapper) {
        cartWrapper.classList.toggle('active');
        if (cartWrapper.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }
}

// --- Product Modal Functions ---
const productsData = {
    'smart': {
        name: "SMART",
        image: "assets/product-smart.png",
        desc: "Everyday balanced nutrition to support overall growth and cognitive development.",
        price: "₹950",
        badge: "For All Growing Kids",
        benefits: ["Cognitive Support", "Immunity Boost", "Balanced Growth"],
        ingredients: ["Protein Complex", "DHA", "Vitamins A, C, D"]
    },
    'calm': {
        name: "CALM",
        image: "assets/product-calm.png",
        desc: "Sensory-friendly nutrition designed to settle and soothe.",
        price: "₹950",
        badge: "For Neurodiverse Kids",
        benefits: ["Promotes Relaxation", "Digestive Health", "Sensory Friendly"],
        ingredients: ["Chamomile", "Magnesium", "Probiotics"]
    },
    'focus': {
        name: "FOCUS",
        image: "assets/product-focus.jpg",
        desc: "Specialized checks for steady energy and attention support.",
        price: "₹950",
        badge: "For Neurodiverse Kids",
        benefits: ["Sustained Energy", "Focus Enhancement", "Mood Stabilization"],
        ingredients: ["Iron", "Zinc", "Vitamin B12"]
    }
};

function openProductModal(variantKey) {
    const modal = document.getElementById('productModal');
    const product = productsData[variantKey];

    if (modal && product) {
        // Populate Data
        document.getElementById('modalProductImage').src = product.image;
        document.getElementById('modalBadge').innerText = product.badge;
        document.getElementById('modalProductName').innerText = product.name;
        document.getElementById('modalProductDesc').innerText = product.desc;
        document.getElementById('modalPrice').innerText = product.price;

        // Populate lists
        const benefitsContainer = document.getElementById('modalBenefits');
        benefitsContainer.innerHTML = product.benefits.map(b => `<div class="benefit-item">✓ ${b}</div>`).join('');

        const ingredientsContainer = document.getElementById('modalIngredients');
        ingredientsContainer.innerHTML = product.ingredients.map(i => `<span class="ing-tag">${i}</span>`).join('');

        // Reset Qty
        document.getElementById('modalQty').value = 1;

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeProductModal() {
    const modal = document.getElementById('productModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Qty Listeners for Modal
document.addEventListener('click', (e) => {
    if (e.target.id === 'modalMinus') {
        const input = document.getElementById('modalQty');
        let val = parseInt(input.value);
        if (val > 1) input.value = val - 1;
    }
    if (e.target.id === 'modalPlus') {
        const input = document.getElementById('modalQty');
        let val = parseInt(input.value);
        input.value = val + 1;
    }
    if (e.target.id === 'modalAddToCart') {
        // Mock Add to Cart
        const countBadge = document.querySelector('.cart-count');
        let current = parseInt(countBadge.innerText);
        countBadge.innerText = current + parseInt(document.getElementById('modalQty').value);
        closeProductModal();
        toggleCart(); // Open cart to show user
    }
});


// --- Message Widget ---
function toggleMessageWidget() {
    const widget = document.getElementById('messageWidget');
    if (widget) {
        widget.classList.toggle('active');
    }
}

function openWhatsApp() {
    window.open("https://wa.me/918888888888", "_blank");
}
