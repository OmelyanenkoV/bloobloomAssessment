## For code quality

1. Editorconfig + Editorconfig-checker
2. Eslint
3. Stylelint
4. Prettier
5. tsc - checking types
6. Husky pre-commit a code quality check hook before commit

## Stores

I'm using Pinia as an example of how to work with file storage.
In theory, a composable function could be dispensed with here

## async Store

I also wanted to use vue-query to store asynchronous data, but the interaction with infinite
scrolling took a long time and therefore had to be abandoned.

## Typescript

For a good job, it would be worth typing the data received from the backend,
but for a test task it would take a
lot of time, so the "any" type is sometimes used

## Api

Interaction with the API would be worth refining and creating a
correct and beautiful solution for creating queries. When designing a real application,
I would spend more time thinking through this issue.
