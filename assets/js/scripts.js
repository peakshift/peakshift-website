/*$(window).load(function(){
	var domain = 'https://peakshift.com';
	var router = new Router();
	//router.route('/:id', function(id){ console.log(id)});

	History.Adapter.bind(window,'statechange',function() {
		var State = History.getState()
			Container = $('#mainContent')
		$.ajax({
			url: domain+State.hash,
			beforeSend : function() {
				$(Container).append('<h1 id="ajaxLoading">loading...</h1>');
				console.log('preloader', domain+State.hash);
			},
			success    : function(result) {
				$('#ajaxLoading').remove();
				Container.html(result);
				setTimeout(function() { $('figure').addClass('active') }, 300);
			}
		});

	});
});
*/

$(document).ready(function(){
	setTimeout(function() { $('figure').addClass('active') }, 3000);
});
