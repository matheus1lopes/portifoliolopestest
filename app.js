// Adiciona um evento de clique aos links de navegação
const links = document.querySelectorAll('header nav a');

links.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const href = link.getAttribute('href');
        const section = document.querySelector(href);
        section.scrollIntoView({ behavior: 'smooth' });
    });
});

// Adiciona um evento de scroll aos links de navegação
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            document.querySelector('header nav a[href="#' + id + '"]').classList.add('active');
        } else {
            const id = entry.target.getAttribute('id');
            document.querySelector('header nav a[href="#' + id + '"]').classList.remove('active');
        }
    });
});

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});