const fs = require("fs");

module.exports = async (sequelize) => {
    let modelsDir = fs
       .readdirSync('./src/models')

       var modelC =  0;
       for(const file of modelsDir){
            let model = require(`../models/${file}`)

            modelC++
            model(sequelize)
            console.log(`schema:${file} Model Loaded sucessfully!📂`)    
        }
       console.log(`Foram carregado ${modelC} Schemas✅`)
};