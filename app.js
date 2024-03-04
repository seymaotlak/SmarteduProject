import express from 'express';

const app = express();

app.get('/',(req,res) =>{
    res.send('INDEX SAYFASI');
});

const port = 5000;
app.listen(port, () => {
  console.log('App starded on port $ {port}');
});
