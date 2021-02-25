import axios from "axios";

class AuthenticationService {
    login = (email, password) => {
        return axios.post("http://localhost:5000/api/user/login", {user:{email, password}})
            .then(res => res)
            .then(response => {
                if (response.data.user.token) {
                    localStorage.setItem("user", JSON.stringify(response.data.user.token));
                }
                return response.data.user;
            })
            .catch(err => {
                console.log(err);
                throw err;
            });
    }

    signOut() {
        localStorage.removeItem("user");
    }

    register = async (firstname, lastname, username, email, password) => {
        return axios.post("/user/register", {
            firstname,
            lastname,
            username,
            email,
            password
        });
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));
    }
}

export default new AuthenticationService();