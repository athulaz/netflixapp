// create instance with baseUrl              // if base url is common, we create instance

import axios from "axios";


const instance=axios.create ({

    baseURL: "https://api.themoviedb.org/3"
})

export default instance





