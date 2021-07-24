const { default: axios } = require("axios");
import axios from "axios";

const urlbase = "http:localhost:8080/usuario";
const urlusar = "http://localhost:8080/usuario/all"

class UsuarioServices {

    getUsuario(){
        return axios.get(urlbase+"/all");
    }

    createUsuario(){
        return axios.post(urlbase+"/add", usuario);
    }

    getUsuarioById(id){
        return axios.get(urlbase+"/locate_user/"+id);
    }

    editUsuario(usuario){
        return axios.put(urlbase+"/update_user/"+usuario.id_usuario,usuario);
    }
    deleteUsuario(){
        return axios.delete(urlbase+"/delete_user/"+id)
    }

}

export default new UsuarioServices();