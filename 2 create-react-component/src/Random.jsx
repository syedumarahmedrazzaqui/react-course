function Random(){
    let number = Math.floor(Math.random()*100)

    return <h1 style={{'backgroundColor': "#556699"}}>Random Number {number}</h1>
}

export default Random;