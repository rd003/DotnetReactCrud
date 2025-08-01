# Full stack crud application in .NET 9 and React 19

## Tech stack

- .NET 9 Web APIs (Backend)
- Entity framework core (ORM)
- Sqlite (database)
- React 19 (frontend)
- Lucide react (icons)
- React router (routing)
- React hook form (form and validation)
- React hot toast (toaster)

## How to run the project

1. Clone the project

```bash
git clone https://github.com/rd003/DotnetReactCrud
```

2. Change directory

```bash
cd DotnetReactCrud
```

3. Visit backend project's directory

```bash
cd Backend/Backend/
```

4. Run migrations

```bash
 dotnet ef database update
```

5. Run backend project

```bash
 dotnet run
```
Keep backend project running. Open a new tab in terminal


6. Visit frontend project's directory

```bash
cd path-to-project-directory/

cd client

```

7. Install dependencies

```bash
npm i
```

8. Run project
   
```bash
npm run dev
```
9. Visit to the route `http://localhost:5173` in the browser.

**Note:** If you are running this project on linux, then you might get this error. I got this on linux mint however it was running fine in windows 11 machine. 

```bash
Error: Cannot find module @rollup/rollup-linux-x64-gnu. npm has a bug related to optional dependencies (https://github.com/npm/cli/issues/4828). Please try npm i again after removing both package-lock.json and node_modules directory.
```

I resolved it with these steps:

1. Delete the problematic files:

```bash
rm -rf node_modules
rm package-lock.json
```

2. Install dependencies again
 
```bash
npm i
```

3. Run project again wiht

```
npm run dev
```

## screenshot

![sreenshot](./screenshot.png)
