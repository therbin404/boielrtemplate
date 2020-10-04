//EXERCICE A FAIRE
/*
Générer l'ensemble des balises de cette page https://html5boilerplate.com/ (uniquement celles du body) en Javascript uniquement !
Balise et contenu, en gros une fois la page générée elle doit contenir la meme chose que le site actuel
*/

/* List of tags and their attributes
DIV | class role
SPAN | class 'innerText'
UL | class
LI | /
A | class href 'data-ga-category' 'data-ga-action' 'data-ga-label' 'innerText'
H1 | 'innerText'
P | class 'innerText'
STRONG | innderText
H2 | 'innerText'
H3 | 'innerText'

*/

let tagsAllowed = ['class', 'role', 'innerText', 'innerHTML', 'data-ga-category', 'data-ga-action', 'data-ga-label', 'href'];
function insertTags(tagToInsert, attributesObject, nodeToApply, numberOfClones) {
  let newTag = document.createElement(tagToInsert);

  for (i = 0; i < Object.keys(attributesObject).length; i++) {
    if (!tagsAllowed.includes(Object.keys(attributesObject)[i])) {
      return false;
    }
  }

  for (attribute in attributesObject) {
    if (attribute === 'innerHTML' || attribute === 'innerText') {
      if (attribute === 'innerHTML') {
        newTag.innerHTML = attributesObject['innerHTML'];
      }
      if (attribute === 'innerText') {
        newTag.innerText = attributesObject['innerText'];
      }
    } else {
      newTag.setAttribute(attribute, attributesObject[attribute]);
    }
  }
  for (let i = 0; i < numberOfClones; i++) {
    let clonedNode = newTag.cloneNode(true);
    nodeToApply.appendChild(clonedNode);
  }
}


let bodyDivs = [ // body childs
  'container',
  'site-section',
  'site-section site-section-video',
  'site-section',
  'aside'
];

for (let i=0; i<bodyDivs.length; i++) {
  insertTags('div', {
    class: bodyDivs[i]
  }, document.querySelector('body'), 1);
}

let firstDivDivs = [ // first div of body childs
  ['site-header clearfix', 'banner'], // 2 attributes for the first one ([0])
  'site-promo'
]

for (let i=0; i<firstDivDivs.length; i++) {
  if (i === 0) {
    insertTags('div', {
      class: firstDivDivs[i][0],
      role: firstDivDivs[i][1]
    }, document.querySelector('div'), 1);
  }
  else {
    insertTags('div', {
      class: firstDivDivs[i]
    }, document.querySelector('div'), 1);
  }
}

insertTags('div', {
  class: 'site-logo',
  'innerHTML': 'HTML5 <span class="star">★</span> Boilerplate'
}, document.querySelector('div div'), 1);

insertTags('ul', {
  class: 'site-nav inline-block-list'
}, document.querySelector('div div'), 1);

insertTags('li', {
}, document.querySelector('div div ul'), 3);

insertTags('a', {
  href: 'https://github.com/h5bp/html5-boilerplate',
  'data-ga-category': 'Outbound links',
  'data-ga-action': 'Nav Click',
  'data-ga-label': 'Source Code',
  'innerText': 'Source Code'
}, document.querySelector('div div ul li'), 1);

insertTags('a', {
  href: 'https://github.com/h5bp/html5-boilerplate/blob/v8.0.0/dist/doc/TOC.md',
  'data-ga-category': 'Outbound links',
  'data-ga-action': 'Nav Click',
  'data-ga-label': 'Docs',
  'innerText': 'Docs'
}, document.querySelector('div div ul li').nextElementSibling, 1);

insertTags('a', {
  href: 'https://h5bp.org',
  'data-ga-category': 'Outbound links',
  'data-ga-action': 'Nav Click',
  'data-ga-label': 'Others projects',
  'innerText': 'Others projects'
}, document.querySelector('div div ul li').nextElementSibling.nextElementSibling, 1);

insertTags('h1', {
  'innerText': 'The web’s most popular front-end template'
}, document.querySelector('div div').nextElementSibling, 1);

insertTags('p', {
  class: 'description',
  'innerHTML': 'HTML5 Boilerplate helps you build <strong>fast</strong>, <strong>robust</strong>, and <strong>adaptable</strong> web apps or sites. Kick-start your project with the combined knowledge and effort of 100s of developers, all in one little package.'
}, document.querySelector('div div').nextElementSibling, 1);

insertTags('div', {
  class: 'cta-option'
}, document.querySelector('div div').nextElementSibling, 1);

insertTags('a', {
  class: 'btn btn-download',
  href: 'https://github.com/h5bp/html5-boilerplate/releases/download/v8.0.0/html5-boilerplate_v8.0.0.zip',
  'data-ga-category': 'Download',
  'data-ga-action': 'Download - Top',
  'data-ga-label':'v8.0.0'
}, document.querySelector('div div:last-child div'), 1);

