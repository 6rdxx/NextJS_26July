function changeTheme(button) {
    const body = document.querySelector('body');
    const header = document.querySelector('header'); 
    const footer = document.querySelector('footer'); 
    const navbar = document.getElementById('navbar'); 

    if (body.classList.contains('darkMode')) {

        button.innerText = '🌘';
        body.classList.remove('darkMode');
        
        document.querySelectorAll('.navbar a, .namepage a, footer').forEach(el => el.style.color = ''); 
        header.style.backgroundColor = ''; 
        footer.style.backgroundColor = ''; 
        navbar.style.backgroundColor = '';
    } else {

        button.innerText = '🌔';
        body.classList.add('darkMode');

        document.querySelectorAll('.navbar a, .namepage a, footer').forEach(el => el.style.color = '#FFC83D'); 
        header.style.backgroundColor = 'black'; 
        footer.style.backgroundColor = 'black'; 
        navbar.style.backgroundColor = 'black'; 
    }
}
