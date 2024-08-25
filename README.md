# Todo CLI Tool

This is a simple command-line interface (CLI) tool for managing todos. You can add, mark, delete, and view todos using this tool. Todos are stored in a `todos.json` file.

## Installation

1. **Clone the repository:**

```

   git clone https://github.com/madhukar0721/Todo-CLI-Tool.git

   cd Todo-CLI-Tool

```

2. **Install dependencies:**

```

    npm install

```

3. **Link the CLI tool**
  
```

    npm install -g .

```

## Usage
 
### Commands

1. **Shows all commands**
```

    todo --help

```

2. **Add a todo**
```

    todo add <task>

```

3. **Mark a todo as done**
```

    todo done <task>

```
4. **Delete the first occurrence of a todo**
```

    todo delete <task>

```
5. **Delete all occurrences of a todo**
```

    todo delete-all <task>

```
6. **Show all todos**
```

    todo show

```
## Uninstallation

To remove the `todo` CLI tool from your system, follow the steps based on how it was installed:

1. **Uninstall Globally:**

    If you installed the `todo` CLI tool globally using `npm install -g .` you can uninstall it with:
```

    npm uninstall -g todo

```
2. **Remove Project Directory:**

    If you want to remove the local project directory and all its contents, delete the directory:

```

    rm -rf Todo-CLI-Tool
    
```
3. **Remove Dependencies:**

    To remove the `node_modules` directory and optionally `package-lock.json`, navigate to your project directory and run:

```

    rm -rf node_modules

    rm package-lock.json

```
## License

This project is licensed under the  GNU GENERAL PUBLIC LICENSE. See the [LICENSE](LICENSE) file for details.