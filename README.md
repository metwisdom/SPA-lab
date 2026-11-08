# Personal Project Showcase

A responsive, single-page React app for adding and searching a small collection of projects. The layout follows the mock-up: a centered title, the add-project form, then the searchable project list. Those sections stack vertically at every screen size.

## Requirements

- Node.js 20.19+ or 22.12+
- npm

## Setup and usage

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (normally `http://localhost:5173`). Add a project with a title and description; search matches either field.

```bash
npm test          # Run unit and interaction tests
npm run lint      # Run ESLint
npm run build     # Create a production build in dist/
npm run preview   # Preview the production build
```

## Component tree and state

```text
App
├── AddProjectForm
└── ProjectList
    └── ProjectItem (one per matching project)
```

- `App` owns the `projects` array and `handleAddProject(title, description)`, since both the form and list depend on project data. It passes `onAddProject` to `AddProjectForm` and `projects` to `ProjectList`.
- `AddProjectForm` owns the temporary `title` and `description` input values. On valid submission it calls `onAddProject` and clears the fields.
- `ProjectList` owns the `searchTerm` input value and derives the filtered list from `projects`; it passes each project to `ProjectItem`.
- `ProjectItem` receives one `project` object and displays its title and description.

## Structure

```text
src/
├── tests/           # App and component interaction tests
├── components/      # AddProjectForm, ProjectList, ProjectItem and shared styles
├── App.jsx          # Page composition and project state
├── App.css          # Page layout and responsive breakpoints
├── index.css        # Global styles
└── main.jsx         # React entry point
```

## Features and limitations

- Add projects with non-empty titles and descriptions.
- Search projects by title or description.
- Responsive vertical layout matching the supplied mock-up.
- Project data is held in memory and resets when the page reloads.
- This is a single-page app; it does not include routing, editing, deleting, or a backend.

## Publishing

To submit this project for review, push it to a public GitHub repository using your own GitHub account and repository settings.
