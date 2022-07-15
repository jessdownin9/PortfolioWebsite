// Make banner height fill the screen

let banner = document.getElementsByClassName('banner')[0];
banner.style.height = window.innerHeight + 'px';

// Push main (all other sections) below banner

let main = document.getElementsByTagName('main')[0];
main.style.position = 'absolute';
main.style.top = window.innerHeight + 'px';

// Make about section height fill the screen

let about = document.getElementsByClassName('about')[0];
about.style.height = window.innerHeight + 'px';

// Push projects section below about section

let projects = document.getElementsByClassName('projects')[0];
projects.style.position = 'absolute';
projects.style.top = window.innerHeight + 'px';

// Make projects section height fill the screen

projects.style.height = window.innerHeight + 'px';

// Push contact section below projects section

let contact = document.getElementsByClassName('contact')[0];
contact.style.position = 'absolute';
contact.style.top = (window.innerHeight * 2) + 'px';

// Make contact section height fill the screen

contact.style.height = window.innerHeight + 'px';

// Push footer to bottom of page

let footer = document.getElementsByTagName('footer')[0];
footer.style.position = 'absolute';
footer.style.top = (window.innerHeight * 3) + 'px';