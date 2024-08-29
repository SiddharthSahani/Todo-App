
# Todo App

## First actual web dev project
This is a simple todo-app with a functional backend provided by appwrite, made using nextjs


### Things learnt
- Jsx component desiging
- CSS via tailwind
- React state management
- Server actions
- Backend using appwrite


### How to run
Make sure your env file has the following
- APPWRITE_ENDPOINT
- APPWRITE_PROJECT_ID
- APPWRITE_DATABASE_ID
- APPWRITE_COLLECTION_TASKS_ID


The `tasks` collection has the following attributes
- `title`: string
- `priority`: number (in range of [1-3], 1 for low, 2 for medium and 3 for high)
- `description`: string
- `timestamp`: datetime

---

```bash
npm i
npm run dev
```

Feel free to use your prefered package manager

#### Links
- [React](https://react.dev/)
- [NextJS](https://nextjs.org/)
- [Appwrite](https://appwrite.io/)
