export const signup = (req,res)=>{
    const {fullname,email,password} = req.body
    try {
        res.send("signup route")
    } catch (error) {
        
    }
};

export const login = (req,res)=>{
    res.send("login route")
};

export const logout = (req,res)=>{
    res.send("logout route")
};