import * as express from 'express';
import * as bodyParser from 'body-parser';
import { Routes } from './routes/crmRoutes';

class App {
    public app: express.Application;
    public routePRV: Routes = new Routes();

    constructor() {
        this.app = express();
        this.config;
        this.routePRV.Routes(this.app);
    }

    private config(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
}

export default new App().app