const axios = require("axios") // import du client axios

const endpoint = "https://jsonplaceholder.typicode.com/todos/1";

axios.get(endpoint).then(res => {
    console.log(res.data);
})