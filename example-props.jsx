function HelloWord(props) {
    return (
        <div>
            <h1>{props.myText}</h1>
        </div>
    )
}

function App() {
    return(
        <div>
            <HelloWord myText ='hola'></HelloWord>
            <HelloWord myText ='chau'></HelloWord>
            <HelloWord myText ='hhhh'></HelloWord>
        </div>
    )
    
}