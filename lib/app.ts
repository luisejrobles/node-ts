import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as mongoose from 'mongoose';

import { Routes } from './routes/crmRoutes';
import { environment } from '../environments/environment';

class App {
    public app: express.Application;
    public routePRV: Routes = new Routes();
    public mongoURL: string = environment.dbCredentials;

    constructor() {
        this.app = express();
        this.config();        
        this.routePRV.routes(this.app);     
        this.mongoSetup();
    }

    private config(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

    private mongoSetup(): void {
        mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoURL);
    }
}

export default new App().app