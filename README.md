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

Part-3
1 Fetch All Users with Pagination
2 Fetch All Users with Searching and Sorting
3 Fetch All Users with Filtering
4 Implement Pick Function for Query Parameters
5 Create Pagination Helper Function
6 Apply Prisma Where Conditions for User Data Retrieval
7 Overview of Metadata, Searching, Sorting, Filtering & Pagination
8 Implement Authentication Middleware


Part-4

1 Planning Schedule and Doctor Schedule Creation
2 Writing Prisma Schema for Schedule and Doctor Schedule
3 Creating Schedule
4 Retrieving Schedules for a Specific Doctor
5 Deleting Schedule from the Database
6 Creating Doctor Schedule – Part 2 & Handling User Type (JWT Payload)
7 Fixing & Enhancing “Get Available Schedule for Doctor” Functionality


Part-5

1 Prisma Error Handling 
2 Implementing ApiError Handling
3 Applying Zod Validations
4 Overview & Implementation of Specialty and Doctor Specialty
5 Implementing Doctor Searching Functionality
6 Fixing Errors in Doctor Searching
7 Implementing Doctor Profile Update
8 Creating & Deleting Doctor Specialties
9 Filtering Doctors by Specialty and Task