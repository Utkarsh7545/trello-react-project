# Trello Clone Project

A Trello clone built with React and Material UI that allows users to create, manage, and organize boards, lists, and cards effectively. This application mimics the functionality of Trello to assist users in managing their tasks and projects.

## Table of Contents
- [Features](#features)
- [Technologies](#technologies)
- [Folder Structure](#folder-structure)

## Features
- **Board Management**: Create and delete boards to organize your projects.
- **List Management**: Add and remove lists within boards to categorize tasks.
- **Card Management**: Create, edit, and delete cards in lists to track tasks.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **User-Friendly Interface**: Clean and intuitive UI built with Material UI components.
- **Notifications**: Real-time feedback using react-hot-toast for user actions.

## Technologies
- **React**: A JavaScript library for building user interfaces.
- **Material UI**: A popular React UI framework that provides pre-designed components.
- **React Router**: For managing navigation and routing within the application.
- **Axios**: For making HTTP requests to APIs.
- **react-hot-toast**: For displaying toast notifications.
- **Custom CSS**: Styled components for consistent design across the application.

## Folder Structure

trello-react-utkarsh/
│
├── node_modules/
│
├── public/
│   └── trello.svg
│
├── src/
│   ├── all-apis/
│   │   ├── board/
│   │   │   ├── createBoard.jsx
│   │   │   └── getAllBoards.jsx
│   │   ├── card/
│   │   │   ├── createCard.jsx
│   │   │   ├── deleteCard.jsx
│   │   │   ├── getCards.jsx
│   │   ├── check-list/
│   │   │   ├── createCheckList.jsx
│   │   │   ├── deleteCheckList.jsx
│   │   │   ├── getCheckLists.jsx
│   │   ├── check-list-item/
│   │   │   ├── createCheckListItem.jsx
│   │   │   ├── deleteCheckListItem.jsx
│   │   │   ├── getCheckListItems.jsx
│   │   │   ├── updateCheckListItem.jsx
│   │   ├── list/
│   │   │    ├── createList.jsx
│   │   │    ├── deleteList.jsx
│   │   │    └── getLists.jsx
│   │   └── keyAndToken.jsx
│   │
│   ├── components/
│   │   ├── Board.jsx
│   │   ├── Card.jsx
│   │   ├── CardItem.jsx
│   │   ├── CheckList.jsx
│   │   ├── CheckListItem.jsx
│   │   ├── List.jsx
│   │   └── common/
│   │       ├── Loader.jsx
│   │       ├── ModalForm.jsx
│   │       ├── Navbar.jsx
│   │       └── Notification.jsx
│   │
│   ├── pages/
│   │   ├── BoardsPage.jsx
│   │   ├── ListPage.jsx
│   │   └── NotFoundPage.jsx
│   │
│   ├── theme.jsx
│   ├── main.jsx
│   └── App.jsx
│
├── .env
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
