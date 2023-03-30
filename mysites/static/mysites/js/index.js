// Mouse Trail
/*document.addEventListener('mousemove', function(e) {
  let pointer = document.querySelector('.pointer');
  let trail = document.createElement('div');

  trail.classList.add('pointer-trail');

  let trailDot = document.createElement('div');

  trailDot.style.left = e.pageX + 'px';
  trailDot.style.top = e.pageY + 'px';
  trail.appendChild(trailDot);

  document.body.appendChild(trail);

  setTimeout(function() {
    trail.remove();
  }, 2000);
  pointer.style.left = e.pageX + 'px';
  pointer.style.top = e.pageY + 'px';
});*/

// Flashing link
const greetings = ['HELLO', 'WORLD'];

const div = document.getElementById('rainbow-flash');

setInterval(function() {
  const randomWord = greetings[Math.floor(Math.random() * greetings.length)];
  
	div.innerHTML = randomWord;
}, 2500);


// Terminal inputs
function handleSubmit(event) {
  event.preventDefault(); // prevent default form submission
  const inputValue = document.getElementById("inputField").value;
  const outputElement = document.getElementById("output");

	document.getElementById('inputField').value = "";

	if (inputValue === 'ls') {
		document.querySelector('.terminal-contents-container').style.display = 'grid';
	}

	else if (inputValue === 'clear') {
		document.querySelector('.terminal-contents-container').style.display = 'none';
	}

	else if (inputValue === 'cd') {
		location.href = '/terminal';	
	}
	
	else if (inputValue === 'cd projects') {
		location.href = '/projects';
	}
	
	else if (inputValue === 'help') {
		location.href = '/help';
	}
	
	else if (inputValue === 'open home.html') {
		location.href = '/';
	}
	
	else if (inputValue === 'open about.html') {
		location.href = '/about';
	}
	
	else if (inputValue === 'open bistromilliards_site.py') {
		window.location.href = 'http://bistromilliards.herokuapp.com/';
	}
	
	else if (inputValue === 'open bistromilliards_code.py') {
		window.location.href = 'https://github.com/FranklinJamesJones89/BistroMilliard';
	}
	
	else if (inputValue === 'open lithub_site.py') {
		window.location.href = 'http://thelithub.herokuapp.com/';
	}
	
	else if (inputValue === 'open lithub_code.py') {
		window.location.href = 'https://github.com/FranklinJamesJones89/LitHub';
	}
	
	else if (inputValue === 'exit') {
		location.href = '/';
	}
	
	else if (inputValue === 'open README.md') {
		location.href = '/help';
	}
	
	else if (inputValue === 'open resume.html') {
		location.href = '/resume';
	}

	else {
		location.href="/help"
	}
	
};

