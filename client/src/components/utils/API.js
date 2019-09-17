import axios from "axios";

export default {
    userLogin: function(info) {
        return axios.post("/login", info);
    }

}