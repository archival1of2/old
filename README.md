GPQuery
=======

**GPQuery** is a historical motor racing data and statistical analysis web application developed for educational, non-commercial purposes.

 - [x] Initial commit
 - [ ] Create new branch `gh-pages` for Project Pages at `https://gpquery.github.io/gpquery`
 - [ ] Fork `app/bower_components/bootstrap/` into new repository???



## Table of Contents

- [Components](#components)
- [Directory Structure](#directory-structure)
- [Procedure](#procedure)
- [Author's Notes](#authors-notes)
- [Changelog](#changelog)



## Components

At the current time, the entirety of the application will be located in a single repository.

However, due to the complexity of the project and its various components and their dependencies, a dedicated repository may be created specifically for the back-end source code.

### Front-End

 * [AngularJS][site-angular] serves as the foundation for the main application interface.
 * A custom [Bootstrap][site-bootstrap] dashboard theme is combined with [AngularUI][site-angularui] components for styling and UI/UX.
 * Dependency management is accomplished with [Bower][site-bower].
 * [Grunt][site-grunt] manages serving tasks, as well as compiling the Bootstrap `dist/` directory.

### Back-End

 * The REST API is created with [Slim Framework][site-slim] and [Laravel][site-laravel]'s [Eloquent ORM][site-eloquent].
 * All data and statistics are courtesy of [Ergast Developer API][site-ergast], which supplies a MySQL database image.
 * PHP dependencies are managed by [Composer][site-composer].



## Directory Structure

```
gpquery/
├── api/                                --> Back-End Application Directory
│   ├── config/
│   │   └── database.php
│   ├── models/                         --> Eloquent ORM model files
│   │   └── ...
│   ├── routes/                         --> Slim route configuration files
│   │   └── ...
│   ├── vendor/
│   ├── composer.json
│   ├── composer.lock
│   └── index.php                       --> Main Slim application file
├── app/                                --> Front-End Application Directory
│   ├── assets/
│   │   ├── fonts/
│   │   ├── images/
│   │   └── styles/
│   ├── bower_components/
│   │   └── bootstrap/
│   │       └── dist/
│   │           ├── css/
│   │           └── fonts/
│   ├── components/                     --> Application components
│   │   ├── common/
│   │   ├── race/
│   │   └── races/
│   ├── app.js
│   └── index.html                      --> Main Angular application file
├── .gitignore
└── README.md
```

Irrelevant and ignored directories and files have been omitted.



[site-angular]:http://angularjs.org
[site-bootstrap]:http://getbootstrap.com/
[site-angularui]:http://angular-ui.github.io/
[site-laravel]:http://laravel.com
[site-eloquent]:http://laravel.com/docs/4.2/eloquent
[site-ergast]:http://ergast.com/mrd/
[site-bower]:http://bower.io
[site-grunt]:http://gruntjs.com
[site-composer]:http://getcomposer.org