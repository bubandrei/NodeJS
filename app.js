import express from 'express';

//////////////////////////////////////////////////////////////
app.use
let app = express();
app.get('/1/', (req, res) => {
    res.send('new page 1');
});
app.get('/2/', (req, res) => {
    res.send('page222222222222222222')
})
app.use((req, res) => {
    res.status(404).send('not found');
})
app.listen(3000, () => {
    console.log('running')
})