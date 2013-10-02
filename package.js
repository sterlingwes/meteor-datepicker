Package.describe({
    summary: "Datepicker (+ optional time) widget using jQuery UI"
});

Package.on_use(function(api) {
    
    api.use('standard-app-packages');
    api.use('external-file-loader');
    api.use('session-extras');
    
    api.add_files([
        'client/datepicker.html',
        'client/datepicker.js'
        
    ],'client');
    
});