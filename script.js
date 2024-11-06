// Enhanced Welcome Message with Personalized Touch
document.addEventListener('DOMContentLoaded', () => {
    const heroText = document.querySelector('.hero-text');
    const hour = new Date().getHours();
    const compliments = [
        "You're amazing!",
        "You're our favorite guest!",
        "Your presence makes our day!",
        "You're the reason we serve with joy!",
        "We’re thrilled to see you!",
    ];
    const randomCompliment = compliments[Math.floor(Math.random() * compliments.length)];

    let greeting = "";
    let icon = "";

    if (hour < 12) {
        greeting = "Good Morning! Start your day with our coffee.";
        icon = "🌅";
    } else if (hour < 18) {
        greeting = "Good Afternoon! Take a break with our delicious brunch.";
        icon = "☕";
    } else {
        greeting = "Good Evening! Join us for a delightful dinner.";
        icon = "🌙";
    }

    const messageHTML = `
        <div class="welcome-message">
            <p class="main-message">${greeting} ${icon}</p>
            <p class="compliment">${randomCompliment}</p>
        </div>
    `;

    heroText.innerHTML += messageHTML;
});
