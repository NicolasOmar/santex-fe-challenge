# Santex RBI Team - Front End Training Challenge - Custom changes added

This document mentions the changes included to continue with the project due to several technical difficulties.

- [Create React App](https://github.com/facebook/create-react-app) has been discontinued as the preferred builder tool since 2013 (here is a [link that mentions the situation](https://github.com/facebook/create-react-app/issues/13072))
- Once the original project is installed using the provided tools, the installed packages present more than 100 vulnerabilities (among them, 60 are high-level or higher) due to lack of maintenance.
```
added 1928 packages, and audited 1929 packages in 2m

133 packages are looking for funding
  run `npm fund` for details

101 vulnerabilities (4 low, 36 moderate, 48 high, 13 critical)
```
  
  - Here is a screenshot of the vulnerability count using Vite instead.
  ```
  added 450 packages, and audited 451 packages in 9s

  110 packages are looking for funding
    run `npm fund` for details

  found 0 vulnerabilities
  ```

- Vite's response time is much faster than Create React App (to keep in mind, Vite can serve its url between 150ms and 300ms), here is a example:
```
VITE v5.4.10  ready in 219 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```