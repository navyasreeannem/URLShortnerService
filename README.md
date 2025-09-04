# 🔗 URL Shortener Service  

When sharing links on LinkedIn, resumes, or social media, long URLs often look cluttered, unprofessional, and difficult to read.  
A **URL Shortener Service** solves this problem by converting long, complex URLs into short, user-friendly links.  

✅ **Example:**  
https://www.example.com/articles/2025/08/22/url-shortener-service-documentation 👉 Becomes:  
https://short.ly/url-doc (where `url-doc` is the input given by the user)  

This makes links easier to **share, remember, and customize**.  

---

## 🚀 Features  
- Shortens long URLs into easy-to-share links  
- Allows **custom aliases** (e.g., `short.ly/myresume`)  
- Provides **optional click tracking & analytics**  
- Prevents broken or mistyped links  
- Perfect for **resumes, portfolios, LinkedIn, or project demos**  

---

## 🔗 Custom Alias Example  
Instead of random IDs like `abc123`, users can choose their own alias:  
- https://short.ly/myportfolio  
- https://short.ly/devprofile  

---

## 📖 Conclusion  
The **URL Shortener Service** is a simple yet powerful tool that makes long URLs more **professional, shareable, and user-friendly**.  

It is especially useful for:  
- **Resumes**  
- **LinkedIn posts**  
- **Portfolios**  
- **Project demos**  

💡 With **custom aliases, analytics, and QR codes**, it can evolve into a **production-grade service**.  

---

# 🐳 Running with Docker  

This project includes a `Dockerfile` so you can run it easily inside a container.  

---

##🔹 For Other Developers (Pull & Run Image)
### 1. Login to Docker Hub:
   ```bash
        docker login
   ```
### 2. Pull the image from Docker Hub:
 ```bash
        docker pull rishithakoganti/url-shortner-server:latest

```
### 3. Run the container and the env file:
 ```bash
       docker run --env-file backend/.env -p 5000:5000 rishithakoganti/url-shortner-server:latest
```
### 4. Check running containers:
```bash
         docker ps
```
### 5. View container logs (optional):
```bash
         docker logs -f url-shortener-container
```
✅ Now the service will be running at:
👉 http://localhost:5000/ (or the port you exposed)

---
**✨ Members’ Contribution Summary**

**👩‍💻 Hasini (23211A6701)**

**1.GitHub Repository Setup & Management**

Created the GitHub repository from scratch and set up the complete project structure.
Configured branching strategies to keep development organized and collaborative.
Regularly committed changes, pushed updates, and maintained proper version control.
Managed pull requests, reviewed code, and ensured only tested code was merged into the main branch.
Maintained clear commit messages and history for easy traceability.

**2.Integration & Collaboration**

Handled the integration of different modules developed by team members.
Resolved merge conflicts effectively to maintain smooth progress.
Verified the integrated code functionality before merging.
Coordinated with the team to ensure a consistent workflow.

**3.Jenkins Integration & CI/CD Pipeline**

Integrated Jenkins to automate build, testing, and deployment processes.
Designed and configured a CI/CD pipeline with multiple stages (build, test, deploy).
Automated pulling code from GitHub, building, and deploying to hosting platforms.
Monitored the pipeline and quickly resolved build or deployment failures.

**4.Additional Contributions**

Secured environment variables and secret keys within Jenkins and GitHub.
Performed regular validations after every integration and deployment.
Documented the GitHub and Jenkins setup for future reference.
Strengthened the project’s DevOps workflow, making it collaborative, automated, and production-ready.

*👩‍💻Sampreethi (23211A6764)*

*1.Frontend Static Files Development*

Designed and managed the frontend static files that form the core structure of the application’s user interface.
Focused on building a clean, responsive layout that is easy to navigate and user-friendly.
Ensured the frontend integrates seamlessly with backend APIs for smooth data flow.

*2.Flash Pop-ups & Notifications*

Implemented flash pop-up messages to provide instant feedback to users during interactions.
Configured pop-ups for various scenarios such as successful actions, warnings, and errors, improving user awareness.
Enhanced the overall user experience by keeping communication with users clear and interactive'

*3.Client-Side Error Handling*

Developed client-side error handling mechanisms to validate input before sending data to the server.
Displayed real-time error messages to guide users in correcting mistakes (e.g., invalid input formats or empty fields).
Reduced the chances of invalid requests reaching the backend, improving system efficiency and reliability.

*4.User Experience Enhancements*

Combined static UI design, flash notifications, and client-side validations to create a smooth, interactive, and reliable frontend experience.
Ensured the application feels more responsive and professional by minimizing errors and providing clear feedback.
**👩‍💻 Vyshnavi (23211A6721)**

**1.Backend Development from Scratch**

For the Backend Development from Scratch, I designed and developed the backend architecture using Node.js and Express, ensuring a clean, modular, and scalable codebase. I defined proper folder structures, routes, middleware, and controllers to maintain readability and separation of concerns. The server-side logic was implemented to handle all major functionalities of the project, including API routing, data validation, and error handling. I also focused on performance optimization by ensuring efficient query handling, middleware usage, and structured workflows in the backend, along with proper logging and debugging mechanisms for smooth operations during both development and deployment.

**2.Authentication System**

In terms of the Authentication System, I built a secure mechanism using MongoDB for storing and managing user credentials. I implemented user registration and login features with proper validation and error handling. Password security was ensured by applying encryption and hashing techniques before storing data in the database. Middleware functions were created to verify authentication tokens and restrict access to protected routes. The system was designed to handle session management effectively, ensuring secure access across the application.

**3.URL Shortening Functionality**

