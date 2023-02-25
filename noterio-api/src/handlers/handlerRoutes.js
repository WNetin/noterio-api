const fs = require("fs");

module.exports = async (app) => {
    let routesDir = fs
       .readdirSync('./src/routes')
       var routeC =  0;
       for(const subFolder of routesDir){
           let subFolderDir = fs
           .readdirSync(`./src/routes/${subFolder}`)
           .filter((file) => file.endsWith('.js'))
   
           for(const file of subFolderDir){
                let route = require(`../routes/${subFolder}/${file}`)
   
               routeC++
               app.use(`/${subFolder}`, route)
               console.log(`${subFolder}:${file} Loaded sucessfully📁`)    
            }
       }
       console.log(`Foram carregado ${routeC} rotas✅`)
};