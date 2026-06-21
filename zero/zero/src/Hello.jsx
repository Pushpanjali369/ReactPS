function Hello(){

    let myName = 'Pushpanjali';
    let fullName = () => {
        return 'Pushpanjali sharma';
    }

    return <h3>
        This is very good thing ..this is  {fullName()}
    </h3>
}
export default Hello;