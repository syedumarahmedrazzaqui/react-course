
let MyName = 'zaid'
let Fullname = () => {
    return 'syed umar ahmed razzaqui'
}
let number = 456

function Hello(){
    // whenever we put this {} brackets we can use js var method everything
    return (
        <div>
            <h3>Hello This Is The Future Speaking. My name is {MyName} and my Fullname is {Fullname()}</h3>
            <p>message no: {number}</p>
        </div>
    );
}

export default Hello;