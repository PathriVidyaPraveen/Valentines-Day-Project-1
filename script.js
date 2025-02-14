document.addEventListener("DOMContentLoaded", function() {
    const noBtn = document.getElementById('noBtn');
    const yesBtn = document.getElementById('yesBtn');
    const container = document.querySelector('.buttons-container');
    const proposalDiv = document.querySelector('.proposal');

    // Set initial positions
    let isFirstMove = true;

    function moveButton() {
        const containerRect = container.getBoundingClientRect();
        const btnWidth = noBtn.offsetWidth;
        const btnHeight = noBtn.offsetHeight;

        // Calculate available space
        const maxX = containerRect.width - btnWidth;
        const maxY = containerRect.height - btnHeight;

        // Generate random positions
        const newX = Math.random() * maxX;
        const newY = Math.random() * maxY;

        // Apply new positions
        noBtn.style.left = `${newX}px`;
        noBtn.style.top = `${newY}px`;

        // Remove initial positioning
        if(isFirstMove) {
            noBtn.style.removeProperty('right');
            isFirstMove = false;
        }
    }

    // Event listeners
    noBtn.addEventListener('mouseover', moveButton);
    noBtn.addEventListener('click', moveButton);

    yesBtn.addEventListener('click', function() {
        proposalDiv.innerHTML = `
            <h2 style="color: #ff4081; margin: 0;">
               
            🎉 Hurray!!! I love uuu!!😍😍😍😘😘 💍
            </h2>
        `;
    });
    noBtn.addEventListener('click', function() {
        proposalDiv.innerHTML = `
            <h2 style="color: #ff4081; margin: 0;">
               
            No Problem!! You are always the most special person in my life 😊😊
            </h2>
        `;
    });
});