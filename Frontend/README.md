
# Todo List 📝🎅🎄

This project is a task organizer designed especially for users who want organize their lives, featuring tools to manage their activities efficiently. Developed in React, it includes a friendly-themed user interface.

## Table of Contents
- [Main Features](#main-features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Contributions](#contributions)

## Main Features
The task app includes various sections and tools as detailed below:


### Add Task (Developing...)
 Allows user to add a new task.
- **Title**: the user can add the task's name.
- **Description**: the user can add the task's description.
- **Category**: the user can select a the task's category.

### Edit task (Developing...)
 Allows user to edit a task.
- **Title**: the user can edit the task's name.
- **Description**: the user can edit the task's description.
- **Category**: the user can select a new the task's category.

### Delete task (Developing...)
  Allows user to delete a task.

### Complete task (Developing...)
  Allows user to mark a task as completed.

## Requirements
- [Node.js](https://nodejs.org/) v18.19.1 or higher
- [React JS](https://angular.io/cli) v18 or higher
- [Git](https://git-scm.com/)

## Installation
1. Clone this repository to your local machine:
  ```bash
  git clone https://github.com/basathefish/ListaDeTareas.git
  ```
2. Navigate to the project directory:
  ```bash
  cd ListaDeTareas/Frontend
  ```
3. Install necessary dependencies:
  ```bash
  npm install
  ```

## Running the Project
To run the project in development mode, use the following command:

  ```bash
  npm run dev
  ```
This will start a development server. Open your browser and go to http://localhost:5173/. The app will automatically update when changes are made.

## Project Structure
The project is organized as follows:
  ```plaintext
## Project Structure
The project is organized with a standalone component structure, following the `core` and `shared` folders convention:
```plaintext
src/
 ├── asserts/                                                 
 ├── api/                
 │── configs/                  
 ├── components/
 ├── hooks/                      
 │── chill-zone/              
 ├── services/                    
 ├── components/  
 └── main.jsx                          
  ```

  ## Technologies Used
- **React** - Main framework for frontend development.
- **HTML5** and **CSS3** - Structure and styling for the application.
- **TailwindCSS** - Utility-first CSS framework for rapidly building custom user interfaces.

## Contributions
Contributions are welcome! Please follow the steps below to contribute:

1. Fork the repository.
2. Create a new branch for your changes (`git checkout -b feature/new-feature`).
3. Make your modifications.
4. Write commit messages following the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) standard:
   - **feat**: A new feature
   - **fix**: A bug fix
   - **docs**: Documentation only changes
   - **style**: Changes that do not affect the meaning of the code (white-space, formatting, etc.)
   - **refactor**: Code change that neither fixes a bug nor adds a feature
   - **test**: Adding missing tests or correcting existing tests
   - **chore**: Changes to the build process or auxiliary tools and libraries such as documentation generation
5. Push your changes (`git push origin feature/new-feature`).
6. Open a Pull Request for your changes to be reviewed.

### Example Commit Message
```plaintext
feat: add new reindeer sorting feature based on weather conditions
```

---

Merry Christmas and happy coding! 🎅🎄
