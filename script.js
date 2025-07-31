// Responsive Dropdown Navigation
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
  // Optional: close menu when a link is clicked (for better UX)
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 700) navLinks.classList.remove('open');
    });
  });
}
// --- Search Popup Logic ---
const searchBtn = document.getElementById('searchBtn');
const searchPopup = document.getElementById('searchPopup');
const closeSearch = document.getElementById('closeSearch');
const siteSearchForm = document.getElementById('siteSearchForm');
const siteSearchInput = document.getElementById('siteSearchInput');
const searchResults = document.getElementById('searchResults');

// List of site files/pages to search (add more as needed)
const siteFiles = [
  { name: 'Home', file: 'index.html' },
  { name: 'About', file: 'about.html' },
  { name: 'Contact', file: 'contact.html' },
  { name: 'Creative Agency Site', file: 'creative-agency-site.html' },
  { name: 'Modern Portfolio', file: 'modern-portfolio.html' },
  { name: 'Brand Identity', file: 'brand-identity.html' },
  { name: 'Landing', file: 'landing.html' }
];

if (searchBtn && searchPopup && closeSearch && siteSearchForm && siteSearchInput && searchResults) {
  searchBtn.addEventListener('click', () => {
    searchPopup.style.display = 'flex';
    siteSearchInput.value = '';
    searchResults.innerHTML = '';
    setTimeout(() => siteSearchInput.focus(), 100);
  });
  closeSearch.addEventListener('click', () => {
    searchPopup.style.display = 'none';
  });
  siteSearchForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const query = siteSearchInput.value.trim().toLowerCase();
    searchResults.innerHTML = '';
    if (!query) return;
    const matches = siteFiles.filter(page =>
      page.name.toLowerCase().includes(query) ||
      page.file.toLowerCase().includes(query)
    );
    if (matches.length === 0) {
      searchResults.innerHTML = '<li>No results found.</li>';
    } else {
      matches.forEach(page => {
        const li = document.createElement('li');
        li.innerHTML = `<a href="${page.file}">${page.name}</a>`;
        searchResults.appendChild(li);
      });
    }
  });
  // Optional: close popup on Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && searchPopup.style.display === 'flex') {
      searchPopup.style.display = 'none';
    }
  });
}
// Create popup form HTML
const popup = document.createElement('div');
popup.id = 'popupForm';
popup.style.display = 'none';
popup.innerHTML = `
  <div class="popup-overlay"></div>
  <div class="popup-content">
    <h3>Contact Us</h3>
    <form id="contactForm">
      <input type="text" name="name" placeholder="Your Name" required />
      <input type="email" name="email" placeholder="Your Email" required />
      <textarea name="message" placeholder="Your Message" required></textarea>
      <div class="popup-actions">
        <button type="submit">Send</button>
        <button type="button" id="closePopup">Cancel</button>
      </div>
    </form>
  </div>
`;
document.body.appendChild(popup);

// Show popup on button click
document.getElementById('actionBtn').addEventListener('click', function() {
    popup.style.display = 'flex';
});

// Close popup
document.getElementById('closePopup').addEventListener('click', function() {
    popup.style.display = 'none';
});

// Optional: handle form submit
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    popup.style.display = 'none';
    alert('Thank you for contacting us!');
});
