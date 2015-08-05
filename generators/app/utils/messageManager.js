var color = require('chalk');

var MessageManager = function (conf) {
    this.conf = conf;
};

MessageManager.prototype.getInitMessage = function () {
    return color.bgCyan('Hello! This generator will help you getting started on a symfony2 project with docker.');
};

MessageManager.prototype.getInstallSymfonyMessage = function () {
    return color.bgCyan('Installing symfony...');
};

MessageManager.prototype.getCopyTemplateMessage = function () {
    return color.bgCyan('Copying templates...');
};

MessageManager.prototype.getRunComposerScriptMessage = function () {
    return color.bgCyan('Running composer scripts...');
};

MessageManager.prototype.getComposerMissingMessage = function () {
    return color.bold.red('Composer is missing. You need to install composer globally to run this generator');
};

MessageManager.prototype.getEndMessage = function () {
    var message = 'Now you can run '+color.bold.yellow('`./run.sh`')+'.';

    if (this.conf.gulp == true) {
        if (this.conf.makefile == true) {
            message += ' Then you should run '+color.bold.yellow('make npm-install');
        } else {
            message += ' Then you should exec in your container and run '+color.bold.yellow('npm install');
        }
        if (this.conf.foundation == true) {
            if (this.conf.makefile == true) {
                message += ', as well as '+color.bold.yellow('make bower-install');
            } else {
                message += ', as well as '+color.bold.yellow('bower install --allow-root');
            }
        }
        message += '.';
    }

    return color.bgCyan(message);
};

MessageManager.getComposerMissingMessage   = MessageManager.prototype.getComposerMissingMessage;
MessageManager.getInitMessage              = MessageManager.prototype.getInitMessage;
MessageManager.getInstallSymfonyMessage    = MessageManager.prototype.getInstallSymfonyMessage;
MessageManager.getCopyTemplateMessage      = MessageManager.prototype.getCopyTemplateMessage;
MessageManager.getRunComposerScriptMessage = MessageManager.prototype.getRunComposerScriptMessage;

module.exports = MessageManager;