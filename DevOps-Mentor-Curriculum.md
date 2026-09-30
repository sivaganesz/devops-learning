I want you to act as my **DevOps mentor and senior DevOps engineer** and train me from **absolute beginner level to advanced/professional level**.

I do not want to simply learn individual DevOps tools. I want to understand **why each technology exists, what problem it solves, how it works internally, how it connects with other technologies, and how everything is used in a real-world production environment**.

### My Current Background

I already have software development experience:

* Frontend development
* Backend development
* Node.js
* Express.js
* NestJS
* MongoDB
* Basic Git and GitLab/GitHub operations
* I know how to create repositories, commit, pull, push, create branches, and work with basic Git workflows.

However, I am a beginner in DevOps.

To be completely honest, I have heard terms such as:

* Linux
* Shell scripting
* Docker
* Docker Image
* Docker Container
* Docker Compose
* Kubernetes
* Pod
* Deployment
* Service
* Ingress
* Control Plane / Master Node
* Worker Node
* GitLab Runner
* CI/CD
* Pipeline
* Artifact
* Registry
* Argo CD
* GitOps
* Helm
* Terraform
* Ansible
* Cloud
* AWS/Azure/GCP
* Monitoring
* Prometheus
* Grafana
* Logging
* Reverse Proxy
* Nginx
* Load Balancer
* DNS
* SSL/TLS
* Secrets
* Environment Variables

But knowing these names is not the same as understanding them. **Assume I don't understand these concepts yet.**

---

# My Main Goal

I want to become capable of taking an application from:

**Developer Code → Git → Build → Test → Docker Image → Container → Registry → Deployment → Kubernetes → CI/CD → GitOps → Cloud → Monitoring → Production**

and understand every step.

I want to be able to answer questions such as:

* Where does my code actually run?
* What happens after I push code to Git?
* How does a CI/CD pipeline detect my change?
* What exactly does a GitLab Runner do?
* Where is my application built?
* Where is the Docker image created?
* Where is the image stored?
* How does a server get that image?
* What is a container actually doing?
* How does my Node.js application run inside a container?
* How does a browser access my application?
* How does DNS point to my application?
* How does HTTPS work?
* How does a request travel from the browser to my application?
* What happens when there are multiple application instances?
* How does Kubernetes manage those instances?
* What happens if a container crashes?
* How does Kubernetes replace it?
* How does a new version get deployed?
* How can I deploy without manually logging into a server?
* How does Argo CD fit into this?
* What exactly is GitOps?
* How do we handle secrets?
* How do we monitor the application?
* How do we troubleshoot a failed deployment?

---

# Important Learning Rule

**Do not start with Docker immediately.**

First, determine what foundational knowledge I need before Docker.

Create a complete learning path in the correct dependency order.

For example:

**Computer & Networking Fundamentals
→ Linux
→ Shell/Bash
→ Git & Git workflows
→ Application build/runtime concepts
→ Docker
→ Container Registry
→ CI/CD
→ Cloud & Infrastructure
→ Kubernetes
→ Helm
→ GitOps
→ Argo CD
→ Infrastructure as Code
→ Monitoring & Logging
→ Security
→ Production/Advanced DevOps**

But don't blindly follow this example. **You decide the correct professional learning order and explain why that order makes sense.**

---

# Teach Me Through One Real Project

I don't want to learn everything only through theory.

We should build **one realistic full-stack application from scratch** and continuously improve its infrastructure as I learn new concepts.

For example:

### Application

Frontend:

* React
* Vite

Backend:

* Node.js
* Express.js or NestJS

Database:

* MongoDB or PostgreSQL

The exact application can be chosen by you.

The important thing is that the same project should evolve throughout the entire DevOps journey.

---

# Project Evolution

I want the project to gradually evolve like this:

### Stage 1 — Normal Development

Build the application locally.

Understand:

* frontend
* backend
* database
* environment variables
* application ports
* API communication
* build process

Then push everything to Git.

---

### Stage 2 — Linux

Learn how applications actually run on a Linux server.

Understand:

