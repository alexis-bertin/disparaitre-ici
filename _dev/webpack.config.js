const Encore            = require('@symfony/webpack-encore');

if (!Encore.isRuntimeEnvironmentConfigured()) {
    Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

Encore
    // directory where compiled assets will be stored
    .setOutputPath('../public/build/')
    // public path used by the web server to access the output path
    .setPublicPath('/build/')
    .setManifestKeyPrefix('./')

    .addEntry('app', './js/main.js')

    .enableSingleRuntimeChunk()

    .cleanupOutputBeforeBuild()
    .enableBuildNotifications()
    .enableSourceMaps(!Encore.isProduction())

    .configureBabelPresetEnv((config) => {
        config.useBuiltIns = 'usage';
        config.corejs = 3;
    })

    .enableSassLoader()

    .copyFiles({
        from: './fonts',
        to: 'fonts/[path][name].[ext]',
        pattern: /\.(eot|svg|otf|ttf|woff)$/
    })
;

module.exports = Encore.getWebpackConfig();