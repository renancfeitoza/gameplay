//Metodos de um controllers
//index == retorna uma listagem de valores
//show == retorna um valor
//store == armazena / cria um valor
//update == atualiza um valor
//destroy == deleta um valor

const User = require("../models/User")
module.exports = {
    async store(req, res) {
        const { email } = req.body;
        
        let user = await User.findOne({ email });

        if (!user) {
            
            user = await User.create({ email });
        }
        
        return res.json(user)
    }
}
