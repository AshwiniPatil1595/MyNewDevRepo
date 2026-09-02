# 🚀 DevOps Roadmap Website

A responsive and interactive **DevOps Roadmap Website** built using only **HTML, CSS, and JavaScript**.

The website provides a structured learning path from **DevOps Beginner → Intermediate → Advanced**, along with useful resources and practical project ideas.

---

## 📁 Project Structure

```text
devops-roadmap/
│
├── index.html
├── roadmap.html
├── resources.html
├── style.css
├── script.js
└── README.md
```

### Files Description

| File             | Description                                 |
| ---------------- | ------------------------------------------- |
| `index.html`     | Home page and DevOps introduction           |
| `roadmap.html`   | Complete DevOps learning roadmap            |
| `resources.html` | DevOps learning resources and project ideas |
| `style.css`      | Shared CSS used by all three pages          |
| `script.js`      | Shared JavaScript used by all three pages   |
| `README.md`      | Project documentation                       |

---

## 🌐 Website Pages

### 1. Home

The home page introduces DevOps and contains:

* DevOps introduction
* DevOps lifecycle
* Plan
* Code
* Build
* Test
* Release
* Deploy
* Monitor
* Improve
* Beginner learning path
* Intermediate learning path
* Advanced learning path

---

### 2. Roadmap

The roadmap page provides a structured DevOps learning path.

Topics include:

#### Beginner

* Linux
* Linux Commands
* Linux File System
* Linux Permissions
* Linux Processes
* Networking
* IP Addresses
* DNS
* HTTP / HTTPS
* TCP / UDP
* Git
* GitHub
* Bash
* Python
* YAML
* JSON

#### Intermediate

* AWS
* Azure
* EC2
* S3
* VPC
* IAM
* Azure Virtual Machines
* Azure Monitor
* Docker
* Dockerfile
* Docker Compose
* Container Registry
* CI/CD
* Jenkins
* GitHub Actions
* Terraform
* Infrastructure as Code
* Ansible

#### Advanced

* Kubernetes
* Pods
* Deployments
* Services
* Ingress
* ConfigMaps
* Secrets
* Prometheus
* Grafana
* Azure Application Insights
* DevSecOps
* GitOps
* Argo CD
* Helm
* Cloud Architecture
* High Availability
* Disaster Recovery

---

## 📊 Progress Tracking

The roadmap includes an interactive progress tracker.

Users can:

* Check completed topics
* View completed topic count
* View completion percentage
* Search roadmap topics
* Filter by Beginner, Intermediate or Advanced
* Reset progress

Progress is stored using browser:

```text
localStorage
```

Therefore, progress remains available when the user refreshes the page or returns to the website using the same browser.

---

## 📚 Resources

The Resources page provides useful documentation for:

* Linux
* Git
* GitHub
* AWS
* Microsoft Azure
* Docker
* Kubernetes
* Terraform
* Ansible
* Jenkins
* Prometheus
* Grafana
* Azure Application Insights

It also contains practical DevOps project ideas.

---

## 🛠️ Technologies Used

This project is created using only:

```text
HTML5
CSS3
JavaScript
```

No frameworks or backend are required.

### HTML

Used to create the structure of the website.

### CSS

Used for:

* Layout
* Responsive design
* Cards
* Navigation
* Buttons
* Dark mode styling
* Progress bar
* Mobile design

### JavaScript

Used for:

* Dark/light mode
* Roadmap progress tracking
* Local storage
* Search
* Filtering
* Active navigation
* Reset progress

---

## 🌙 Dark Mode

The website supports Dark Mode.

Click the moon button:

```text
🌙
```

to switch to dark mode.

Click the sun button:

```text
☀️
```

to return to light mode.

The selected theme is saved in:

```javascript
localStorage
```

---

## 🔎 Search

The roadmap page includes a search box.

Example:

```text
Docker
```

The website will display the roadmap section containing Docker.

The Resources page also provides resource searching.

---

## 📱 Responsive Design

The website is designed to work on:

* Desktop
* Laptop
* Tablet
* Mobile

The layout automatically changes depending on screen size.

---

## 🚀 How to Run

### Step 1: Create the folder

Create:

```text
devops-roadmap
```

### Step 2: Create the files

Inside the folder create:

```text
index.html
roadmap.html
resources.html
style.css
script.js
README.md
```

### Step 3: Add the code

Copy the corresponding code into each file.

### Step 4: Open the website

Double-click:

```text
index.html
```

The website will open in your browser.

---

## 💻 Run Using VS Code

You can also use **Visual Studio Code**.

Open the project folder:

```text
File → Open Folder → devops-roadmap
```

Then open:

```text
index.html
```

You can use the **Live Server** extension to run the website locally.

---

## 🧪 Recommended DevOps Learning Order

Follow this order for learning:

```text
1. Linux
       ↓
2. Networking
       ↓
3. Git & GitHub
       ↓
4. Bash / Python
       ↓
5. Cloud - AWS / Azure
       ↓
6. Docker
       ↓
7. CI/CD
       ↓
8. Jenkins / GitHub Actions
       ↓
9. Terraform
       ↓
10. Ansible
       ↓
11. Kubernetes
       ↓
12. Monitoring
       ↓
13. DevSecOps
       ↓
14. GitOps
       ↓
15. Advanced Cloud & DevOps
```

---

## 🧑‍💻 Recommended Projects

Build projects while learning.

### Project 1 - Docker Application

Create a simple web application and containerize it using Docker.

Technologies:

```text
HTML
CSS
JavaScript
Docker
```

---

### Project 2 - CI/CD Pipeline

Create a pipeline that:

```text
GitHub
   ↓
Build
   ↓
Test
   ↓
Docker Build
   ↓
Deploy
```

Technologies:

```text
Git
GitHub
Jenkins
Docker
```

---

### Project 3 - AWS Infrastructure

Create AWS infrastructure using Terraform.

Example:

```text
Terraform
    ↓
VPC
    ↓
Subnet
    ↓
Security Group
    ↓
EC2
    ↓
Web Application
```

---

### Project 4 - Kubernetes Application

Deploy a Docker application to Kubernetes.

Learn:

```text
Pod
Deployment
Service
Ingress
ConfigMap
Secret
```

---

### Project 5 - Monitoring

Create a monitoring system using:

```text
Prometheus
     ↓
Metrics
     ↓
Grafana
     ↓
Dashboard
```

---

## 🔐 DevSecOps

After learning the core DevOps concepts, learn security.

Important topics:

* Secret management
* Container security
* Vulnerability scanning
* Dependency scanning
* Secure CI/CD
* IAM
* Least privilege
* Security monitoring

---

## 🎯 Goal of This Project

The goal of this website is to provide beginners with a simple and structured way to learn DevOps.

Instead of learning random tools, follow the roadmap step by step and build practical projects.

---

## 📌 Future Improvements

Possible future features:

* User login
* Backend
* Database
* User accounts
* Cloud deployment
* Certification tracking
* Quiz system
* DevOps MCQs
* Project progress
* Notes section
* Video resources
* Job preparation
* Interview questions
* Resume section

---

## 📄 License

This project is created for **learning and educational purposes**.

You are free to modify the HTML, CSS and JavaScript and use the project for your own learning.

---

## ⭐ DevOps Learning Tip

> Don't just watch DevOps tutorials. Practice every technology by building real projects.

Start with:

```text
Linux → Git → Cloud → Docker → CI/CD → Terraform → Kubernetes → Monitoring
```

and gradually move toward advanced DevOps and DevSecOps.

---

### Author

**DevOps Roadmap Project**

Built with ❤️ using:

```text
HTML + CSS + JavaScript
```
