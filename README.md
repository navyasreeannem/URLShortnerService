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

## 🔹 For the Project Owner (Build & Push Image)  

### 1. Build the Docker image  
```bash
docker build -t rishithakoganti/url-shortener-backend:tagname .


```
### 2. Login to Docker Hub:
   ```bash
        docker login
   ```
### 3. Push the image to Docker Hub:
   ```bash
        docker push rishithakoganti/url-shortener-backend:tagname
   ```
🔹 For Other Developers (Pull & Run Image)
### 1. Login to Docker Hub:
   ```bash
        docker login
   ```
### 2. Pull the image from Docker Hub:
 ```bash
        docker pull rishithakoganti/url-shortener-backend:tagname
```
### 3. Run the container:
 ```bash
        docker run -d -p 5000:5000 --name url-shortener-container rishithakoganti/url-shortener-backend:tagname
```
### 4. Access inside the container (optional):
 ```bash
         docker exec -it url-shortener-container /bin/bash
```
```bash
         or
         docker exec -it url-shortener-container sh
   ```
### 5. Check running containers:
    ```bash
         docker ps
    ```
### 6. View container logs (optional):
    ```bash
         docker logs -f url-shortener-container
    ```
✅ Now the service will be running at:
👉 http://localhost:5000/ (or the port you exposed)

---


