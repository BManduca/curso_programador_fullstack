const presets = [
    [
        "@babel/preset-env",
        {
            useBuiltIns: "usage",
            corejs: "3.22.2"
        }
    ]
]

module.exports = { presets }