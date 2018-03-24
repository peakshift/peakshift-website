$(window).load(function(){
	var domain = 'http://peakshift.com/portfolio';
	var router = new Router();
	router.route('/portfolio/:id', function(id){ console.log(id)});

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

	$('a').click(function(e){
		e.preventDefault();
		var theLink = $(this).data('fetch');
		console.log(theLink);
		router.navigate(theLink);
	});
});

$(document).ready(function(){
});
