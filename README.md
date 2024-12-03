# Scientific Calculator Project
Bonus Project for CS 4273

## Contributors
- [Erick Lopez](https://github.com/er-lo)
- [Ryeleigh Avila](https://github.com/RyeleighAvila)
- [Priscilla Devadhas](https://github.com/LillyDeva)

## Overview
This project is a scientific calculator developed to help understand git and use it as a team. The project was build using Next.js, and styled with TailwindCSS for a modern, responsive design. The calculator itself wasn't the main point of the assignment but rather using git to practice collaborative software development.

## Project Structure
```
CS-4273-Bonus-Calc-Project/
│
├── src/                
│     └── app/
│           └── page.tsx   # Source code
└── README.md              # Project overview
```

## Deployment
The project is hosted on Vercel for easy access and testing.
- Live Demo: [Click Here](https://cs-4273-bonus-calc-project.vercel.app/)

To deploy the application locally see the steps below.

## Getting Mac Set Up for Development with Next.js
```bash
# installs nvm (Node Version Manager)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash

# download and install Node.js (you may need to restart the terminal)
nvm install 18

# verifies the right Node.js version is in the environment
node -v # should print `v18.20.5`

# verifies the right npm version is in the environment
npm -v # should print `10.8.2`
```

## Getting the Project Running

First, clone the repository (detailed steps using GitHub Desktop below)

Second, in the repo run the following to command to install all the necessary packages for Next.js
```bash
npm install
```

Third, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Creating Branches and PRs
Steps to Create a Branch and Open a PR in GitHub Desktop
1. Install GitHub Desktop (If You Haven’t Already)
   - Download and install GitHub Desktop from desktop.github.com.
2. Clone the Repository
   - Open GitHub Desktop.
   - Log in to your GitHub account if prompted.
   - Go to File > Clone Repository.
   - Select the repository you’re working on (you can find it in the "GitHub.com" tab).
   - Click Clone to download it to your computer.
3. Find the Issue
   - Go to the Issues tab in your GitHub repository on the website.
   - Open the issue you’ll be working on and read the details carefully.
4. Create a New Branch
   - Open GitHub Desktop.
   - In the top menu, make sure your repository is selected.
   - Click Branch > New Branch (or use the shortcut Ctrl+Shift+N on Windows or Cmd+Shift+N on Mac).
   - Name your branch based on the issue, e.g., issue-42. (Good practice: Include the issue number in the branch name for clarity.)
   - Click Create Branch.
5. Make Changes in Your Code
   - Open the project folder on your computer (GitHub Desktop shows its location after cloning).
   - Use your favorite code editor (e.g., VS Code, Sublime Text) to make changes based on the issue.
   - Save your changes.
6. Commit Your Changes
   - Open GitHub Desktop. You’ll see the list of changes you’ve made under the Changes tab.
   - Review your changes to ensure everything looks correct.
   - Write a commit summary (a short message describing what you did) and an optional description.
   - Click Commit to <branch-name>.
7. Push Your Changes to GitHub
   - In GitHub Desktop, click Push Origin in the top toolbar to upload your branch and changes to GitHub.
8. Open a Pull Request (PR)
   - After pushing your branch, GitHub Desktop will show a banner that says: Create Pull Request. Click it.
   - This will open your browser and take you to the GitHub website.
   - Fill out the PR form:
     1. Add a descriptive title for your PR.
     2. In the description, write Fixes #<issue-number> to link the issue to the PR automatically.
     3. Review the changes and ensure the correct base branch (usually main) is selected.
   - Click Create Pull Request.
9. Collaborate and Merge
   - Your teammates might review your PR and leave comments.
   - Once approved, you or any team member can Merge the Pull Request in GitHub.
