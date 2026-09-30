# DevOps Mastery — Self-Paced Learning Platform & Curriculum

A complete, self-contained, offline-first static learning platform and curriculum designed to take a developer from **DevOps beginner to production engineer**.

Built from the ground up to follow **first principles**: understanding *why* each technology exists, what problem it solves, how it works under the hood, and how all pieces fit together in a real-world production environment.

---

## 🚀 Quick Start (No Server Required)

This website is **100% static and self-contained**. No Node.js server, bundler, or internet connection is required:

1. Clone or download this repository.
2. Double-click or open [`website/index.html`](website/index.html) in any modern browser (Chrome, Edge, Firefox, Safari).
3. Start studying from **Phase 01: DevOps Fundamentals**!

---

## 📚 Curriculum Structure (21 Phases)

Every phase follows a consistent **17-section learning framework**:
*Context Banner & Prerequisites* → *What is it & Why do we need it* → *Mental Model & Under the Hood* → *Architecture & Workflows* → *Core Concepts & Terminology* → *TaskFlow Integration* → *Annotated Commands* → *Common Mistakes & Troubleshooting* → *Hands-on Exercise* → *Knowledge Check Quiz* → *Continuity Bridge*.

| Phase | Module | Level | Focus Areas |
| :---: | :--- | :---: | :--- |
| **01** | [DevOps Fundamentals](website/phases/01-fundamentals.html) | Beginner | Culture, SDLC, Dev vs. Ops silos, feedback loops, CI/CD high-level overview |
| **02** | [OS & Computer Concepts](website/phases/02-os-concepts.html) | Beginner | Processes, CPU time-slicing, virtual memory, ports, file descriptors, sockets |
| **03** | [Linux](website/phases/03-linux.html) | Beginner | Filesystem hierarchy, permissions (rwx), process management, signals, SSH, systemd |
| **04** | [Shell & Bash Scripting](website/phases/04-shell-scripting.html) | Beginner | Bash scripting, variables, conditionals, loops, functions, automation scripts |
| **05** | [Networking Fundamentals](website/phases/05-networking.html) | Beginner | IP, CIDR subnets, DNS, TCP three-way handshake, UDP, ports, HTTP/S, TLS |
| **06** | [Git & Git Workflows](website/phases/06-git.html) | Beginner | Git internals (blobs, trees, commits), branching, merging vs. rebasing, GitFlow |
| **07** | [App Build & Runtime](website/phases/07-app-build-runtime.html) | Beginner | Build process, runtime environments, environment variables, CORS, health checks |
| **08** | [Docker — Core Concepts](website/phases/08-docker-core.html) | Intermediate | Problem before containers, VMs vs. Containers, Linux namespaces, cgroups, layers |
| **09** | [Docker — Dockerfile & Compose](website/phases/09-docker-advanced.html) | Intermediate | Multi-stage Dockerfiles, caching, volumes, networks, registries, Docker Compose |
| **10** | [CI/CD with GitLab](website/phases/10-cicd.html) | Intermediate | Pipelines, stages, jobs, GitLab Runner, Docker executor, cache vs. artifacts, secrets |
| **11** | [Cloud & AWS](website/phases/11-cloud.html) | Intermediate | IaaS/PaaS/SaaS, VPC, subnets, route tables, IGW, NAT, Security Groups, EC2, IAM |
| **12** | [Kubernetes — Core](website/phases/12-kubernetes-core.html) | Intermediate | Control plane, worker nodes, etcd, kubelet, Pods, Deployments, ReplicaSets |
| **13** | [Kubernetes — Networking](website/phases/13-kubernetes-networking.html) | Intermediate | ClusterIP, NodePort, LoadBalancer Services, CoreDNS, Ingress Controllers, TLS |
| **14** | [Kubernetes — Config & Ops](website/phases/14-kubernetes-config.html) | Intermediate | ConfigMaps, Secrets, PV/PVC, StorageClasses, Liveness & Readiness probes, HPA |
| **15** | [Helm](website/phases/15-helm.html) | Intermediate | Package management for K8s, Chart anatomy, Go templating, values, releases |
| **16** | [GitOps & Argo CD](website/phases/16-gitops.html) | Advanced | Git as single source of truth, reconciliation, drift detection, Argo CD |
| **17** | [Terraform & IaC](website/phases/17-terraform.html) | Advanced | Infrastructure as Code, Terraform vs. GitOps, HCL, state management, modules |
| **18** | [Monitoring & Logging](website/phases/18-monitoring.html) | Advanced | Metrics, logs, traces, Prometheus, PromQL, Grafana dashboards, alerting |
| **19** | [Security (DevSecOps)](website/phases/19-security.html) | Advanced | Secrets management (Vault, Sealed Secrets), container hardening, Trivy scanning |
| **20** | [Advanced DevOps](website/phases/20-advanced.html) | Advanced | HPA, Blue/Green & Canary deployments, SRE (SLI/SLO/SLA), disaster recovery |
| **21** | [TaskFlow End-to-End Project](website/phases/21-project.html) | Advanced | Full project capstone pulling all 20 phases into an end-to-end production setup |

---

## 🎯 The Real-World Application: "TaskFlow"

Rather than teaching disjointed toy examples, every single phase applies its concepts to one evolving full-stack project:
- **Frontend:** React + Vite
- **Backend:** NestJS (Node.js + TypeScript)
- **Database:** PostgreSQL
- **Workflow:** Code → Git → GitLab CI → Docker → Registry → EKS → Helm → Argo CD → Prometheus/Grafana

---

## ✨ Website Features

- **🔍 Full Offline Search:** Instant client-side search across all topics, concepts, tools, commands, and technologies.
- **📖 Global DevOps Glossary:** Over 80 fundamental terms indexed alphabetically with direct links to corresponding lessons.
- **🏗️ Interactive Architecture View:** Visual end-to-end cloud infrastructure diagram mapping every component.
- **🚀 Complete DevOps Journey:** Chronological timeline tracing a single commit from local developer terminal to user browser.
- **📊 Local Progress Tracking:** Browser `localStorage` tracks visited phases and displays a real-time progress bar.
- **🌓 Dark / Light Theme:** Persistent theme toggle with developer-focused styling.
- **💻 Syntax Highlighting:** Embedded local Prism.js with support for Bash, YAML, Dockerfile, JavaScript, Nginx, and HCL.
- **🔤 Self-Hosted Typography:** Includes local WOFF2 font files for *Inter* and *JetBrains Mono*.

---

## 📂 Repository Layout

```text
E:/PROJECTS/Devops/
├── README.md                          # Repository documentation
├── DevOps-Mentor-Curriculum.md        # Original curriculum & learning roadmap specification
├── Static-Learning-Website.md         # Original website implementation specification
└── website/                           # The complete learning website
    ├── index.html                     # Home page & full roadmap
    ├── architecture.html              # Real-World Architecture diagram
    ├── journey.html                   # Complete DevOps Journey walkthrough
    ├── glossary.html                  # Global DevOps glossary
    ├── search.html                    # Offline fuzzy search page
    ├── phases/                        # 21 structured phase modules
    │   ├── 01-fundamentals.html
    │   ├── 02-os-concepts.html
    │   └── ... (03 to 21)
    └── assets/                        # Local stylesheets, scripts, vendor libs, fonts
        ├── css/
        ├── js/
        ├── fonts/
        └── vendor/
```
