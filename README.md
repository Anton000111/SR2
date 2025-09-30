# SR2 - Interactive Documentation Tool

> **Create beautiful, interactive command-line documentation for your projects**

[![GitHub repo](https://img.shields.io/badge/GitHub-Anton000111%2FSR2-blue?style=flat-square&logo=github)](https://github.com/Anton000111/SR2)
[![npm version](https://img.shields.io/npm/v/sr2?style=flat-square&logo=npm)](https://www.npmjs.com/package/sr2)

SR2 transforms your project documentation into an interactive command-line experience. Instead of static README files, create living documentation that users can navigate, explore, and execute directly.

## 🎯 Main Features

- 📖 **Interactive Documentation**: Navigate through structured guides with keyboard controls
- ⚡ **Live Command Execution**: Execute commands directly from the documentation
- 🎨 **Beautiful Interface**: Clean, intuitive command-line interface with descriptions
- 🔄 **Nested Organization**: Create hierarchical documentation structures
- 💬 **Rich Descriptions**: Add detailed explanations for every command and section
- ⌨️ **Interactive Commands**: Full support for commands requiring user input
- 🚀 **Zero Setup**: Just create JSON files and run `sr2`

## Installation

### Global Installation (Recommended)
```bash
npm i -g sr2
```

### Project Installation
```bash
npm i -D sr2
```

Then add to your `package.json` scripts:
```json
{
  "scripts": {
    "docs": "sr2"
  }
}
```

## Quick Start

1. Create `sr2.json` and `sr2.description.json` in your project
2. Run `sr2` (global) or `npm run docs` (local) to launch your interactive documentation

## What Makes SR2 Special?

Instead of this traditional approach:
```
README.md:
1. Install dependencies: npm install
2. Run tests: npm test
3. Build project: npm run build
```

Create this interactive experience:

```
$ sr2

Use W, A, S, D keys or Arrow keys for navigation
D/→ - go into section, A/← - go back to previous section
W/↑ - previous item, S/↓ - next item
Press Enter to execute command

Install dependencies
Run tests
Build project
Advanced setup
-------------------------------------------
Install dependencies

Install all required packages for the project

Press Enter to execute command
```

## Real-World Examples

### Example: Project Setup Guide

**sr2.json**
```json
{
  "Install dependencies": "npm install",
  "Setup environment": "cp .env.example .env",
  "Run database migrations": "npm run migrate",
  "Start development server": "npm run dev",
  "Run tests": "npm test",
  "Full setup with input": [
    "echo 'Setting up project...'",
    "read -p 'Enter project name: ' name && echo 'Project: $name'",
    "npm install",
    "echo 'Setup complete!'"
  ],
  "Deploy with confirmation": [
    "echo 'Preparing deployment...'",
    "read -p 'Deploy to production? (y/N): ' confirm",
    "if [ \"$confirm\" = \"y\" ]; then npm run deploy:prod; else echo 'Deployment cancelled'; fi"
  ]
}
```

**sr2.description.json**
```json
{
  "Install dependencies": "Install all required packages",
  "Setup environment": "Copy environment configuration file",
  "Run database migrations": "Initialize database schema",
  "Start development server": "Launch the development server on port 3000",
  "Run tests": "Execute the test suite",
  "Full setup with input": "Interactive setup with project name input",
  "Deploy with confirmation": "Deploy with user confirmation prompt"
}
```

**Actual terminal output:**
```
$ sr2

Use W, A, S, D keys or Arrow keys for navigation
D/→ - go into section, A/← - go back to previous section
W/↑ - previous item, S/↓ - next item
Press Enter to execute command

Install dependencies
Setup environment
Run database migrations
Start development server
Run tests
Full setup with input
Deploy with confirmation
-------------------------------------------
Full setup with input

Interactive setup with project name input

Press Enter to execute command

$ Setting up project...
Enter project name: MyAwesomeProject
Project: MyAwesomeProject
$ npm install
added 1250 packages in 45s
$ Setup complete!

-------------------------------------------
Press Enter to return to navigation
```

**Example with deployment confirmation:**
```
$ Deploy with confirmation

Deploy with user confirmation prompt

Press Enter to execute command

$ Preparing deployment...
Deploy to production? (y/N): n
Deployment cancelled

-------------------------------------------
Press Enter to return to navigation
```

### 1. Nested Documentation Structure

**sr2.json**
```json
{
  "Quick Start": {
    "Install": "npm install",
    "Setup": "npm run setup",
    "Start": "npm start"
  },
  "Testing": {
    "Unit Tests": "npm run test:unit",
    "Integration Tests": "npm run test:integration",
    "Coverage Report": "npm run test:coverage"
  },
  "Build & Deploy": {
    "Build": "npm run build",
    "Deploy to Staging": "npm run deploy:staging",
    "Deploy to Production": "npm run deploy:prod"
  }
}
```

**sr2.description.json**
```json
{
  "Quick Start": {
    "Quick Start": "Get up and running in minutes",
    "Install": "Install all project dependencies",
    "Setup": "Configure environment and database",
    "Start": "Launch the development server"
  },
  "Testing": {
    "Testing": "Comprehensive testing suite",
    "Unit Tests": "Run individual component tests",
    "Integration Tests": "Test component interactions",
    "Coverage Report": "Generate detailed coverage analysis"
  },
  "Build & Deploy": {
    "Build & Deploy": "Production deployment pipeline",
    "Build": "Create optimized production build",
    "Deploy to Staging": "Deploy to staging environment",
    "Deploy to Production": "Deploy to live production"
  }
}
```

**Terminal output when navigating:**
```
$ sr2

Use W, A, S, D keys or Arrow keys for navigation
D/→ - go into section, A/← - go back to previous section
W/↑ - previous item, S/↓ - next item
Press Enter to execute command

Quick Start
Testing
Build & Deploy
-------------------------------------------
Quick Start

Get up and running in minutes

Press Enter to execute command

# User presses D to enter Quick Start section

Quick Start/
Use W, A, S, D keys or Arrow keys for navigation
D/→ - go into section, A/← - go back to previous section
W/↑ - previous item, S/↓ - next item
Press Enter to execute command

Install
Setup
Start
-------------------------------------------
Install

Install all project dependencies

Press Enter to execute command
```

### 2. System Administration Guide

**sr2.json**
```json
{
  "🐧 Linux Setup": {
    "Ubuntu/Debian": {
      "Update System": "sudo apt update && sudo apt upgrade -y",
      "Install Docker": [
        "sudo apt-get remove docker docker-engine docker.io containerd runc",
        "sudo apt-get update",
        "sudo apt-get install ca-certificates curl gnupg",
        "sudo install -m 0755 -d /etc/apt/keyrings",
        "curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg",
        "sudo chmod a+r /etc/apt/keyrings/docker.gpg",
        "echo \"deb [arch=\"$(dpkg --print-architecture)\" signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \"$(. /etc/os-release && echo \"$VERSION_CODENAME\")\" stable\" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null",
        "sudo apt-get update",
        "sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin"
      ],
      "Verify Installation": "sudo docker run hello-world"
    },
    "CentOS/RHEL": {
      "Update System": "sudo yum update -y",
      "Install Docker": [
        "sudo yum remove docker docker-client docker-client-latest docker-common docker-latest docker-latest-logrotate docker-logrotate docker-engine",
        "sudo yum install -y yum-utils",
        "sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo",
        "sudo yum install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin"
      ],
      "Start Docker": "sudo systemctl start docker && sudo systemctl enable docker"
    }
  },
  "🐳 Docker Management": {
    "List Containers": "docker ps -a",
    "Clean Up": "docker system prune -a",
    "View Logs": "docker logs <container_name>",
    "Interactive Shell": "docker exec -it <container_name> /bin/bash"
  }
}
```

### 3. Interactive Tutorial

**sr2.json**
```json
{
  "🎓 Learn Git": {
    "📚 Basics": {
      "Initialize Repository": "git init",
      "Check Status": "git status",
      "Add Files": "git add .",
      "First Commit": "git commit -m \"Initial commit\""
    },
    "🌿 Branching": {
      "Create Branch": "git checkout -b feature-branch",
      "Switch Branch": "git checkout main",
      "Merge Branch": "git merge feature-branch",
      "Delete Branch": "git branch -d feature-branch"
    },
    "🔄 Remote Operations": {
      "Add Remote": "git remote add origin <url>",
      "Push Changes": "git push origin main",
      "Pull Changes": "git pull origin main",
      "Clone Repository": "git clone <url>"
    }
  },
  "🛠️ Troubleshooting": {
    "Reset Changes": "git reset --hard HEAD",
    "View History": "git log --oneline",
    "Check Differences": "git diff",
    "Stash Changes": "git stash"
  }
}
```

## Interface Navigation

```
$ sr2

Use W, A, S, D keys or Arrow keys for navigation
D/→ - go into section, A/← - go back to previous section
W/↑ - previous item, S/↓ - next item
Press Enter to execute command

Install dependencies
Run tests
Build project
Advanced setup
-------------------------------------------
Install dependencies

Install all required packages for the project

Press Enter to execute command
```

## Command Types

### Simple Commands
```json
{
  "hello": "echo Hello World"
}
```

### Command Sequences (Arrays)
```json
{
  "setup": [
    "npm install",
    "npm run build",
    "npm start"
  ]
}
```

### Interactive Commands with Input
```json
{
  "user setup": [
    "echo 'Welcome to the setup wizard!'",
    "read -p 'Enter your name: ' name",
    "read -p 'Enter your email: ' email",
    "echo 'Hello $name, your email is $email'",
    "echo 'Setup complete!'"
  ]
}
```

### Conditional Commands
```json
{
  "deploy": [
    "echo 'Checking environment...'",
    "read -p 'Deploy to production? (y/N): ' confirm",
    "if [ \"$confirm\" = \"y\" ]; then",
    "  echo 'Deploying to production...'",
    "  npm run deploy:prod",
    "else",
    "  echo 'Deploying to staging...'",
    "  npm run deploy:staging",
    "fi"
  ]
}
```

### Nested Sections
```json
{
  "development": {
    "start": "npm start",
    "build": "npm run build",
    "test": {
      "unit": "npm run test:unit",
      "integration": "npm run test:integration"
    }
  }
}
```

## Navigation Controls

| Key | Action | Description |
|-----|--------|-------------|
| `↑` `W` | Previous | Move to previous item |
| `↓` `S` | Next | Move to next item |
| `→` `D` | Enter | Go into section |
| `←` `A` | Back | Go back to previous section |
| `Enter` | Execute | Run selected command |

## Interactive Commands

SR2 supports commands that require user input:

```
$ sr2

Use W, A, S, D keys or Arrow keys for navigation
D/→ - go into section, A/← - go back to previous section
W/↑ - previous item, S/↓ - next item
Press Enter to execute command

Setup wizard
Run tests
Build project
-------------------------------------------
Setup wizard

Interactive setup wizard for project configuration

Press Enter to execute command

$ Enter your name: John
Hello, John! Welcome to the project!

-------------------------------------------
Press Enter to return to navigation
```

## Use Cases

### 📚 **Project Documentation**
- Onboarding guides for new developers
- Step-by-step setup instructions
- Development workflow documentation

### 🛠️ **System Administration**
- Server setup and configuration guides
- Maintenance procedures
- Troubleshooting workflows

### 🎓 **Educational Content**
- Interactive tutorials
- Command-line learning tools
- Technical skill development

### 🚀 **DevOps & Deployment**
- CI/CD pipeline documentation
- Environment setup guides
- Deployment procedures

## File Structure

```
your-project/
├── sr2.json              # Command structure
├── sr2.description.json  # Descriptions and help text
└── README.md            # Traditional documentation (optional)
```

## Advanced Features

### Nested Descriptions
```json
{
  "Section": {
    "Section": "This section's description",
    "Command": "This command's description",
    "Subsection": {
      "Subsection": "Subsection description",
      "Command": "Command description"
    }
  }
}
```

### Command Sequences
```json
{
  "Full Setup": [
    "npm install",
    "npm run setup:env",
    "npm run setup:db",
    "npm start"
  ]
}
```

## Why SR2?

### ❌ **Traditional Documentation Problems**
- Static text that gets outdated
- No way to test commands
- Hard to navigate complex procedures
- Users copy-paste commands manually

### ✅ **SR2 Solutions**
- Living documentation that stays current
- Direct command execution
- Intuitive navigation
- Interactive experience

## Getting Started

### Option 1: Global Installation (Recommended)
1. **Install SR2 globally**: `npm i -g sr2`
2. **Create your documentation**:
   - `sr2.json` - Command structure
   - `sr2.description.json` - Descriptions
3. **Run your documentation**: `sr2`
4. **Share with your team** - They just need to run `sr2`!

### Option 2: Project Installation
1. **Install SR2 as dev dependency**: `npm i -D sr2`
2. **Add to package.json scripts**:
   ```json
   {
     "scripts": {
       "docs": "sr2"
     }
   }
   ```
3. **Create your documentation files**
4. **Run your documentation**: `npm run docs`
5. **Team members**: `npm install && npm run docs`

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

## License

MIT License - see [LICENSE](LICENSE) for details.

---

**Transform your documentation from static text into an interactive experience that users actually want to use!**
