import Ember from 'ember';

var Router = Ember.Router.extend({
  location: CirroBacklogsENV.locationType
});

Router.map(function() {
	// this.route('application');
	this.route('info');
	this.route('420');

	this.resource('project', function() {
		this.route('dotfolio');
		this.route('shopify-theme');
	});

	this.resource('client', function() {
		this.route('dynia');
		this.route('for-love-and-lemons');
		this.route('gates-family-foundation');
		this.route('play-plus-record');
		this.route('34-degrees');
		this.route('laura-krudener');
		this.route('taxi');
	});
});

export default Router;
