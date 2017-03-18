const pattern = /\{([a-z0-9_]+)}/gi;

function format(args) {
    return this.replace(pattern, function(match, key) {
        if (args.hasOwnProperty(key)) {
            return args[key];
        }
    });
}

(function(prototype) {
    if (prototype.format) {
        console.warn("You already have an format method defined");
        return;
    }
    
    prototype.format = format;
})(String.prototype);
