import data from "../../../data/data";

export default function handler(req,res){
    if (req.method == "GET"){
        res.status(200).json(data)
    } else if(req.method = 'POST'){
        const blogTitle = req.body.Btitle
        const Content = req.body.Bcontent
        const newData = {
            id: Date.now(),
            blogTitle: blogTitle,
            Content: Content, 
        }
        data.push(newData)
        res.status(201).json(newData)
        console.log("Method POST, Data Saved..")
    }
}

