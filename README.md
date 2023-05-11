# SR_2

Simple runner for your scripts

Utility allows to create simple interface for command execution to avoid long time onboarding

You can set road map of your app run and just run sr2 interfase

## Installation

```bash
  npm i -g sr2
```

### To use with ui web interface

```bash
  npm i -g sr2 sr2_ui
```
[Link to the npm page of sr2_ui](https://www.npmjs.com/package/sr2_ui)
    
## Usage/Examples

To work with sr2 util you need to create `sr2.json` file

Example: 

```json
{
  "script 1": "echo script 1",
  "hello world": ["echo hello", "echo world"],
  "section": {
    "section script 1": "echo script 1",
    "section 1": {
      "section 1 script 1": "echo section 1 script 1",
      "section 1 script 2": "echo section 1 script 2"
    },
    "section script 2": "echo script 2"
  }
}
```

Run `sr2` inside the folder with `sr2.json` file

![image](https://user-images.githubusercontent.com/40431545/236634562-2578ee69-21b5-44f9-a855-a9f8810c1f37.png)

### Example with docker instalation instruction:

`sr2.json` file:
```json
{
  "instalation": {
    "CentOS": {
      "remove old": "sudo yum remove docker \\ docker-client \\ docker-client-latest \\ docker-common \\ docker-latest \\ docker-latest-logrotate \\ docker-logrotate \\ docker-engine",
      "install": [
        "sudo yum install -y yum-utils",
        "sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo",
        "sudo yum install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin"
      ],
      "start and verify": ["sudo systemctl start docker", "sudo docker run hello-world"]
    },
    "Ubuntu": {
      "remove old": "sudo apt-get remove docker docker-engine docker.io containerd runc",
      "install": [
        "sudo apt-get update", 
        "sudo apt-get install ca-certificates curl gnupg",
        "sudo install -m 0755 -d /etc/apt/keyrings",
        "curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg",
        "sudo chmod a+r /etc/apt/keyrings/docker.gpg",
        "echo \\ \"deb [arch=\"$(dpkg --print-architecture)\" signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \\ \"$(. /etc/os-release && echo \"$VERSION_CODENAME\")\" stable\" | \\ sudo tee /etc/apt/sources.list.d/docker.list > /dev/null",
        "sudo apt-get update",
        "sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin"
      ],
      "start and verify": "sudo docker run hello-world"
    }
  },
  "post-instalation": {
    "create group and add user": ["sudo groupadd docker", "sudo usermod -aG docker $USER"],
    "run hello-world": "docker run hello-world"
  }
}
```

Result view:

![image](https://user-images.githubusercontent.com/40431545/236636347-d4e43c8b-c977-4101-9202-fa249cc9e5f0.png)

![image](https://user-images.githubusercontent.com/40431545/236636404-0d503e33-6932-41ac-82cd-331e9469fc8b.png)
