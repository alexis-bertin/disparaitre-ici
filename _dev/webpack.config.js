const Encore    = require('@symfony/webpack-encore');

if (!Encore.isRuntimeEnvironmentConfigured()) {
    Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

Encore
    // directory where compiled assets will be stored
    .setOutputPath('../public/build/')
    // public path used by the web server to access the output path
    .setPublicPath('/build/')

    .addEntry('app', './js/main.js')

    .enableSingleRuntimeChunk()

    .cleanupOutputBeforeBuild()
    .enableBuildNotifications()
    .enableSourceMaps(!Encore.isProduction())

    //.enableVersioning(Encore.isProduction())

    .configureBabelPresetEnv((config) => {
        config.useBuiltIns = 'usage';
        config.corejs = 3;
    })

    .enableSassLoader()

    .copyFiles({
        from: './img',
        to: 'images/[path][name].[ext]',
        pattern: /\.(png|jpg|jpeg|svg)$/
    })

    .copyFiles({
        from: './fonts',
        to: 'fonts/[path][name].[ext]',
        pattern: /\.(eot|svg|ttf|woff)$/
    })
;

module.exports = Encore.getWebpackConfig();