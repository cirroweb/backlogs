import Ember from 'ember';

var Router = Ember.Router.extend({
  location: CirroBacklogsENV.locationType
});

Router.map(function() {
	this.route('dynia');
	this.route('for-love-and-lemons');
	this.route('gates-family-foundation');
});

export default Router;
