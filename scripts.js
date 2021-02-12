const data = [
    {
      "id": 1,
      "company": "Photosnap",
      "logo": "./images/photosnap.svg",
      "new": true,
      "featured": true,
      "position": "Senior Frontend Developer",
      "role": "Frontend",
      "level": "Senior",
      "postedAt": "1d ago",
      "contract": "Full Time",
      "location": "USA Only",
      "languages": ["HTML", "CSS", "JavaScript"],
      "tools": []
    },
    {
      "id": 2,
      "company": "Manage",
      "logo": "./images/manage.svg",
      "new": true,
      "featured": true,
      "position": "Fullstack Developer",
      "role": "Fullstack",
      "level": "Midweight",
      "postedAt": "1d ago",
      "contract": "Part Time",
      "location": "Remote",
      "languages": ["Python"],
      "tools": ["React"]
    },
    {
      "id": 3,
      "company": "Account",
      "logo": "./images/account.svg",
      "new": true,
      "featured": false,
      "position": "Junior Frontend Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "2d ago",
      "contract": "Part Time",
      "location": "USA Only",
      "languages": ["JavaScript"],
      "tools": ["React", "Sass"]
    },
    {
      "id": 4,
      "company": "MyHome",
      "logo": "./images/myhome.svg",
      "new": false,
      "featured": false,
      "position": "Junior Frontend Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "5d ago",
      "contract": "Contract",
      "location": "USA Only",
      "languages": ["CSS", "JavaScript"],
      "tools": []
    },
    {
      "id": 5,
      "company": "Loop Studios",
      "logo": "./images/loop-studios.svg",
      "new": false,
      "featured": false,
      "position": "Software Engineer",
      "role": "FullStack",
      "level": "Midweight",
      "postedAt": "1w ago",
      "contract": "Full Time",
      "location": "Worldwide",
      "languages": ["JavaScript"],
      "tools": ["Ruby", "Sass"]
    },
    {
      "id": 6,
      "company": "FaceIt",
      "logo": "./images/faceit.svg",
      "new": false,
      "featured": false,
      "position": "Junior Backend Developer",
      "role": "Backend",
      "level": "Junior",
      "postedAt": "2w ago",
      "contract": "Full Time",
      "location": "UK Only",
      "languages": ["Ruby"],
      "tools": ["RoR"]
    },
    {
      "id": 7,
      "company": "Shortly",
      "logo": "./images/shortly.svg",
      "new": false,
      "featured": false,
      "position": "Junior Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "2w ago",
      "contract": "Full Time",
      "location": "Worldwide",
      "languages": ["HTML", "JavaScript"],
      "tools": ["Sass"]
    },
    {
      "id": 8,
      "company": "Insure",
      "logo": "./images/insure.svg",
      "new": false,
      "featured": false,
      "position": "Junior Frontend Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "2w ago",
      "contract": "Full Time",
      "location": "USA Only",
      "languages": ["JavaScript"],
      "tools": ["Vue", "Sass"]
    },
    {
      "id": 9,
      "company": "Eyecam Co.",
      "logo": "./images/eyecam-co.svg",
      "new": false,
      "featured": false,
      "position": "Full Stack Engineer",
      "role": "Fullstack",
      "level": "Midweight",
      "postedAt": "3w ago",
      "contract": "Full Time",
      "location": "Worldwide",
      "languages": ["JavaScript", "Python"],
      "tools": ["Django"]
    },
    {
      "id": 10,
      "company": "The Air Filter Company",
      "logo": "./images/the-air-filter-company.svg",
      "new": false,
      "featured": false,
      "position": "Front-end Dev",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "1mo ago",
      "contract": "Part Time",
      "location": "Worldwide",
      "languages": ["JavaScript"],
      "tools": ["React", "Sass"]
    }
  ]

let dataClone = [...data].reverse();
let filteredTag = [];

const itemWrapper = document.querySelector('.wrapper');
const filterWrapper = document.querySelector('.filter');
const filteredTagWrapper = document.querySelector('.filtered');

creatItemHtmlContent();

// Hide filtered when not choosing tag filtered
filterWrapper.classList.remove('filter--active');

// Tag click behavior
const allItemTagWrapper = document.querySelectorAll('.item__tag-wrapper');

allItemTagWrapper.forEach((item) => {
  item.addEventListener('click', function(e){
    if(e.target.classList.contains('item__tag')) {
      // console.log(e.target.innerHTML);
      const tag = e.target.innerHTML;
      if(filteredTag.indexOf(tag) === -1) {
        filteredTag.push(tag);
        creatFilteredTagHtml(tag);
      }
    filterWrapper.classList.add('filter--active');
    } 
  })
})

function creatItemHtmlContent() {
  // Creating Tag list 
    dataClone.forEach((item) => {
      let tagListHTML = '';

      item.languages?.forEach((lang)=> {
        tagListHTML += `<div class="item__tag tag" data-languages="${lang}">${lang}</div>`;
      });

      item.tools?.forEach((tool) => {
        tagListHTML += `<div class="item__tag tag" data-tools="${tool}">${tool}</div>`;
      })
    // Push them to html
    itemWrapper.insertAdjacentHTML('afterbegin', `
      <div class="item ${item.featured ? 'featured' : ''}">
          <div class="item__logo">
            <img src="${item.logo}" alt="">
          </div>
          <div class="item__content">
            <div class="item__content--1">
              <div class="item__company text--cyan">${item.company}</div>
              ${item.new ? '<div class="item__new">New!</div>' : ''}
              ${item.featured ? '<div class="item__featured">Featured</div>' : ''}
            </div>
            <div class="item__content--2">
              <div class="item__position"><a href="#">${item.position}</a></div>
            </div>
            <div class="item__content--3">
              <div class="item__postedat">${item.postedAt}</div>
              <div class="item__dot"></div>
              <div class="item__contract">${item.contract}</div>
              <div class="item__dot"></div>
              <div class="item__location">${item.location}</div>
            </div>
          </div>
          <div class="item__tag-wrapper text--cyan">
            <div class="item__tag tag" data-role="${item.role}">${item.role}</div>
            <div class="item__tag tag" data-level="${item.level}">${item.level}</div>
            ${tagListHTML}
          </div>
      </div>
      `)
  })
};

function creatFilteredTagHtml(tag){
    filteredTagWrapper.insertAdjacentHTML('afterbegin', `
      <div class="filtered__tag tag">${tag}
      <span class="filtered__remove-icon"><img src="images/icon-remove.svg" alt=""></span>
      </div>
    `)
}




