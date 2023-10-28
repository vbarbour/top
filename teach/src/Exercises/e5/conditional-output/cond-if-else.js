const Condfile = () =>{
    const loggedin =true;
    if(loggedin) {
        return (<h1>Welcome Eswar</h1>);
    }
    else{
        return (<h1>Please Login</h1>)
    }
};

export default Condfile;