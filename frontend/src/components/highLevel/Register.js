

const Register = () => {
    return (
        <section>
        <h1>Registration Page</h1>
        
        <form>
            {/*Username*/}
            <div>
                <label>Username: </label>
                <input type="text" name="Username" placeholder="username"></input>
            </div>
            {/*Email*/}
            <div>
                <label>Email: </label>
                <input type="email" name="Email" placeholder="username"></input>
            </div>
            {/*Password*/}
            <div>
                <label>Password: </label>
                <input type="text" name="Password" placeholder="username"></input>
            </div>
            {/*Confirm Password*/}
            <div>
                <label>Confirm Password: </label>
                <input type="text" name="Confirm Password" placeholder="Password"></input>
            </div>
            <input type="submit" value="Register"></input>
        </form>
        </section>
    )
}

export default Register
