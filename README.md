Rated Nutes (Dylan Avery)
=========

Summary
---
A simple app to display basic harvest information and to allow a user to add a new harvest to the DB.



### Setup and Run
 * Install dependencies
    ```
    #!sh
    yarn
    ```

* Run tests
    ```
    #!sh
    yarn test
    ```

 * Run application
    ```
    #!sh
    yarn start
    ```

### Server
 *  ```
    #!sh
    cd native-roots-server && cp ormconfig-sample.js ormconfig.js
    ```
    
    Add postgres credentials to ormconfig.js

    ```
    #!sh
    yarn && yarn start
    ```