insertTags('strong', {
  'innerText': 'Download'
}, document.querySelector('div div:last-child div a'), 1);

insertTags('span', {
  class: 'version',
  'innerText': 'v8.0.0'
}, document.querySelector('div div:last-child div a'), 1);


insertTags('a', {
  class: 'last-update',
  href: 'https://github.com/h5bp/html5-boilerplate/blob/v8.0.0/CHANGELOG.md',
  'data-ga-category': 'Outbound links',
  'data-ga-action': 'See the CHANGELOG',
  'data-ga-label':'v8.0.0',
  'innerText': 'See the CHANGELOG'
}, document.querySelector('div div:last-child div'), 1);

// END OF DIV CONTAINER

insertTags('div', {
  class: 'container',
}, document.querySelector('div').nextElementSibling, 1);

insertTags('h2', {
  'innerText': 'Save time. Create with confidence.'
}, document.querySelector('div').nextElementSibling.firstElementChild, 1);

insertTags('div', {
  class: 'grid',
}, document.querySelector('div').nextElementSibling.firstElementChild, 1);

insertTags('div', {
  class: 'grid-cell',
}, document.querySelector('div').nextElementSibling.firstElementChild.lastElementChild, 4);

insertTags('h3', {
  'innerHTML': '<span class="star">★</span> Analytics, icons, and more'
}, document.querySelector('div').nextElementSibling.firstElementChild.lastElementChild.firstElementChild, 1);

insertTags('p', {
  'innerText': 'A lean, mobile-friendly HTML template; optimized Google Analytics snippet; placeholder touch-device icon; and docs covering dozens of extra tips and tricks.'
}, document.querySelector('div').nextElementSibling.firstElementChild.lastElementChild.firstElementChild, 1);

insertTags('h3', {
  'innerHTML': '<span class="star">★</span> Normalize.css and helpers'
}, document.querySelector('div').nextElementSibling.firstElementChild.lastElementChild.firstElementChild.nextElementSibling, 1);

insertTags('p', {
  'innerHTML': 'Includes <a href="https://necolas.github.io/normalize.css/">Normalize.css</a> — a modern, HTML5-ready alternative to CSS resets — and further base styles, helpers, media queries, and print styles.'
}, document.querySelector('div').nextElementSibling.firstElementChild.lastElementChild.firstElementChild.nextElementSibling, 1);

insertTags('h3', {
  'innerHTML': '<span class="star">★</span> Modernizr'
}, document.querySelector('div').nextElementSibling.firstElementChild.lastElementChild.lastElementChild.previousElementSibling, 1);

insertTags('p', {
  'innerHTML': 'Get the latest minified versions of Modernizr: <a href="https://modernizr.com/">Modernizr</a> feature detection library, complete with a custom build configuration'
}, document.querySelector('div').nextElementSibling.firstElementChild.lastElementChild.lastElementChild.previousElementSibling, 1);

insertTags('h3', {
  'innerHTML': '<span class="star">★</span> High performance'
}, document.querySelector('div').nextElementSibling.firstElementChild.lastElementChild.lastElementChild, 1);

insertTags('p', {
  'innerHTML': 'Apache settings to help you deliver excellent site performance. We independently maintain <a href="https://github.com/h5bp/server-configs">server configs</a> for multiple platforms.'
}, document.querySelector('div').nextElementSibling.firstElementChild.lastElementChild.lastElementChild, 1);

//END OF DIV SITE-SECTION

insertTags('h2', {
  'innerText': 'Introduction to v8'
}, document.querySelector('div').nextElementSibling.nextElementSibling, 1);

insertTags('div', {
  class: 'content'
}, document.querySelector('div').nextElementSibling.nextElementSibling, 1);

insertTags('p', {
  class: 'new',
  'innerText': 'What\'s new?'
}, document.querySelector('div').nextElementSibling.nextElementSibling.lastElementChild, 1);

insertTags('ul', {
  class: 'new',
}, document.querySelector('div').nextElementSibling.nextElementSibling.lastElementChild, 1);

let contentOfLisThirdDiv = [
  'Added a sample package.json with basic Parcel commands to jump start your app development',
  'Added sample Open Graph metadata',
  'Updated Modernizr and main.css',
  'Removed jQuery',
  'Set anonymizeIp to true in Google Analytics snippet',
  'Removed Browser Upgrade Prompt',
  'That\'s just the start of all the goodness. '
];

for (let i = 0; i < contentOfLisThirdDiv.length; i ++) {
  insertTags('li', {
    'innerText': contentOfLisThirdDiv[i]
  }, document.querySelector('div').nextElementSibling.nextElementSibling.lastElementChild.lastElementChild, 1);
}

