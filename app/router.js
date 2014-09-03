import Ember from 'ember';

var Router = Ember.Router.extend({
  location: CirroBacklogsENV.locationType
});

Router.map(function() {
	// this.route('application');
	this.route('info');
	this.route('420');

	this.resource('client', function() {
		this.route('dynia');
		this.route('for-love-and-lemons');
		this.route('gates-family-foundation');
		this.route('play-plus-record');
		this.route('dotfolio');
		this.route('34-degrees');
	});
});

export default Router;
