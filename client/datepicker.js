Template.datepicker.rendered = function() {
    
    var that = this;
    
    if(this.data && this.data.classn) {
        var options = {
            dateFormat: "yy/m/d"
        };
        
        $('.'+that.data.classn)[that.data.classn]('destroy');
        
        if(that.data.classn=="datetimepicker") {
            _.extend(options, {
                timeFormat: "h:mm tt",
                stepMinute: 5
            });
        }
        
        $('.'+that.data.classn)[that.data.classn](options);
    }

};