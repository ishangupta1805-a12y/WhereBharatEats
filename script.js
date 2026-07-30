const restaurants = [
    {
        name: "Indian Accent",
        location: "📍 New Delhi",
        category: "highly-rated",
        tagLabel: "⭐ Top Rated Fine Dining",
        desc: "World-renowned modern Indian culinary masterpiece. Famous for its inventive tasting menus and spectacular blue cheese naan.",
        meta: "Rating: 4.9/5 | Modern Indian Gastronomy"
    },
    {
        name: "Peshawri (ITC Maratha)",
        location: "📍 Mumbai",
        category: "highly-rated",
        tagLabel: "⭐ Award-Winning Icon",
        desc: "An unmatched fine dining experience showcasing slow-cooked Dal Bukhara and rustic, perfectly charred tandoori meats.",
        meta: "Rating: 4.8/5 | Authentic North-West Frontier"
    },
    {
        name: "Karavalli",
        location: "📍 Bengaluru",
        category: "highly-rated",
        tagLabel: "⭐ Heritage Classic",
        desc: "Celebrated for preserving ancestral coastal recipes. Pristine seafood served on banana leaves in a beautiful heritage setting.",
        meta: "Rating: 4.8/5 | Coastal & South Indian Heritage"
    },
    {
        name: "Rameshwaram Cafe",
        location: "📍 Bengaluru",
        category: "popular",
        tagLabel: "🔥 Viral Crowd Favorite",
        desc: "Massive daily crowds waiting in lines for ultra-crispy Ghee Podi Idlis, legendary filter coffee, and decadent butter-soaked dosas.",
        meta: "50k+ Customers Weekly | South Indian QSR"
    },
    {
        name: "Britannia & Co.",
        location: "📍 Mumbai",
        category: "popular",
        tagLabel: "🔥 Legendary Local Spot",
        desc: "A historic, iconic establishment packed every single day for its legendary Berry Pulao, Sali Boti, and vintage old-world charm.",
        meta: "Trending For Decades | Parsi Heritage Cafe"
    },
    {
        name: "Paranthe Wali Gali",
        location: "📍 Old Delhi",
        category: "popular",
        tagLabel: "🔥 Ultimate Street Food Hub",
        desc: "The heartbeat of Old Delhi street food. Famous across India for serving unique deep-fried, stuffed paranthas for generations.",
        meta: "The Pride of Chandni Chowk | Street Food"
    },
    {
        name: "Fabcafe by Fabindia",
        location: "📍 Pan-India",
        category: "healthy",
        tagLabel: "🥗 Nutritious Indian Twist",
        desc: "An innovative menu reinventing Indian favorites using almond flour, jaggery, quinoa, and cold-pressed nutrient-rich oils.",
        meta: "Gluten-Free & Dairy-Free Friendly | Wellness Cafe"
    },
    {
        name: "Sante Spa Cuisine",
        location: "📍 Pune & Mumbai",
        category: "healthy",
        tagLabel: "🥗 Fresh Vegan & Organic",
        desc: "Beautifully presented dishes made entirely with spa-fresh, organic ingredients. Famous for its chlorophyll gelatos and ragi pizzas.",
        meta: "100% Vegetarian & Clean Eating | Earth Cafe"
    },
    {
        name: "The Yoga House",
        location: "📍 Mumbai",
        category: "healthy",
        tagLabel: "🥗 Macrobiotic Mindful Eats",
        desc: "A peaceful oasis offering wholesome, traditional Indian ancient grains, freshly blended macrobiotic juices, and detox salads.",
        meta: "Sattvik & Clean Fuel | Healthy Lifestyle"
    }
];

function displayRestaurants(filteredList) {
    const grid = document.getElementById("restaurant-grid");
    grid.innerHTML = ""; 

    filteredList.forEach(item => {
        const card = document.createElement("div");
        card.className = "card";
        
        card.innerHTML = `
            <div class="card-content">
                <span class="tag ${item.category}">${item.tagLabel}</span>
                <div class="location">${item.location}</div>
                <h3>${item.name}</h3>
                <p>${item.desc}</p>
                <div class="meta">${item.meta}</div>
            </div>
        `;
        grid.appendChild(card);
    });
}

function filterRestaurants(category) {
    const buttons = document.querySelectorAll(".tab-btn");
    buttons.forEach(btn => btn.classList.remove("active"));
    
    if(window.event && window.event.target) {
        window.event.target.classList.add("active");
    }

    const filtered = restaurants.filter(r => r.category === category);
    displayRestaurants(filtered);
}

document.addEventListener("DOMContentLoaded", () => {
    filterRestaurants('highly-rated');
});
