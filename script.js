const sections     = document.querySelectorAll('section');
const links        = document.querySelectorAll('.link');
const nav          = document.querySelector('.nav');
const navPos       = nav.getBoundingClientRect(); //Position of navBar
const scrollMargin = 8; //50px - 42px navBar height

//Update hash when link is active
function updateHash(hash) {
	const currentHash = window.location.hash;
	currentHash != hash && window.history.replaceState(null, null, hash);
}

window.onscroll = () => {
	sections.forEach((section, index) => {
		const sectionPos = section.getBoundingClientRect(); //Pos of section

		if (sectionPos.top <= navPos.bottom + scrollMargin && sectionPos.bottom >= 0) {
			//remove active class from all links
			links.forEach((link) => link.classList.remove('active'));
			links[index].classList.add('active');
			const hash = links[index].getAttribute('href');
			updateHash(hash);
		}
	});
};
