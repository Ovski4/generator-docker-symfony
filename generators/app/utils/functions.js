// first we run composer without the scripts so we avoid the prompt for the parameters.yml file
// then we launch the scripts at the end

module.exports.installSymfony = function(generator, version, callback) {
    generator.spawnCommand('composer', ['create-project', 'symfony/framework-standard-edition', '--no-scripts', '.' , version])
        .on('close', function(err) {
            if (err) {
                process.exit();
            }
            callback();
        })
    ;
};

module.exports.runComposerScript = function(generator, callback) {
    generator.spawnCommand('composer', ['run-script', 'post-update-cmd'])
        .on('close', function(err) {
            if (err) {
                process.exit();
            }
            callback();
        })
    ;
};
