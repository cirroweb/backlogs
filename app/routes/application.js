import Ember from 'ember';

export default Ember.Route.extend({
	actions: {
		swapColor: function() {
			var $body = Ember.$('body');
			$body.toggleClass('dark');
		}
	}
});
