ReactDOM.render(
    //passando para o DOM o que é para ser injetado
    React.createElement(
        'h1',
        null,
        'Hello World'
    ),
    //injetando toda essa informação HTML la no elemento com id root
    document.getElementById('root')
)