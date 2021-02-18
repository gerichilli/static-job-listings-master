let filteredTag = [];
let removeIconAll;

const itemWrapper = document.querySelector('.wrapper');
const filterWrapper = document.querySelector('.filter');
const filteredTagWrapper = document.querySelector('.filtered');
const clearButton = document.querySelector('.filter__clear');

const creatItemContent = function (data) {
  let itemHtml = '';
  // Creating Tag list 
  data.forEach((item) => {
    let tagListHTML = '';

    item.languages?.forEach((lang) => {
      tagListHTML += `<div class="item__tag tag" data-languages="${lang}">${lang}</div>`;
    });

    item.tools?.forEach((tool) => {
      tagListHTML += `<div class="item__tag tag" data-tools="${tool}">${tool}</div>`;
    })

  // Return html
  itemHtml += `
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
    `
  })

  return itemHtml;
};

const creatItemContentHtml = function (data) {
  html = creatItemContent(data);
  itemWrapper.innerHTML = html;
}

const creatFilteredTagHtml = function () {
  let html = '';
  if (filteredTag) 
    filteredTag.forEach((tag) => {
      html += `
      <div class="filtered__tag tag">
      <span class="filtered__tag-content">${tag}</span>
      <span class="filtered__remove-icon" data-tag="${tag}"><img src="images/icon-remove.svg" alt=""></span>
      </div>
    `
    })
    filteredTagWrapper.innerHTML = html;
    filterWrapper.classList.add('filter--active');
}

const clearFilteredTagHtml = function () {
  filteredTag = [];
  filteredTagWrapper.innerHTML = '';
  filterWrapper.classList.remove('filter--active');
  creatItemContentHtml(dataObj);
}

const filteredItemDisplay = function () {
  const newData = dataObj.filter((data) => {
    let dataTagAll = [data.role, data.level, ...data.languages, ...data.tools || []];
    return filteredTag.every((tag) => dataTagAll.includes(tag));
  });
  creatItemContentHtml(newData);
}

// Render first loaded page & non-filtered page
creatItemContentHtml(dataObj);

// Clear button behavior
clearButton.addEventListener('click', function(e){
  e.preventDefault();
  clearFilteredTagHtml();
})

// Filtered: add and remove tag
itemWrapper.addEventListener('click', function(e){
  e.preventDefault();
  
  if (e.target.classList.contains('item__tag')) {
    // Filtered tag display
    let tag = e.target.innerHTML;
    if(filteredTag.indexOf(tag) === -1) filteredTag.push(tag);
    creatFilteredTagHtml();

    // Item display
    filteredItemDisplay();
  }
})


// Remove filtered tag when choosing X icon X
filteredTagWrapper.addEventListener('click', function(e){
  e.preventDefault();
  if(e.target.classList.contains('filtered__remove-icon')) {
    const index = filteredTag.indexOf(e.target.getAttribute('data-tag'));
    filteredTag.splice(index, 1);
    creatFilteredTagHtml();
    filteredItemDisplay();
  } 

  if(filteredTag.length === 0) clearFilteredTagHtml();
  e.stopPropagation();
})


 






