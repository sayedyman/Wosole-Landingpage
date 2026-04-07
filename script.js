document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide icons
    lucide.createIcons();

    // Header Scroll Effect
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
            header.style.boxShadow = 'var(--shadow-sm)';
        } else {
            header.style.boxShadow = 'none';
        }
    });

    // Accordion Logic
    const accordionItems = document.querySelectorAll('.accordion__item');

    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion__header');
        
        header.addEventListener('click', () => {
            const isActive = item.classList.contains('is-active');
            const content = item.querySelector('.accordion__content');
            
            // Close all other items (optional: remove if you want multiple items open)
            accordionItems.forEach(otherItem => {
                const otherContent = otherItem.querySelector('.accordion__content');
                const otherHeader = otherItem.querySelector('.accordion__header');
                
                otherItem.classList.remove('is-active');
                otherHeader.setAttribute('aria-expanded', 'false');
                otherContent.style.maxHeight = null;
            });

            // Toggle current item
            if (!isActive) {
                item.classList.add('is-active');
                header.setAttribute('aria-expanded', 'true');
                // Calculate actual height needed for smooth transition
                const inner = item.querySelector('.accordion__inner');
                content.style.maxHeight = inner.offsetHeight + 40 + 'px'; // +40 for top padding/margins
            }
        });
    });
});
