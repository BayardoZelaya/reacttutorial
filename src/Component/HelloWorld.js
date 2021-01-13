import Welcome from './Welcome/Welcome'

function HelloWorld(){
    return (
        <div className= "HelloWorld">
            <Welcome/>
            Hello World!
            {
                console.log("Hello World")
            }
            <h1>
                Total Amount {2+2}
            </h1>
        </div>
    )
}

export default HelloWorld;
