import axios from "axios";


const RenderHomePage = async (req, res) => {
    let url= 'http://localhost:3000/API/v1/users'

    const {data} = await axios.get(url)

    console.log(data);

    res.render('index.ejs',{data})
};


export { RenderHomePage };
