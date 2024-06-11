const App = () => {
    return (
        <div>
            <Person name='Kamille' age={16} hobbies={['Golf', 'Pilates', 'Reading', 'Tennis', 'Art']} />
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))