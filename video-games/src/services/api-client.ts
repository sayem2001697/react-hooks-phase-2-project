import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: 'f462e4d0d3f941bd9e3121b0182677a2'
    }

})