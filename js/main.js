	var k;
	var i = 1;
	var slider = document.getElementsByClassName('content');
	var dots = document.getElementsByClassName('dot');
	ShowSlide(i);

function Next() {
			i = i + 1;
			ShowSlide(i);
		}
function Prev() {
			i = i - 1; 
			ShowSlide(i);
		}

function ShowSlide(x) {
			if (x > slider.length) {
				x = 1; i = 1;
			} else if (x < 1) {                                      
				x = slider.length;
				i = slider.length;                       											
			}
			for (k = 0; k < slider.length; k++) {														
				slider[k].classList.remove('current');
				dots[k].classList.remove('active_dot');  																								
			}
			slider[x - 1].classList.add('current'); 
			dots[x-1].classList.add('active_dot');                                            
		}