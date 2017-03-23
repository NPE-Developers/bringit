Package.describe({
    name: 'bringit',
    version: '0.0.1',
    summary: '',
    git: 'https://github.com/NPE-Developers/bringit'
});

Package.onUse(function(api) {
    api.versionsFrom('1.4.1.1');
    api.use([
        'jquery',
        'ecmascript',
        'underscore',
        'templating',
        'session',
        'less',
        'random',
        'rocketchat:lib',
        'rocketchat:ui-message',
    ]);

    // api.addFiles('bringit.js');
	api.addFiles([
		'client/list/create/CreateListView.js',
		'client/list/create/view/CreateListViewImpl.js',
		'client/list/create/presenter/CreateListViewPresenter.js',
		'client/list/input/view/input.html'

	],'client')

});

Package.onTest(function(api) {
    api.use([

    	'coffeescript',
        'jquery',
        'ecmascript',
        'practicalmeteor:mocha',
        'practicalmeteor:chai',
        'practicalmeteor:sinon',
        'monolith'
    ]);

	api.use('templating', 'client');
});

