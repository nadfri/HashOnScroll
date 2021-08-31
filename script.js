const sections    = document.querySelectorAll('section');
const links       = document.querySelectorAll('.link');
const nav         = document.querySelector('.nav');
const navPos = nav.getBoundingClientRect(); //Position of navBar

//remove active class from all links
function removeActiveClass() {
	links.forEach((link) => link.classList.remove('active'));
}

window.onscroll = () => {
	sections.forEach((section, index) => {
		const sectionPos = section.getBoundingClientRect(); //Pos of section

		if ( sectionPos.top <= navPos.bottom && sectionPos.bottom >= 0 ) 
        {
			removeActiveClass();
			links[index].classList.add('active');
            const hash = links[index].getAttribute('href');
            window.history.replaceState(null, null, hash)
		}

      //  else removeActiveClass();
	});
};
