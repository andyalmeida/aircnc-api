const User = require('../models/User');

// index, show, store, update, destroy
module.exports = {
    async store(req, res) {
        const { email } = req.body;
        
        if(email === '') 
            return res.status(400).json({ error: 'Email não informado.'});

        let user = await User.findOne({ email });

        if(!user)
            user = await User.create({ email });
        
        return res.json(user);
    }
}