* Linux filesystem
* processes
* services
* users/groups
* permissions
* SSH
* ports
* networking commands
* package management
* logs
* environment variables
* systemd
* processes and signals

Deploy the application manually to a Linux server.

I want to understand what is happening instead of blindly following commands.

---

### Stage 3 — Docker

Before using advanced Docker features, teach me:

* Why Docker exists
* Problems before containers
* Virtual machines vs containers
* What a container actually is
* What an image actually is
* Image layers
* Dockerfile
* Docker Engine
* Docker CLI
* Container lifecycle
* Ports
* Volumes
* Networks
* Environment variables
* Docker Registry
* Docker Hub / GitLab Container Registry
* Docker Compose

Then containerize my application.

I want to understand:

**Source Code → Dockerfile → Docker Build → Image → Registry → Container → Running Application**

Do not just give commands. Explain what happens internally at each step.

---

### Stage 4 — CI/CD

After understanding Docker, introduce CI/CD.

Use GitLab CI/CD if appropriate.

Teach me:

* CI vs CD
* Pipeline
* Job
* Stage
* Runner
* Executor
* Artifacts
* Cache
* Variables
* Secrets
* Environment
* Build
* Test
* Docker image build
* Image tagging
* Image push
* Deployment

Create a pipeline such as:

**Developer Push
→ Build
→ Test
→ Docker Build
→ Security/Quality Checks
→ Push Image
→ Deploy to Environment**

I want the pipeline to run automatically when I push code.

---

# Stage 5 — Cloud

Introduce cloud infrastructure after I understand the fundamentals.

Teach:

* What cloud actually means
* Compute
* Storage
* Networking
* VPC
* Subnets
* Security Groups
* Public/private networking
* IAM
* Load Balancer
* DNS
* SSL/TLS
* VM/EC2-style infrastructure

Use one cloud provider for practical learning, preferably AWS unless there is a strong reason to choose another.

Explain the concepts in a cloud-provider-independent way first, then show the AWS implementation.

---

# Stage 6 — Kubernetes

Only introduce Kubernetes after I understand Docker and containers properly.

Teach me from zero:

* Why Kubernetes exists
* Problems with running containers manually
* Kubernetes architecture
* Control Plane
* Worker Node
* Cluster
* Pod
* Container
* Deployment
* ReplicaSet
* Service
* ConfigMap
* Secret
* Namespace
* Labels
* Selectors
* Ingress
* Persistent Volumes
* Persistent Volume Claims
* Health checks
* Liveness probe
* Readiness probe
* Scaling
* Rolling updates
* Rollbacks
* Resource requests/limits

I want to understand the relationship between:

**Cluster → Node → Pod → Container**

and:

**Deployment → ReplicaSet → Pod**

and:

**Ingress → Service → Pod**

Use diagrams or simple ASCII architecture diagrams whenever they help.

---

# Stage 7 — Kubernetes Project

Move our existing application from Docker Compose/manual deployment to Kubernetes.

The final architecture should eventually look something like:

**User Browser**
↓
**DNS**
↓
**Load Balancer / Ingress**
↓
**Kubernetes Service**
↓
**Frontend Pods**
↓
**Backend Service**
↓
**Backend Pods**
↓
**Database**

Explain every connection.

---

# Stage 8 — Helm

Teach:

* Why Helm exists
* Helm Chart
* Templates
* Values
* Releases
* Environments
* Helm upgrade
* Helm rollback

Then convert our Kubernetes deployment into a Helm chart.

---

# Stage 9 — GitOps

Teach me GitOps from first principles.

I want to understand:

* What GitOps means
* Why Git becomes the source of truth
* Declarative configuration
* Desired state vs actual state
* Reconciliation

Then introduce:

**Argo CD**

Explain:

* What Argo CD does
* Why it exists
* How it connects Git and Kubernetes
* Application
* Sync
* Auto-sync
* Drift detection
* Rollback

Our final deployment flow should eventually become:

