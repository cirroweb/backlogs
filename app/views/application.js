export default Ember.View.extend({
	didInsertElement: function() {
    Ember.$('body').on('keypress', function(e) {
      if(e.which == 126) { //pressed SHIFT + `
        //this.get('controller').send('bobMarley');
        console.log('420');
      }
    });
  }
});