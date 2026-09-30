/**
 * routes.js — Complete site navigation data
 *
 * This is a plain JS global (no fetch, no modules).
 * Works on file:// protocol with no web server.
 * Every HTML page includes this via <script src>.
 *
 * PATH CONVENTION:
 *  - Phase pages live in:   phases/NN-name.html
 *  - Special pages live in: *.html (root)
 *  - This file is at:       assets/js/routes.js
 *  - Relative paths depend on the location of the consuming page.
 *    sidebar.js computes the correct prefix automatically.
 */

const DEVOPS_ROUTES = {
  site: {
    title:   'DevOps Mastery',
    tagline: 'Beginner to Production Engineer',
  },

  /* -----------------------------------------------------------------
     Special Pages (not part of the phase sequence)
     ----------------------------------------------------------------- */
  specials: [
    {
      id:    'home',
      title: 'Home & Roadmap',
      file:  'index.html',          // relative to root
      icon:  '🏠',
    },
    {
      id:    'architecture',
      title: 'Real-World Architecture',
      file:  'architecture.html',
      icon:  '🏗️',
    },
    {
      id:    'journey',
      title: 'Complete DevOps Journey',
      file:  'journey.html',
      icon:  '🚀',
    },
    {
      id:    'glossary',
      title: 'Glossary',
      file:  'glossary.html',
      icon:  '📖',
    },
    {
      id:    'search',
      title: 'Search',
      file:  'search.html',
      icon:  '🔍',
    },
  ],

  /* -----------------------------------------------------------------
     Phase Pages (ordered learning path)
     ----------------------------------------------------------------- */
  phases: [
    {
      id:          '01-fundamentals',
      number:      '01',
      title:       'DevOps Fundamentals',
      file:        'phases/01-fundamentals.html',
      level:       'beginner',     // beginner | intermediate | advanced
      topics:      ['What is DevOps?', 'SDLC', 'DevOps Culture', 'CI/CD Overview'],
      description: 'Understand what DevOps is, why it exists, and how it changes the way software is built and delivered.',
    },
    {
      id:          '02-os-concepts',
      number:      '02',
      title:       'OS & Computer Concepts',
      file:        'phases/02-os-concepts.html',
      level:       'beginner',
      topics:      ['How Programs Run', 'Processes & Memory', 'CPU & Scheduling', 'Ports & File Descriptors'],
      description: 'Learn how computers actually run programs — the foundation required before studying Linux.',
    },
    {
      id:          '03-linux',
      number:      '03',
      title:       'Linux',
      file:        'phases/03-linux.html',
      level:       'beginner',
      topics:      ['Filesystem', 'Users & Permissions', 'Processes & Signals', 'SSH', 'Package Management', 'Logs', 'Systemd', 'Env Variables'],
      description: 'Learn Linux as a DevOps professional — from filesystem navigation to running and managing services.',
    },
    {
      id:          '04-shell-scripting',
      number:      '04',
      title:       'Shell & Bash Scripting',
      file:        'phases/04-shell-scripting.html',
      level:       'beginner',
      topics:      ['Bash Basics', 'Variables & Conditionals', 'Loops & Functions', 'Practical Scripts'],
      description: 'Write Bash scripts that automate tasks — essential for CI/CD pipelines and server management.',
    },
    {
      id:          '05-networking',
      number:      '05',
      title:       'Networking Fundamentals',
      file:        'phases/05-networking.html',
      level:       'beginner',
      topics:      ['IP & Subnets', 'DNS', 'TCP/UDP & Ports', 'HTTP/HTTPS', 'TLS/SSL', 'Load Balancing'],
      description: 'Understand how data travels across networks — from IP addresses to HTTPS and load balancers.',
    },
    {
      id:          '06-git',
      number:      '06',
      title:       'Git & Git Workflows',
      file:        'phases/06-git.html',
      level:       'beginner',
      topics:      ['Git Internals', 'Branching & Merging', 'Git Workflows', 'Tags & Releases'],
      description: 'Go beyond basic Git — understand how Git works internally and how teams collaborate at scale.',
    },
    {
      id:          '07-app-build-runtime',
      number:      '07',
      title:       'App Build & Runtime',
      file:        'phases/07-app-build-runtime.html',
      level:       'beginner',
      topics:      ['Build Process', 'Runtime Concepts', 'Environment Variables', 'Ports & APIs'],
      description: 'Understand how full-stack applications are built, configured, and run — before containerizing them.',
    },
    {
      id:          '08-docker-core',
      number:      '08',
      title:       'Docker — Core Concepts',
      file:        'phases/08-docker-core.html',
      level:       'intermediate',
      topics:      ['Why Containers?', 'VMs vs Containers', 'Images & Layers', 'Docker Engine', 'Container Lifecycle'],
      description: 'Understand what Docker is, why containers exist, and how images and containers work internally.',
    },
    {
      id:          '09-docker-advanced',
      number:      '09',
      title:       'Docker — Dockerfile & Compose',
      file:        'phases/09-docker-advanced.html',
      level:       'intermediate',
      topics:      ['Dockerfile', 'Volumes & Networks', 'Registry & Docker Hub', 'Docker Compose'],
      description: 'Build images from Dockerfiles, persist data with volumes, connect services, and orchestrate with Compose.',
    },
    {
      id:          '10-cicd',
      number:      '10',
      title:       'CI/CD with GitLab',
      file:        'phases/10-cicd.html',
      level:       'intermediate',
      topics:      ['CI vs CD', 'Pipelines & Stages', 'GitLab Runner', 'Artifacts & Cache', 'Variables & Secrets', 'Full Pipeline'],
      description: 'Build automated pipelines that test, build, and deploy your application on every code push.',
    },
    {
      id:          '11-cloud',
      number:      '11',
      title:       'Cloud & AWS',
      file:        'phases/11-cloud.html',
      level:       'intermediate',
      topics:      ['Cloud Concepts', 'Compute (EC2)', 'VPC & Networking', 'IAM', 'Storage (S3)', 'Load Balancer & DNS', 'SSL/TLS'],
      description: 'Understand cloud infrastructure fundamentals and learn to provision and network AWS resources.',
    },
    {
      id:          '12-kubernetes-core',
      number:      '12',
      title:       'Kubernetes — Core',
      file:        'phases/12-kubernetes-core.html',
      level:       'intermediate',
      topics:      ['Why Kubernetes?', 'Architecture', 'Control Plane & Worker Nodes', 'Pod', 'Deployment', 'ReplicaSet'],
      description: 'Understand why Kubernetes exists, how its architecture works, and how Deployments manage Pods.',
    },
    {
      id:          '13-kubernetes-networking',
      number:      '13',
      title:       'Kubernetes — Networking',
      file:        'phases/13-kubernetes-networking.html',
      level:       'intermediate',
      topics:      ['Service', 'Ingress', 'Cluster DNS', 'External Traffic Flow', 'Network Policies'],
      description: 'Learn how traffic reaches your application inside Kubernetes — Services, Ingress, and cluster DNS.',
    },
    {
      id:          '14-kubernetes-config',
      number:      '14',
      title:       'Kubernetes — Config & Operations',
      file:        'phases/14-kubernetes-config.html',
      level:       'intermediate',
      topics:      ['ConfigMap & Secret', 'Persistent Volumes', 'Health Checks', 'Scaling & Rolling Updates', 'Namespaces', 'Resource Limits'],
      description: 'Configure applications properly, persist data, handle health, scale automatically, and manage resources.',
    },
    {
      id:          '15-helm',
      number:      '15',
      title:       'Helm',
      file:        'phases/15-helm.html',
      level:       'intermediate',
      topics:      ['Why Helm?', 'Chart Structure', 'Templates & Values', 'Releases & Environments', 'Upgrade & Rollback'],
      description: 'Package your Kubernetes deployment as a reusable Helm chart and manage releases across environments.',
    },
    {
      id:          '16-gitops',
      number:      '16',
      title:       'GitOps & Argo CD',
      file:        'phases/16-gitops.html',
      level:       'advanced',
      topics:      ['GitOps Principles', 'Declarative Config', 'Desired vs Actual State', 'Argo CD', 'Sync & Auto-Sync', 'Drift Detection', 'Rollback'],
      description: 'Use Git as the single source of truth for your cluster state and automate deployments with Argo CD.',
    },
    {
      id:          '17-terraform',
      number:      '17',
      title:       'Terraform & IaC',
      file:        'phases/17-terraform.html',
      level:       'advanced',
      topics:      ['Why IaC?', 'Terraform vs GitOps', 'Providers & Resources', 'State Management', 'Variables & Outputs', 'Modules'],
      description: 'Provision cloud infrastructure as code with Terraform — and understand how it differs from GitOps.',
    },
    {
      id:          '18-monitoring',
      number:      '18',
      title:       'Monitoring & Logging',
      file:        'phases/18-monitoring.html',
      level:       'advanced',
      topics:      ['Observability Pillars', 'Prometheus', 'Grafana', 'Application Logs', 'Container & K8s Logs', 'Alerting'],
      description: 'Add full observability to your production system — metrics, logs, traces, dashboards, and alerts.',
    },
    {
      id:          '19-security',
      number:      '19',
      title:       'Security (DevSecOps)',
      file:        'phases/19-security.html',
      level:       'advanced',
      topics:      ['Secrets Management', 'IAM & Least Privilege', 'Container Security', 'Image Scanning', 'Network Security', 'CI/CD Security'],
      description: 'Secure every layer of your DevOps pipeline — from image scanning to Kubernetes network policies.',
    },
    {
      id:          '20-advanced',
      number:      '20',
      title:       'Advanced DevOps',
      file:        'phases/20-advanced.html',
      level:       'advanced',
      topics:      ['Autoscaling (HPA)', 'Blue/Green & Canary', 'Multi-Env CI/CD', 'Disaster Recovery', 'SRE Fundamentals', 'Cost & Performance'],
      description: 'Master advanced deployment patterns, reliability engineering, and production-grade operational practices.',
    },
    {
      id:          '21-project',
      number:      '21',
      title:       'End-to-End Project',
      file:        'phases/21-project.html',
      level:       'advanced',
      topics:      ['TaskFlow: Local Dev', 'Containerize', 'CI/CD Pipeline', 'Deploy to K8s', 'Helm Chart', 'GitOps', 'Monitoring', 'Production'],
      description: 'Build the complete TaskFlow application — from local development to a fully monitored, GitOps-deployed Kubernetes production system.',
    },
  ],

  /* -----------------------------------------------------------------
     Helper: Get phase index by ID
     ----------------------------------------------------------------- */
  getPhaseIndex(id) {
    return this.phases.findIndex(p => p.id === id);
  },

  getPrev(id) {
    const i = this.getPhaseIndex(id);
    return i > 0 ? this.phases[i - 1] : null;
  },

  getNext(id) {
    const i = this.getPhaseIndex(id);
    return i >= 0 && i < this.phases.length - 1 ? this.phases[i + 1] : null;
  },
};
