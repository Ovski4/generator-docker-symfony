var TemplateManager = function (generator, conf) {
    this.conf = conf;
    this.generator = generator;
};

TemplateManager.prototype.copyTemplate = function (source, dest) {
    this.generator.fs.copyTpl(
        this.generator.templatePath(source),
        this.generator.destinationPath(dest),
        { conf: this.conf }
    );
};

TemplateManager.prototype.copyTemplates = function () {
    this.copyTemplate('parameters.yml.tmpl', 'app/config/parameters.yml');
    this.copyTemplate('app_dev.php.tmpl', 'web/app_dev.php');
    this.copyTemplate('docker-compose.yml.tmpl', 'docker-compose.yml');
    this.copyTemplate('run.sh.tmpl', 'run.sh');
    this.copyTemplate('kibana.json.tmpl', 'kibana.json');
    this.copyTemplate('.gitignore.tmpl', '.gitignore');
    this.copyTemplate('base.html.twig.tmpl', 'app/Resources/views/base.html.twig');
    if (this.conf.gulp == true) {
        this.copyTemplate('Gulpfile.js.tmpl', 'Gulpfile.js');
        this.copyTemplate('package.json.tmpl', 'package.json');
    }
    if (this.conf.foundation == true) {
        this.copyTemplate('bower.json.tmpl', 'bower.json');
    }
    if (this.conf.makefile == true) {
        this.copyTemplate('Makefile.tmpl', 'Makefile');
    }
};

module.exports = TemplateManager;