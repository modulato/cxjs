

module.exports = function (options) {
    var isProduction = options.production;

    return {
        "cacheDirectory": true,
        "cacheIdentifier": "v12",
        "presets": [
            ["env", {
                loose: true,
                modules: false,
                useBuiltIns: "entry",
                targets: {
                    chrome: 45,
                    ie: 11,
                    ff: 30,
                    edge: 12,
                    safari: 9
                }
            }]
        ],
        "plugins": [
            'external-helpers',
            'transform-object-rest-spread',
            "transform-function-bind",
            'transform-export-extensions',
            'transform-es2015-parameters',
            isProduction && ["transform-cx-imports", {useSrc: true}],
            'transform-cx-jsx',
            ["transform-react-jsx", {"pragma": 'VDOM.createElement'}],
            //["babel-plugin-inferno", {"pragma": "VDOM"}]
        ].filter(Boolean)
    }
};