For the URL Shortening Functionality, I developed backend logic for short link generation and integrated the Bitly API for accurate and reliable shortening. Endpoints were created to receive long URLs from the frontend and return shortened URLs as output. The Bitly API token was managed securely using environment variables to prevent token leakage. I also implemented response validation and error handling to manage invalid URLs or expired tokens, optimizing backend responses to ensure quick and accurate short link generation for end-users.

**4.End-to-End Backend Responsibility**

Taking End-to-End Backend Responsibility, I built, tested, and debugged the backend system completely, ensuring authentication and URL shortening features worked seamlessly. I collaborated with my team to integrate backend APIs with the frontend interface, ensuring smooth data exchange. The final delivery was a reliable, production-ready backend that supported all major functionalities of the project.

**👩‍💻 Bhavana (23211A6757)**

**1.Continuous Integration (CI)**

Automatically integrates and validates every code change pushed to GitHub.
Code Fetching: Pulls the latest code from the GitHub repository using SCM triggers or scheduled polling.
Dependency Installation: Installs required dependencies using npm install.
Automated Testing: Runs unit and integration tests using npm test.
Ensures no broken code is merged into the main branch.

**2.Continuous Delivery (CD)**

Automates builds and keeps the application always in a deployable state.
Executes the build process to generate production-ready artifacts using npm run build.
Provides a foundation for extending deployments to staging or production servers in future phases.

**3.Automated Build Triggers**

Configured with Poll SCM to monitor the GitHub repository continuously.
Automatically triggers builds whenever changes are detected.
Provides a fast feedback loop for developers.

**4.Role-Based Access Control (RBAC)**

Configured different user roles such as admin, developer, and viewer.
Assigned permissions so that only authorized users can modify configurations or trigger builds.

**5.Notifications and Feedback**

Integrated email notifications to keep the team updated.
Sends alerts for successful builds and immediate notifications for build or test failures.
Provides detailed logs and reports for faster debugging.

**6.Integration with GitHub**

Ensured strong synchronization between GitHub and Jenkins workflows.
Maintains a clear build history aligned with repository commits.




**👩‍💻 Rishitha Koganti (23211A6751)**

Contributed to project integrates a static frontend built with HTML, CSS, and Bootstrap with a backend powered by Node.js and Express. The frontend provides the user interface, while the backend handles API requests, server logic, and external integrations.


**1.Frontend–Backend Integration**

The frontend consists of responsive pages styled with Bootstrap.
All dynamic requests (such as URL shortening) are sent to the backend through defined API routes.
In production, the backend is configured to serve both the frontend files and API from the same server, ensuring smooth operation without CORS issues.

**2.Bitly Key Integration and Verification**

A Bitly Access Token is used to enable URL shortening.
The key is stored as an environment variable in the backend for security.
When the server starts, the key is verified with the Bitly API to ensure it is valid.
The backend exposes a secure endpoint for shortening 

**3.Dockerfile and Deployment**

The project includes a Dockerfile for seamless deployment.
It defines instructions to copy the project files, install dependencies, and configure the server.
The frontend static files are bundled with the backend so the application runs in a single container.
Environment variables such as the Bitly key are passed at runtime for better security.
A healthcheck ensures that the containerized application is running correctly.
Deployment is simplified, portable, and production-ready using Docker.



**👩‍💻 Navya Sree (23211A6710)**

**1.Frontend Styling**

In the Frontend Styling part of the project, I designed and customized the user interface (UI) with advanced CSS styling, ensuring the application had a clean, modern, and visually appealing look. I focused on making the frontend responsive across multiple screen sizes, which provided a smooth experience on desktops, tablets, and mobile devices. To enhance the user experience (UX), I refined layouts, improved typography choices, adjusted spacing, and aligned elements consistently to create a professional flow throughout the application. I also worked on improving visual hierarchy and readability, making navigation more intuitive for end-users.

**2.Backend Integration**

For the Backend Integration, I connected the application with MongoDB to store and manage user authentication details securely. I implemented login and signup functionalities with proper encryption and validation of sensitive data like passwords. An efficient database schema was designed to handle user-related data without redundancy, enabling faster query execution and smoother performance. I also ensured proper error handling and data validation in backend routes, thereby increasing reliability and preventing faulty user input.

**3.API Integration**

In the API Integration phase, I successfully integrated the Bitly API to provide URL shortening functionality, allowing users to generate shorter, shareable links directly from the application. I created and configured a new Bitly API token, carefully stored it as an environment variable to enhance project security, and prevented accidental exposure. The backend was equipped with API request handling logic to verify responses from the Bitly API, ensuring reliability and validity. I tested the integration thoroughly and handled edge cases such as invalid or expired tokens gracefully.

**4.Deployment**

Finally, under Deployment, I deployed the complete full-stack application on Render, making it accessible to users with a stable and secure hosting environment. I configured production-ready connections between the backend, frontend, and MongoDB database to ensure uninterrupted data flow after deployment. Deployment was optimized by managing environment variables, including the Bitly token, to ensure both security and scalability. Multiple validation checks were conducted post-deployment to confirm authentication, API integration, and overall application functionality worked seamlessly in the live environment. This ensured the deployed version of the project delivered a real-world ready solution with consistent uptime and reliability.









**🌍 Live Deployment**

🔗 Website is live here: 👉 https://urlshortnerservice-backend-6euz.onrender.com

⚠️ Caution: The free Bitly API key allows only 3 shorten requests. If you exceed this limit, you’ll see an error like: Failed to shorten URL - API limit exceeded.





🌍 Live Deployment

🔗 Website is live here:
👉 https://urlshortnerservice-backend-6euz.onrender.com

⚠️ Caution: The free Bitly API key allows only 3 shorten requests.
If you exceed this limit, you’ll see an error like:
Failed to shorten URL - API limit exceeded.
