function Random(){
    let number = Math.random()*10;

    return <h3 style = {{'background-color': '#776691'}}>Random Number is: {number}</h3>
}
export default Random;