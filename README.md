Clone the starter pack first
git clone https://github.com/Apollo-Level2-Web-Dev/Health-Care-Server2.0_starter.git

Run the command below

npm i

npm run dev

npm install prisma --save-dev

npm install @prisma/client

npx prisma init (To create prisma folder to your project)

npx dotenv-cli prisma generate dev (Need this comment otherwise you will get missing DATABASE_URL missing)

npx dotenv-cli prisma migrate dev
