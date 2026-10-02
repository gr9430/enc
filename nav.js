// Site-wide navigation and footer
(function() {
  // Calculate path to root based on current URL depth
  const depth = window.location.pathname.replace(/\/[^/]*$/, '').split('/').filter(Boolean).length;
  const root = depth === 0 ? './' : '../'.repeat(depth);

  // Navigation links
  const links = [
    ['Home', 'enc'],
    ['1101', 'enc1101/lectures'],
    ['1102', 'enc1102/lectures'],
    ['Files', 'files'],
    ['Q&A', 'enceportfolios/q-a']
  ];

  // Create nav element
  const nav = document.createElement('nav');
  const ul = document.createElement('ul');
  links.forEach(([label, path]) => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = root + path;
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
