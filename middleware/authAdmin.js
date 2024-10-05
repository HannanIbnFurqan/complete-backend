import User from "../model/userModel"

const authAdmin = async (req,res,next) =>{
    try {
        const user = await User.findOne({_id: req.user.id})
        if(user.rols == 0)
            return res.status(400).json({message: 'Admin Resourcess Access Denied'})
            next()
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

export default authAdmin