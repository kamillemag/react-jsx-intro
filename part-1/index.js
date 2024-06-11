
const App = () => {
    return(
        <div>
            <FirstComponent/>
            <NamedComponent name='Kamille'/>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))