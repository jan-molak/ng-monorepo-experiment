const
    merge = require('merge'),
    path = require('path'),
    glob = require('glob'),
    angularPreset = require('jest-preset-angular/jest-preset');

/**
 * @see https://jestjs.io/docs/en/configuration.html
 */
const config = merge.recursive(angularPreset, {
    // preset: 'jest-preset-angular',

    globals: {
        'ts-jest': {
            tsConfigFile: path.join(__dirname, 'packages', 'tsconfig.spec.json'),
        },
        '__TRANSFORM_HTML__': true
    },

    verbose: true,

    setupTestFrameworkScriptFile: path.join(__dirname, 'config/test/setupJest.ts'),

    roots: glob
        .sync(`${ __dirname }/packages/*/@(src|spec|__tests__)/`)
        .map(p => `<rootDir>${ path.relative(__dirname, p) }`),

    moduleNameMapper: {
        "^@experimental(.*)$": "<rootDir>/packages/$1/src",
    }
});

module.exports = config;
