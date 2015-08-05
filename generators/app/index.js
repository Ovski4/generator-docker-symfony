var generators          = require('yeoman-generator'),
    questions           = require('./questions'),
    functions           = require('./utils/functions'),
    TemplateManager     = require('./utils/templateManager'),
    MessageManager      = require('./utils/messageManager'),
    RequirementsChecker = require('./utils/requirementsChecker'),
    Configurator        = require('./utils/configurator')
;

var configuration = {} ;

module.exports = generators.Base.extend({
    initializing: function () {
        this.log(MessageManager.getInitMessage());
        RequirementsChecker.check();
    },
    prompting: function () {
        var done = this.async();
        this.prompt(questions, function (answers) {
            configuration = Configurator.handle(answers);
            done();
        }.bind(this));
    },
    default: function () {
        var done = this.async();
        this.log(MessageManager.getInstallSymfonyMessage());
        functions.installSymfony(this, configuration.version, done);
    },
    writing: function () {
        this.log(MessageManager.getCopyTemplateMessage());
        var tm = new TemplateManager(this, configuration);
        tm.copyTemplates();
    },
    install: function () {
        this.log(MessageManager.getRunComposerScriptMessage());
        var done = this.async();
        functions.runComposerScript(this, done);
    },
    end: function () {
        var mm = new MessageManager(configuration);
        this.log(mm.getEndMessage());
    }
});