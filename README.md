# Basic Blog Application

Hey, Kush here! This is a simple blog application built with the essentials of a functional blog site using a beginner-friendly tech stack.

## Tech Stack

- **Next.js**: For Server Side Rendering (SSR) and Static Site Generation (SSG). Features like SWR (Stale While Revalidate) were also used to leverage the best of Next.js' capabilities.
- **Next.js App Routing**: Built using Next.js' app router.
- **MongoDB**: Database used for data storage.
- **Firebase**: For image storage.
- **Prisma**: Used as a middleware to simplify database model creation, which isn’t directly supported in Express.js.

## How to Run

After cloning the repository, follow these steps:

1. **Clone the repository**  
   Create a new folder and clone the repository into it.

2. **Configuration**  
   Update the following environment variables:
   - MongoDB Atlas URI
   - OAuth Secret Key
   - Firebase Storage URL

   > _(Don’t use mine lol)_

3. **Start the Server**  
   Run the following command in the terminal to start the development server:

   ```bash
   npm run dev
