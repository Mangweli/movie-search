import * as dotenv from 'dotenv'

dotenv.config({ path: ['.env.test', '.env.dev', '.env'] });

let config = {
    PORT: process.env.APP_PORT,
    DB: {
        name: '',
        pass: '',
        user: '',
        host: ''
    }
}

if(process.env.APP_ENV == 'production') {
    config = {
        PORT: process.env.APP_PORT,
        DB: {
            name: process.env.DB_NAME,
            pass: process.env.DB_PASS,
            user: process.env.DB_USER,
            host: process.env.DB_HOST
        }
    }
}
if(process.env.APP_ENV == 'testing') {
    config = {
        PORT: process.env.APP_TEST_PORT,
        DB: {
            name: process.env.DB_TEST_NAME,
            pass: process.env.DB_TEST_PASS,
            user: process.env.DB_TEST_USER,
            host: process.env.DB_TEST_HOST
        }
    }  
}
if(process.env.APP_ENV == 'development') {
    config = {
        PORT: process.env.APP_DEV_PORT,
        DB: {
            name: process.env.DB_DEV_NAME,
            pass: process.env.DB_DEV_PASS,
            user: process.env.DB_DEV_USER,
            host: process.env.DB_DEV_HOST
        }
    }  
}

export default config