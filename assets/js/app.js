let pw_input = document.querySelector('.password');
let show_pw_btn = document.querySelector('.show-password');
let show_pw_icon = document.querySelector('img');


show_pw_btn.addEventListener('click', function(){
	if (pw_input.type === 'password') {
		pw_input.type = 'text';

		show_pw_icon.src = 'assets/images/eye_closed.svg';
	} else if (pw_input.type === 'text') {
		pw_input.type = 'password';
		
		show_pw_icon.src = 'assets/images/eye_open.svg';
	}
});

