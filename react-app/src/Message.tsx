// Functions are in PascalCase
function Message() {
    // This is JSX: Javascript XML. 
    // Goto babeljs.io
    // An expression is a piece of code that returns a value, a function can be put within the braces as well
    const name = '';
    if(name)
        return <h1>Hello {name}</h1>
    return <h1>Hello World</h1>
}

export default Message;