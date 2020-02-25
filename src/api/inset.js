import api from "./api";

const getInsets = async (action) => {
    return await api.request({
        method: "GET",
        url: "/inset/read.php",
        action
    })
};

export default {
    getInsets
}