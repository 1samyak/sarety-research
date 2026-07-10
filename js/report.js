// Table of Contents Navigation
const tocLinks = document.querySelectorAll('.toc a');
const sections = document.querySelectorAll('[id^="investment-thesis"], [id^="business-overview"], [id^="industry-analysis"], [id^="financial-performance"], [id^="valuation"], [id^="competitive-advantages"], [id^="risk-factors"], [id^="conclusion"]');

// Add click handlers to TOC links
tocLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Close mobile menu if open
      document.body.classList.remove('menu-open');
    }
  });
});

// Track reading progress
function updateProgress() {
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = window.scrollY;
  const progress = (scrolled / scrollHeight) * 100;
  // Can be used to update a progress bar if needed
}

window.addEventListener('scroll', updateProgress);

// Print/Download PDF functionality
const printButton = document.querySelector('[onclick="window.print()"]');
if (printButton) {
  printButton.addEventListener('click', () => {
    window.print();
  });
}

// Add highlight on scroll to active section
const observerOptions = {
  threshold: 0.5
};

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      // Update TOC highlight if needed
      tocLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${id}`) {
          link.classList.add('active');
        }
      });
    }
  });
}, observerOptions);

sections.forEach(section => {
  if (section) {
    sectionObserver.observe(section);
  }
});

// Add copy-to-clipboard for data tables (optional)
document.querySelectorAll('.data-table').forEach((table, index) => {
  table.addEventListener('contextmenu', (e) => {
    // Right-click context menu can be added here for table copying
  });
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
  // Ctrl/Cmd + P for print
  if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
    e.preventDefault();
    window.print();
  }
  // Ctrl/Cmd + F for find
  // Browser default handles this
});

// Initialize
window.addEventListener('DOMContentLoaded', () => {
  console.log('Report loaded successfully');
  // Add any initialization code here
});

// Add smooth scroll behavior
document.documentElement.style.scrollBehavior = 'smooth';
