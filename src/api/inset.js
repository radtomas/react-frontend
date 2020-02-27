import api from "./api";

const getInsets = async () => {
  return await api.request({
    method: "GET",
    url: "/inset/read.php"
  })
};

const addInset = async (data) => {
  return await api.request({
    method: "POST",
    url: "/inset/create.php",
    data
  })
};

const updateInset = async (data, token) => {
  return await api.request({
    method: "PUT",
    url: "/inset/update.php",
    token,
    data
  })
};

const deleteInset = async (data, token) => {
  return await api.request({
    method: "DELETE",
    url: "/inset/delete.php",
    token,
    data
  })
};

export default {
  getInsets,
  addInset,
  updateInset,
  deleteInset
}