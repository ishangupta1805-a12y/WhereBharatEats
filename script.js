// Mock Data (Replace with a live API endpoint if desired)
const restaurants = [
    {
        name: "The Golden Fork",
        category: "highly-rated",
        tagLabel: "⭐ Highly Rated",
        desc: "Award-winning fine dining featuring seasonal tasting menus and pristine service.",
        meta: "Rating: 4.9/5 | Fine Dining"
    },
    {
        name: "Apex Steakhouse",
        category: "highly-rated",
        tagLabel: "⭐ Highly Rated",
        desc: "Famous for dry-aged steaks and an extensive, world-class wine collection.",
        meta: "Rating: 4.8/5 | Steakhouse"
    },
    {
        name: "Downtown Burger Joint",
        category: "popular",
        tagLabel: "🔥 Most Popular",
        desc: "The city's busiest spot with legendary smash burgers and always a line around the block.",
        meta: "10k+ Reviews Weekly | Casual"
    },
    {
        name: "Neon Sushi Conveyor",
        category: "popular",
        tagLabel: "🔥 Most Popular",
        desc: "Trending all over social media for its futuristic vibes and fresh, fast conveyor belt sushi.",
        meta: "Trending #1 Local | Japanese"
    },
    {
        name: "The Green Bowl",
        category: "healthy",
        tagLabel: "🥗 Most Healthy",
        desc: "100% organic, locally-sourced macro bowls, cold-pressed juices, and gluten-free treats.",
        meta: "Organic & Vegan Options | Café"
    },
    {
        name: "Sprout & Fuel Kitchen",
        category: "healthy",
        tagLabel: "🥗 Most Healthy",
        desc: "High-protein, low-calorie gourmet meals designed perfectly for fitness enthusiasts.",
        meta: "Keto & Paleo Friendly | Healthy"
    }
];

function displayRestaurants(filteredList) {
    const grid = document.getElementById("restaurant-grid");
    grid.innerHTML = ""; // Clear existing

    filteredList.forEach(repo => {
        const card = document.createElement("div");
        card.className = "card";
        
        card.innerHTML = `
            <div class="card-content">
                <span class="tag ${repo.category}">${repo.tagLabel}</span>
                <h3>${repo.name}</h3>
                <p>${repo.desc}</p>
                <div class="meta">${repo.meta}</div>
            </div>
        `;
        grid.appendChild(card);
    });
}

function filterRestaurants(category) {
    // Update active tab styling
    const buttons = document.querySelectorAll(".tab-btn");
    buttons.forEach(btn => btn.classList.remove("active"));
    event.target.classList.add("active");

    // Filter data
    const filtered = restaurants.filter(r => r.category === category);
    displayRestaurants(filtered);
}

// Initial Load
document.addEventListener("DOMContentLoaded", () => {
    filterRestaurants('highly-rated');
});