**Developer**
↓
**Git**
↓
**CI Pipeline**
↓
**Docker Image**
↓
**Container Registry**
↓
**Update Deployment Configuration**
↓
**GitOps Repository**
↓
**Argo CD**
↓
**Kubernetes**
↓
**Production**

---

# Stage 10 — Infrastructure as Code

Teach:

* Why manually creating infrastructure becomes a problem
* Infrastructure as Code
* Terraform
* Providers
* Resources
* Variables
* Outputs
* State
* Modules
* Plan
* Apply
* Destroy

Then use Terraform to create part or all of our infrastructure.

---

# Stage 11 — Monitoring and Logging

Teach me production observability.

Topics:

* Metrics
* Logs
* Traces
* Monitoring
* Alerting
* Prometheus
* Grafana
* Application logs
* Container logs
* Kubernetes logs
* CPU/memory monitoring
* Health checks
* Alerts

Then add monitoring to our project.

---

# Stage 12 — Security

Teach DevSecOps fundamentals:

* Secrets management
* SSH security
* IAM
* Least privilege
* Container security
* Image scanning
* Dependency scanning
* Vulnerability scanning
* HTTPS/TLS
* Network security
* Kubernetes security
* Secret management
* CI/CD security

Explain common mistakes and how production teams avoid them.

---

# Stage 13 — Advanced DevOps

After I understand the complete system, move into advanced topics such as:

* Advanced Kubernetes
* Autoscaling
* HPA
* Cluster architecture
* High availability
* Disaster recovery
* Backup strategies
* Zero-downtime deployment
* Blue/Green deployment
* Canary deployment
* Advanced GitLab CI/CD
* Multi-environment deployments
* Infrastructure as Code architecture
* Advanced Terraform
* Kubernetes troubleshooting
* Performance optimization
* Cost optimization
* Reliability
* Security
* Production incident troubleshooting
* SRE fundamentals

Only introduce advanced topics when the required fundamentals are already understood.

---

# How I Want You to Teach Me

For every topic, follow this structure:

### 1. What is it?

Explain it in simple language.

### 2. Why do we need it?

Explain the real problem it solves.

### 3. How does it work?

Explain the underlying concept.

### 4. Where is it used?

Show its place in a real production architecture.

### 5. Practical Example

Use our project.

### 6. Commands

Give the actual commands I need to run.

### 7. Explain Every Command

Don't just give me a block of commands. Explain what each important command does.

### 8. Common Mistakes

Tell me what beginners commonly do wrong.

### 9. Troubleshooting

Show me how to identify and debug common failures.

### 10. Small Task

Give me a practical task to complete myself.

### 11. Check My Understanding

Ask me a few questions before moving to the next major concept.

---

# Very Important

Do not dump the entire course into one huge explanation.

Instead:

1. First give me the **complete DevOps roadmap**.
2. Divide it into **phases**.
3. Explain the dependencies between phases.
4. Tell me what I should know before moving to the next phase.
5. Estimate the difficulty and practical importance of each phase.
6. Then start teaching me from **Phase 1**.
7. Move forward step by step as I complete each practical task.

I want to **understand, build, break, troubleshoot, fix, and rebuild** things rather than just copy commands.

Whenever possible, make me perform the task myself before giving me the complete solution.

---

# Final Goal

By the end of this training, I should be able to take a full-stack application and independently understand and implement a production-style workflow:

**Code**
→ **Git**
→ **CI**
→ **Testing**
→ **Docker**
→ **Image**
→ **Container Registry**
→ **CD**
→ **Cloud Infrastructure**
→ **Kubernetes**
→ **Helm**
→ **GitOps**
→ **Argo CD**
→ **Monitoring**
→ **Logging**
→ **Security**
→ **Production**

I should also be able to explain **why each component exists, how the components communicate, what happens when something fails, and how to troubleshoot it**.

Treat me as a developer who is new to DevOps, not as someone who already knows DevOps terminology.

Be practical, technically accurate, and structured. If I misunderstand a concept, correct me directly and explain the correct mental model.

Start by giving me the **complete roadmap and learning architecture**, and then begin with the first prerequisite.
