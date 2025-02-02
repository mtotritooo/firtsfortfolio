const navMenu = document.querySelector('.menu');
const toggleMenu = document.querySelector('.toggle');
const form = document.querySelector('form');
const emailInput = document.querySelector('input[type="email"]');
const nameInput = document.querySelector('input[type="text"]');
const passwordInput = document.createElement('input'); 
const scrollToTopBtn = document.createElement('button');
const header = document.querySelector('nav');
const cookieBanner = document.createElement('div');

toggleMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

passwordInput.type = 'password';
passwordInput.placeholder = 'Password';
passwordInput.style.marginBottom = '12px';
form.insertBefore(passwordInput, emailInput.nextSibling);


window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.background = '#333';
        header.style.color = '#fff';
    } else {
        header.style.background = '#fff';
        header.style.color = '#000';
    }
});


async function fetchGitHubRepos() {
    try {
        const response = await fetch('https://api.github.com/users/Mariami/repos');
        const repos = await response.json();
        console.log('GitHub Repositories:', repos);
    } catch (error) {
        console.error('Error fetching GitHub data', error);
    }
}
fetchGitHubRepos();

cookieBanner.innerHTML = `
    <div style="position:fixed;bottom:10px;width:100%;background:#222;color:#fff;padding:10px;text-align:center;">
        This website uses cookies. <button id="acceptCookies">Accept</button>
    </div>
`;
document.body.appendChild(cookieBanner);

document.getElementById('acceptCookies').addEventListener('click', () => {
    localStorage.setItem('cookiesAccepted', 'true');
    cookieBanner.style.display = 'none';
});

if (localStorage.getItem('cookiesAccepted')) {
    cookieBanner.style.display = 'none';
}




