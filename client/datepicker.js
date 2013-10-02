Template.datepicker.created = function() {
    Meteor.Loader.loadCss('/lib/jquery-ui/jquery-ui-1.10.3.custom.min.css');
    Meteor.Loader.loadJs('/lib/jquery-ui/jquery-ui-1.10.3.custom.min.js', function() {
        Session.set('hasJqueryUI',true);
    });
};

Template.datepicker.rendered = function() {
    
    var that = this;
    
    if(this.data && this.data.classn) {
        Session.whenTrue('hasJqueryUI', function() {
            var options = {
                dateFormat: "yy/m/d"
            };
            if(that.data.classn=="datetimepicker") {
                _.extend(options, {
                    timeFormat: "h:mm tt",
                    stepMinute: 5
                });
            }
            
            $('.'+that.data.classn)[that.data.classn](options);
        });
    }

};