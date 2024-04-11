// links.js
const baseURL = "https://mattvil04.github.io/wdd230/";
const linksURL = "https://mattvil04.github.io/wdd230/data/links.json";

async function getLinks() {
  try {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.weeks);
  } catch (error) {
    console.error('Error fetching links:', error);
  }
}

function displayLinks(weeks) {
  const activityLinks = document.getElementById('activity-links');
  
  weeks.forEach(weekObj => {
    const weekListItem = document.createElement('li');
    const weekHeading = document.createElement('h3');
    weekHeading.textContent = weekObj.week;
    weekListItem.appendChild(weekHeading);
    
    const linksList = document.createElement('ul');
    weekObj.links.forEach(link => {
      const linkItem = document.createElement('li');
      const anchor = document.createElement('a');
      anchor.href = baseURL + link.url;
      anchor.textContent = link.title;
      linkItem.appendChild(anchor);
      linksList.appendChild(linkItem);
    });
    
    weekListItem.appendChild(linksList);
    activityLinks.appendChild(weekListItem);
  });
}

getLinks();
