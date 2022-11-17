# loginpage_offkey

###### Frontend / React-Typescript app using Next.js

##### Author: _ilshaad Kheerdali_

##### Github: [ilshaad/loginpage_offkey](https://github.com/ilshaad/loginpage_offkey)

## What is the app about?

Very simple stripped down usage of _Firebase_ email/password authentication within _Next.js_.
Contain only two routes, first is signup/login page which requires you to login using email & password with the aid of Firebase authentication. Once you have logged in you will be redirected to the dashboard page, otherwise this page will be blocked from unauthenticated user.

## Getting started:

```bash
# 1. install packages
npm ci

# run development server
npm run dev

# run production server
npm run build && npm run start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Main technologies I used in the app:

- React
- Typescript / Javascript
- Next.js
- Firebase
- Etc...

## Main important things I could have included to make the app better:

- I could have use an `.env` file for the _Firebase_ api key, as you should never git commit or expose your api key to anybody.
- Add styles including responsive design.
- Form error message could have been more fine tune using form validation such as _Formik_ package...
- Etc...
