    import express,{Request,Response,NextFunction} from "express";
    import session from "express-session"
    import flash from "connect-flash"
    import {config} from 'dotenv'
    import path from 'path'
    import authRoutes from './routes/authRoutes'

    config({ path: path.resolve(__dirname, '../config.env') });

    const app = express();
    const port = process.env.PORT || 3000;

    app.use(
        session({
            secret: "ٌRamadan_Kareem",
            resave: false,
            saveUninitialized:false,
            cookie: { secure: false }
        })
    )

    app.use(flash());

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.set('view engine', 'ejs');
    app.set('views',path.join(__dirname,'..','views'));
    app.use(express.static(path.join(__dirname, '../public')));

    app.use((req:Request, res:Response, next:NextFunction) => {
        res.locals.success = req.flash('success');
        res.locals.errors = req.flash('errors');
        next();
    });


    app.use('/',authRoutes);


    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    })