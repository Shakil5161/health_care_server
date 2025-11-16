import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
    node_env: process.env.NODE_ENV,
    port: process.env.PORT,
    database_url: process.env.DATABASE_URL,
    bcrypt_salt_round: process.env.BCRYPT_SALT_ROUND,
    jwt_secret: process.env.JWT_SECRET,
    cloudinary: {
        cloud_name: process.env.CLOUD_NAME,
        api_key: process.env.API_KEY,
        api_secret: process.env.API_SECRET,
    },
    openrouter_api_key: process.env.OPENROUTER_API_KEY,
    stripe: {
        secret_key: process.env.STRIPE_SECRET_KEY,
        webhook_secret: process.env.STRIPE_WEBHOOK_SECRET
    },
    client_url: process.env.CLIENT_URL,
    reset_pass_link: process.env.FORNTEND_LINK,
    node_mailer_email: process.env.NODEMAILER_EMAIL,
    node_mailer_pass: process.env.NODEMAILER_PASS,
}