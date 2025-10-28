Clone the starter pack first
git clone https://github.com/Apollo-Level2-Web-Dev/Health-Care-Server2.0_starter.git

Run the command below

npm i
npm run dev

npm install prisma --save-dev
npm install @prisma/client

npx prisma init (To create prisma folder to your project)

Part-1

npx dotenv-cli prisma generate dev (Need this comment otherwise you will get missing DATABASE_URL missing)

npx dotenv-cli prisma migrate dev


Part-2

Building File Upload Helper with Multer
Implementing Request Validation Middleware & Patient Creation with Zod Schema
Handling Image Upload using Multer
Parsing Data & Preparing Image for Cloudinary Upload
Uploading Image to Cloudinary
Implementing User Login
Generating JWT Token
Storing Token in Cookies