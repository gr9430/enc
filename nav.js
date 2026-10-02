// Site-wide navigation and footer
(function() {
  // Base path for the site (adjust if deployed elsewhere)
  const base = '/enc/';

  // Navigation links (paths relative to base)
  const links = [
    ['Home', ''],
    ['1101', '1101/lectures/'],
    ['1102', '1102/lectures/'],
    ['Files', 'files/'],
    ['Q&A', 'eportfolios/q-a/']
  ];

  // Create nav element
  const nav = document.createElement('nav');
  const ul = document.createElement('ul');
  links.forEach(([label, path]) => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = base + path;
    a.textContent = label;
    li.appendChild(a);
    ul.appendChild(li);
  });
  nav.appendChild(ul);

  // Create footer element
  const footer = document.createElement('footer');
  footer.innerHTML = '<p><center>Glenn S. Ritchey III · Adjunct Instructor · <a href="mailto:glenn.ritchey@ucf.edu">glenn.ritchey@ucf.edu</a></center></p>';

  // Insert nav after header.banner
  const header = document.querySelector('header.banner');
  if (header && header.nextSibling) {
    header.parentNode.insertBefore(nav, header.nextSibling);
  }

  // Insert footer at end of body
  document.body.appendChild(footer);
})();
