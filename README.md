# ⚽ FIFA World Cup Golden Boot Dashboard on AWS

A production-style DevOps project demonstrating the deployment of a React application on AWS using EC2, Nginx, Auto Scaling Groups, Application Load Balancer, Route 53, and AWS Certificate Manager.

---

## 📖 Project Overview

This project displays the FIFA World Cup Adidas Golden Boot standings in a modern, responsive dashboard. While the frontend is built with React and Vite, the primary objective of this project is to demonstrate a complete AWS deployment pipeline and highly available infrastructure.

---

## ✨ Features

- Modern FIFA-themed React UI
- Top 10 Golden Boot leaderboard
- Player images and national flags
- Responsive card-based layout
- Hosted on AWS EC2
- Served using Nginx
- Custom AMI
- Launch Template
- Auto Scaling Group
- Application Load Balancer
- Route 53 custom domain
- HTTPS using AWS Certificate Manager
- CPU-based Auto Scaling

---

## 🏗️ Architecture

> *(Architecture diagram will be added here.)*

---

## ☁️ AWS Services Used

- Amazon EC2
- Amazon Machine Image (AMI)
- Launch Templates
- Auto Scaling Groups
- Application Load Balancer
- Target Groups
- Amazon Route 53
- AWS Certificate Manager (ACM)
- CloudWatch

---

## 🛠️ Tech Stack

### Frontend

- React
- Vite
- CSS

### Web Server

- Nginx

### AWS

- EC2
- ALB
- ASG
- Route53
- ACM

### Testing

- ApacheBench (ab)
- stress

---

## 🚀 Deployment Workflow

1. Developed the React application locally.
2. Built the production version using Vite.
3. Deployed the build on an EC2 instance using Nginx.
4. Created a Custom AMI.
5. Created a Launch Template from the AMI.
6. Created an Auto Scaling Group.
7. Attached the Auto Scaling Group to an Application Load Balancer.
8. Configured CPU-based Auto Scaling.
9. Connected a custom domain using Route 53.
10. Enabled HTTPS using AWS Certificate Manager.

---

## 📈 Auto Scaling Demonstration

Auto Scaling Policy

- Minimum Capacity: 1
- Desired Capacity: 2
- Maximum Capacity: 3
- Scaling Metric: Average CPU Utilization
- Target CPU: 20%

CPU load was generated using:

```bash
stress --cpu 2 --timeout 600
```

Traffic testing was performed using:

```bash
ab -n 50000 -c 300 http://<ALB-DNS>
```

---

## 📷 Project Screenshots

Screenshots will be added here.

---

## 📚 What I Learned

- Deploying React applications on AWS EC2
- Configuring Nginx as a production web server
- Creating reusable Amazon Machine Images
- Launch Templates
- Auto Scaling Groups
- Application Load Balancers
- Target Groups
- Route 53 DNS Management
- HTTPS with AWS Certificate Manager
- CPU-based Auto Scaling
- CloudWatch monitoring

---

## 👨‍💻 Author

**Malahim Chaudhary**

Computer Science Student — FAST-NUCES

DevOps Intern — NETSOL Technologies
