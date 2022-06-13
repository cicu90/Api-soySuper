const app = require("./server");

//todo
// app.get('/', (req, res) => {
//   res.send('<h1>Api SoySuper</h1>');
// });

app.listen(app.get("port"), () => {
  console.log("Server on port ", app.get("port"));
});


module.exports = app;
