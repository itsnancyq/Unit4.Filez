import express from "express";
const router = express.Router();
export default router;

// GET /files sends array of all files with name of containing folder included as folder_name

router.route("/folders").get(async (req, res)=>{
    const folders = await getFolders()
    return res.send(folders)
});


router.route("/folders/:id").get(async (req, res)=>{
    const id = req.params.id;
    if(!Number.isInteger(id)) {
        return res.status(400).send({error: "Please send a valid ID."})
    }

    const employee = await getFolders(id)
})

