App = Ember.Application.create({
	rootElement: '#ember-app',
	LOG_TRANSITIONS: true, // basic logging of successful transitions
	LOG_TRANSITIONS_INTERNAL: true // detailed logging of all routing steps
});

App.EditorButton = Ember.View.extend({
	tagName: 'button',
	title: 'bla',
	template: Ember.Handlebars.compile('{{view.title}}'),
	mouseDown: function(evt) {

		var boundaries = aloha.boundaries.fromRange(aloha.editor.selectionContext.range);
		var updatedBoundaries = aloha.formatting.toggle('B', boundaries[0], boundaries[1]);
		aloha.boundaries.select(updatedBoundaries[0], updatedBoundaries[1]);


		evt.preventDefault();
		evt.stopPropagation();
		//this.set('title', this.get('title') + "a");
		return false;
	}
});

console.log(App);