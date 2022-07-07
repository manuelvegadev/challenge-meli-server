import express from 'express';
// import cors    from 'cors';

import apiRoutes from './api/routes.js';

const app = express();

// app.use(cors({origin: '*'}));
app.use(express.json());
app.use('/api', apiRoutes);

const port = 3002;

app.listen(port);
console.log('ℹ️ Server listen on port', port);
