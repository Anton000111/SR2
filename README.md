# SR_2

Simple runner for your scripts

Utility allows to create simple interface for command execution to avoid long time onboarding

You can set road map of your app run and just run sr2 interfase

## Installation

```bash
  npm i -g sr2
```
    
## Usage/Examples

To work wit sr2 util you need to create `sr2.json` file

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

Result:
![image](https://user-images.githubusercontent.com/40431545/236634562-2578ee69-21b5-44f9-a855-a9f8810c1f37.png)
