const mongoose = require('mongoose')
const url_bd = 'mongodb://localhost:27017'


mongoose .connect(url_bd)
.then (()=> {
    console.log('conexion exitosa')
})
.catch((err) => {
    console.log('conexion fallida')
})

const alumnos_esquema = new mongoose.Schema(
    {
        name:{
            type:String
        },
        apepat:{
            type:String
        },
        apemat:{
            type:String
        },
        numeroTel:{
            type:Number
        }
    
    }


)
const alumnos = new mongoose .model('Tabla de registro',alumnos_esquema)

alumnos.create(
    {
        name:'Luna',
        apepat:'Cortes',
        apemat:'Gonzalez',
        numeroTel:'44939499',
        email:'utm@.edu.mx'

    }
)