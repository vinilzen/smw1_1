$(function() {

	$('#change-sity').popover({
		placement: 'bottom',
		html: true,
		container:'.sm_w1_1popover',
		trigger:'click',
		content: function() {
			return $('#change-sity-content').html();
		}
	});

	$('#change-sity').on('shown.bs.popover', function () {

		$('.sm_w1_1popover').css({
			'width': $('.sm_w1_1popover').width(),
			'height': $('.sm_w1_1popover').height(),
			'top':0,
			'left':0
		});

		$('.sm_w1_1close-change-sity').click(function() {
			$('#change-sity').popover('hide');
			return false;
		});

	});

	window.onresize = function(event) {
		$('#change-sity').popover('hide');
		$('.sm_w1_1popover').attr('style','');

		var body_height = $('.sm_w1_1row-body').outerHeight(),
			img_height = $('.sm_w1_1item-photo').outerHeight();

		$('.sm_w1_1row-body .sm_w1_1col-3').css('margin-top',(body_height - img_height)/2);

	}

	var body_height = $('.sm_w1_1row-body').outerHeight(),
		img_height = $('.sm_w1_1item-photo').outerHeight();

	$('.sm_w1_1row-body .sm_w1_1col-3').css('margin-top',(body_height - img_height)/2);

});