const url = 'https://mattvil04.github.io/wdd230/chamber/data/members.json';
const cards = document.querySelector('#cards');

async function getMemberData() {
    const response = await fetch(url);
    const data = await response.json();
    displayMembers(data.members);
}
  
getMemberData();

const displayMembers = (members) => {
    members.forEach((member) => {
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement('a');
        let image = document.createElement('img');
        let membershipLevel = document.createElement('p');
        let otherInfo = document.createElement('p');

        name.textContent = member.name;
        address.textContent = `Address: ${member.address}`;
        phone.textContent = `Phone: ${member.phone}`;
        website.textContent = 'Website';
        website.href = member.website;
        website.target = '_blank';
        membershipLevel.textContent = `Membership Level: ${member.membershipLevel}`;
        otherInfo.textContent = member.otherInfo;
        image.setAttribute('src', member.image);
        image.setAttribute('alt', `${member.name}`); // fill in the blank
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '340');
        image.setAttribute('height', '440');

        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);
        card.appendChild(image);
        card.appendChild(membershipLevel);
        card.appendChild(otherInfo);

        cards.appendChild(card);
    });
}