insertTags('a', {
  href: 'https://github.com/h5bp/html5-boilerplate/blob/master/CHANGELOG.md',
  'innerText': 'Check out the Changelog for all the details.'
}, document.querySelector('div').nextElementSibling.nextElementSibling.lastElementChild.lastElementChild.lastElementChild, 1);

//END OF SITE-SECTION SITE-SECTION-VIDEO

insertTags('h2', {
  'innerText': 'Who uses HTML5 Boilerplate?'
}, document.querySelector('div').nextElementSibling.nextElementSibling.nextElementSibling, 1);

insertTags('p', {
  class: 'in-the-wild'
}, document.querySelector('div').nextElementSibling.nextElementSibling.nextElementSibling, 1);

insertTags('div', {
  class: 'cta-option'
}, document.querySelector('div').nextElementSibling.nextElementSibling.nextElementSibling, 1);

let fourthDivLinksInParagraph = [
  ['https://www.microsoft.com/surface/', 'Microsoft'],
  ['https://data.nasa.gov/', 'NASA'],
  ['http://www.nikeskateboarding.com/', 'Nike'],
  ['https://www.barackobama.com/', 'Barack Obama'],
  ['https://www.itv.com/news/', 'ITV News'],
  ['https://creativecommons.org/', 'Creative Commons'],
  ['https://auspost.com.au/', 'Australia Post'],
  ['https://github.com/h5bp/html5-boilerplate/wiki/sites', 'many more']
]

for (let i = 0; i < fourthDivLinksInParagraph.length; i ++) {
  insertTags('a', {
    href: fourthDivLinksInParagraph[i][0],
    'innerText': fourthDivLinksInParagraph[i][1]
  }, document.querySelector('div').nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling, 1);
  document.querySelector('div').nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling.appendChild(document.createTextNode(', '));
}

insertTags('a', {
  class: 'btn btn-download',
  href: 'https://github.com/h5bp/html5-boilerplate/releases/download/v8.0.0/html5-boilerplate_v8.0.0.zip',
  'data-ga-category': 'Download',
  'data-ga-action': 'Download - bottom',
  'data-ga-label': 'v8.0.0'
}, document.querySelector('div').nextElementSibling.nextElementSibling.nextElementSibling.lastElementChild, 1);

insertTags('strong', {
  'innerText':'Download'
}, document.querySelector('div').nextElementSibling.nextElementSibling.nextElementSibling.lastElementChild.firstElementChild, 1);

insertTags('span', {
  class: 'version',
  'innerText':'v8.0.0'
}, document.querySelector('div').nextElementSibling.nextElementSibling.nextElementSibling.lastElementChild.firstElementChild, 1);

//END OF SITE-SECTION

insertTags('div', {
  class: 'container'
}, document.querySelector('div').nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling, 1);

insertTags('ul', {
  class: 'inline-block-list'
}, document.querySelector('div').nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild, 1);

for (let i = 0; i < 3; i ++) {
  insertTags('li', {
  }, document.querySelector('div').nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.firstElementChild, 1);
}

insertTags('a', {
  href: 'https://github.com/h5bp/html5-boilerplate/issues',
  'data-ga-category': 'Outbound links',
  'data-ga-action': 'Footer click',
  'data-ga-label': 'Report issues'
}, document.querySelector('div').nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.firstElementChild.firstElementChild, 1);

insertTags('span', {
  class: 'Icon Icon--github'
}, document.querySelector('div').nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.firstElementChild.firstElementChild.firstElementChild, 1);
document.querySelector('div').nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.firstElementChild.firstElementChild.firstElementChild.appendChild(document.createTextNode('Report issues'));

insertTags('a', {
  href: 'https://stackoverflow.com/questions/tagged/html5boilerplate',
  'data-ga-category': 'Outbound links',
  'data-ga-action': 'Footer click',
  'data-ga-label': 'Help on Stack Overflow'
}, document.querySelector('div').nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.firstElementChild.firstElementChild.nextElementSibling, 1);

insertTags('span', {
  class: 'Icon Icon--stackoverflow'
}, document.querySelector('div').nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.firstElementChild.firstElementChild.nextElementSibling.firstElementChild, 1);
document.querySelector('div').nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.firstElementChild.firstElementChild.nextElementSibling.firstElementChild.appendChild(document.createTextNode(' Help on Stack Overflow'));

insertTags('a', {
  href: 'https://h5bp.net',
  'data-ga-category': 'Outbound links',
  'data-ga-action': 'Footer click',
  'data-ga-label': 'View the showcase'
}, document.querySelector('div').nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.firstElementChild.lastElementChild, 1);

insertTags('span', {
  class: 'Icon Icon--html5'
}, document.querySelector('div').nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.firstElementChild.lastElementChild.firstElementChild, 1);
document.querySelector('div').nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.firstElementChild.lastElementChild.firstElementChild.appendChild(document.createTextNode(' View the showcase'));