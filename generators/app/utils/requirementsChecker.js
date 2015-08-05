var MessageManager = require('./messageManager'),
    exec           = require('child_process').exec
;

var requirements = [
    {
        'command': 'composer',
        'errorMessage': MessageManager.getComposerMissingMessage()
    }
];

var RequirementsChecker = function (conf) {
    this.conf = conf;
};

RequirementsChecker.prototype.check = function () {
    requirements.forEach(function(requirement) {
        exec(requirement.command, function(err, stdout, stderr) {
            if (err) {
                console.log(requirement.errorMessage);
                process.exit();
            }
        });
    });
};

RequirementsChecker.check = RequirementsChecker.prototype.check;

module.exports = RequirementsChecker;