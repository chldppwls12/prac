let express = require('express');

let indexRouter = require('./routes/index');
let userRouter = require('./routes/users');

let app = express();

app.use('/', indexRouter);
app.use('/users', userRouter);

//5000 호출 시 node 서버 실행
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));
