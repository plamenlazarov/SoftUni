// TODO: Implement popup function constructors

Object.prototype.extend = function (properties) {
    function f() { };
    f.prototype = Object.create(this);
    for (var prop in properties) {
        f.prototype[prop] = properties[prop];
    };
    f.prototype._super = this;
    return new f();
}

var poppy = (function(){
    var popup = {
        init: function(title, message, type) {
            this.title = title;
            this.message = message;
            this.type = type;


            return this;
        },
        _popupData: function() {
            return this.popupData;
        }
    };

    var success = popup.extend({
        init: function(title, message, type) {
            this._super.init.apply(this, arguments);
            this.autoHide = true;
            this.timeOut = 3000;
            this.position = 'bottomLeft';

            return this;
        }
    });

    var info = popup.extend({
        init: function(title, message, type) {
            this._super.init.apply(this, arguments);
            this.closeButton = true;
            this.position = 'topLeft';
            this.timeOut = 0;

            return this;
        }
    });

    var error = popup.extend({
        init: function(title, message, type) {
            this._super.init.apply(this, arguments);
            this.position = 'topRight';

            return this;
        }
    });

    var warning = popup.extend({
        init: function(title, message, type) {
            this._super.init.apply(this, arguments);
            this.position = 'bottomRight';
            this.callback = function() {
                window.location = 'http://google.com';
            }

            return this;
        }
    });

    return {
        success: function(title, message, type) {
            return {
                _popupData: Object.create(success).init(title, message, type)
            }
        },
        info: function(title, message, type) {
            return {
                _popupData: Object.create(info).init(title, message, type)
            }
        },
        error: function(title, message, type) {
            return {
                _popupData: Object.create(error).init(title, message, type)
            }
        },
        warning: function(title, message, type) {
            return {
                _popupData: Object.create(warning).init(title, message, type)
            }
        }
    }

}());
