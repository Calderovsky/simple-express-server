const express = require('express');
const app = express();

const { infoCursos } = require('./datos/cursos.js');

// Routers
const routerProgramacion = require('./routers/programacion.js');
app.use('/api/cursos/programacion', routerProgramacion);

const routerMatematicas = require('./routers/matematicas.js');
app.use('/api/cursos/matematicas', routerMatematicas);

// Routing

app.get('/', (req, res) => {
    res.send('Mi primer servidor en Express. Cursos 💻')
});

app.get('/api/cursos', (req, res) => {
    res.send(JSON.stringify(infoCursos))
});

// Cursos Programacion

// app.get('/api/cursos/programacion', (req, res) => {
    // res.send(JSON.stringify(infoCursos.programacion))
// });


// app.get('/api/cursos/programacion/:lenguaje', (req, res) => {
    // const lenguaje = req.params.lenguaje;
    // const resultados = infoCursos.programacion.filter(curso => curso.lenguaje === lenguaje)
    // 
    // if (resultados.length == 0) {
        // return res.status(404).send(`No se encontraron resultados para el lenguaje ${lenguaje}`)
    // };
    // 
    // if (req.query.ordenar === 'vistas') {
        // return res.send(JSON.stringify(resultados.sort((a,b) => b.vistas - a.vistas)))
    // }
    // 
    // res.send(JSON.stringify(resultados))
// });


// app.get('/api/cursos/programacion/:lenguaje/:nivel', (req, res) => {
    // const lenguaje = req.params.lenguaje;
    // const nivel = req.params.nivel;

    // const resultados = infoCursos.programacion.filter(curso => curso.lenguaje === lenguaje && curso.nivel === nivel);
    // 
    // if( resultados.length === 0) {
        // return res.status(404).send(`No se encontraron cursos de ${lenguaje} de nivel ${nivel}`);
    // }
    // 
    // res.send(JSON.stringify(resultados))
// })

// Cursos Matematicas

// app.get('/api/cursos/matematicas', (req, res) => {
    // res.send(JSON.stringify(infoCursos.matematicas))
// });


// app.get('/api/cursos/matematicas/:tema', (req, res) => {
    // const tema = req.params.tema;
    // const resultados = infoCursos.matematicas.filter(curso => curso.tema === tema);
    // 
    // if(resultados.length === 0) {
        // return res.status(404).send(`No se encontraron resultados para el tema ${tema}`)
    // }
    // 
    // res.send(JSON.stringify(resultados))
// })

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
   console.log(`El servidor en escucha por el puerto ${PORT}...`) 
})