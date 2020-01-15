import React, { useState } from "react";
import { Form, Field } from "react-advanced-form";
import { Input, Button } from "react-advanced-form-addons";
import Axios from "axios";
import RestaurantList from "./RestaruantList";

function LoginForm(props) {
    const [userName, setUserName] = useState("");
    const [password, setUserPassword] = useState("");
    const [user, setUser] = useState({ username: '', password: '' });

    const handleUsernameChange = event => {
        let value = event.nextValue;
        setUserName(value);
    };
    const handlePasswordChange = event => {
        let value = event.nextValue;
        setUserPassword(value);
    };
    const loginUserOnSubmit = e => {
        let newObj = {
            username: userName,
            password: password,
        };
        e.preventDefault();
        //console.log(newObj);
        Axios.post("https://bw-foodiefun.herokuapp.com/api/users/login", newObj)
            .then(res => {
                //console.log(res);
                setUser({ headers: { 'user_id': res.data.id, 'authorization': res.data.token } });
            })
            .catch(err => console.log(err));
        //console.log(props);
    };
    return (
        <div>
            <Form>
                <Field.Group>
                    <Input
                        name="username"
                        type="username"
                        label="Username"
                        onChange={handleUsernameChange}

                    />
                    <Input
                        name="userPassword"
                        type="password"
                        label="Password"
                        onChange={handlePasswordChange}
                    />
                </Field.Group>
                <Button primary onClick={loginUserOnSubmit} >
                    Login
      </Button>
            </Form>
            <RestaurantList user={user} />
        </div>
    )
}

export default LoginForm;