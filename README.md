# Project 9 - Group 8A

In this project, we aimed to incorporate the Administrator feature into the existing CASMM repository. To do this, we implemented a multitude of features, which are highlighted below.

**Members**  
    1. Connor Voigt - Project Manager   
    2. Leila Diab - Scrum Master   
    3. Tyler Jaramillo-Pritchard - Dev Team   
    4. James Hu - Dev Team  
    5. Lysandra Belnavis-Walters - Dev Team

**Features**  
Feature | Related Screenshots | 
--- | --- | 
**Administrator Role** This was not something we had to implement. However, to best continue developing our project, we required a rudimentary implementation. Thus, users who have an Administrator role nearly wield omniscient power as all their permissions are activated. | ![image](https://github.com/Group-8A/Sapphire-Project09-8a/assets/81883243/4ba5fdd0-8f23-4cb0-bfd8-5b7ff2c45a17) |   
**Administrator Collection Type** There can be a multitude of administrators with various organizations. Therefore, we created the Administrator collection type in which the Administrator has a first and last name, organizations, an associated user, and moderation records. The associated user is so the Administrator can log in and interact with their organizations.  | IMAGE HERE |
**Organization Collection Type** However, we also required an Organization collection type. An organization necessitates a name, the schools it contains, the administrators that have oversight of it, and moderation records. | IMAGE HERE |
**Admin Log-In** Naturally, the Administrator must be able to log in. We created this page to provide this service. On a successful authorization, the Administrator is redirected to their dashboard. | IMAGE HERE |
**Admin Log-In Link** It can be tiring to repeatedly type in the URL for the admin login page. Therefore, we added a link in the navigation so that Administrators can easily access this entry. | IMAGE HERE |
**Administrator Dashboard** Here, the Administrator has an intuitive overview of the Organizations they have oversight over. By clicking the “View” button of each card, the Administrator can access more information about and modify the selected Organization. The Administrator can also add a new Organization from using the "Add Organization" button. This button will ask the Administrator the name of the new Organization and the schools thereof. Also of this feature is that only schools that are not associated with an Organization will be listed. | IMAGE HERE |
**Organization Dashboard** Inside of a particular Organization, the Administrator is shown several tabs of which they can access more specific information about the Organization. | IMAGE HERE |
**Organization Dashboard: Organization Home** All the basic information about an Organization (i.e. the mentors, students, classrooms, and schools) is displayed in this tab. The Administrator can also use buttons to modify these features of an Organization. At the bottom of the page is a button used to delete the organization. After deleting the organization, the Administrator is redirected back to the Administrator Dashboard. | IMAGE HERE |
**Organization Dashboard: Classroom Management** In this tab, the Administrator can select “All Schools” to view more organized information from all schools of the organization. They can also select a particular school (in this case, the Administrator did not have any schools) to view organized information from specifically that school. The Administrator can also easily add a school to the current Organization. | IMAGE HERE |
**Organization Maneuver** In this simple feature, the Administrator can view the schools of their organization or the classrooms of a school (or all schools). This maneuvering is tailored to aid the Administrator in finding important information about their Organizations. Within a school, the Administrator can page through the various classrooms, view mentors and students, and modify the school in a variety of ways. | IMAGE HERE |
**Organization Dashboard: Moderation** This feature allows administrators to view a log of past moderation actions performed by themselves and other administrators within a given organization. Moderation actions are meant to be logged as they occur, and stored in the moderation-records collection. Moderation actions are only visible in the moderation tab of the organizations where the actions are performed. | IMAGE HERE |
**Moderation: Account Data Recovery** In this feature, the administrator can view student accounts that were recently deleted in a table. When one or more accounts are selected from the table, the data for these accounts can be recovered.  | IMAGE HERE |
**Moderation Action** This feature allows an administrator to compose the structure of a new custom moderation action, where they can select the type of moderation action (add, modify, or delete) and the desired “collection” to perform the action on, as shown here. | IMAGE HERE |
**Organization Dashboard: Gallery** We were unable to wholly implement this feature, however we drafted a rough prototype of the feature. Ideally, the submissions of students would appear in the gallery and we would be able to select and delete them. | IMAGE HERE |
































# CaSMM

> Computation and Science Modeling through Making

Cloud-based programming interface

![Deploy Staging](https://github.com/STEM-C/CaSMM/workflows/Deploy%20Staging/badge.svg)
![Deploy Production](https://github.com/STEM-C/CaSMM/workflows/Deploy%20Production/badge.svg)

<br/>

## Application

### `client` 
[client](/client#client) is the frontend of the application. It is powered by [React](https://reactjs.org/) and [Blockly](https://developers.google.com/blockly).

### `server`

[server](/server#server) is the web server and application server. It is powered by [Node](https://nodejs.org/en/) and [Strapi](https://docs-v3.strapi.io/developer-docs/latest/getting-started/introduction.html).

### `compile`

  [compile](/compile#compile) is an arduino compiler service. It is an unofficial fork of [Chromeduino](https://github.com/spaceneedle/Chromeduino).

<br/>

## Environments

> The project is divided into three conceptual environments.

### Development
#### Structure

The development environment is composed of five servers. The first one is run with the [Create React App](https://create-react-app.dev/docs/getting-started/) dev server. The later four are containerized with docker and run with [docker compose](https://docs.docker.com/compose/).

* `casmm-client-dev` - localhost:3000

* `casmm-server-dev` - localhost:1337/admin

* `casmm-compile-dev` 

* `casmm-db-dev` - localhost:5432

  > The first time the db is started, the [init_db.sh](/scripts/init_db.sh) script will run and seed the database with an environment specific dump. Read about Postgres initialization scripts [here](https://github.com/docker-library/docs/blob/master/postgres/README.md#initialization-scripts). To see how to create this dump, look [here](https://github.com/DavidMagda/CaSMM_fork_2023/blob/develop/scripts/readme.md).

* `casmm-compile_queue-dev`

#### Running

`casmm-client-dev`

1. Follow the [client](/client#setup) setup
2. Run `yarn start` from `/client`

`casmm-server-dev`, `casmm-compile-dev`, `casmm-db-dev`, and `casmm-compile_queue-dev`

1. Install [docker](https://docs.docker.com/get-docker/)

2. Run `docker compose up` from `/`

   > Grant permission to the **scripts** and **server** directories if you are prompted
   

### Staging

#### Structure

The staging environment is a Heroku app. It is composed of a web dyno, compile dyno, Heroku Postgres add-on, and Heroku Redis add-on.

* `casmm-staging` - [casmm-staging.herokuapp.com](https://casmm-staging.herokuapp.com/)
  * The web dyno runs `server`
  * The compile dyno runs `compile`

#### Running

`casmm-staging` is automatically built from the latest commits to branches matching `release/v[0-9].[0-9]`. Heroku runs the container orchestration from there.

### Production

#### Structure

The production environment is a Heroku app. It is composed of a web dyno, compile dyno, Heroku Postgres add-on, and Heroku Redis add-on.

* `casmm` - [www.casmm.org](https://www.casmm.org/)
  * The web dyno runs `server`
  * The compile dyno runs `compile`

#### Running

`casmm` is automatically built from the latest commits to `master`. Heroku runs the container orchestration from there.

<br/>

## Maintenance

All three components of the application have their own dependencies managed in their respective `package.json` files. Run `npm outdated` in each folder to see what packages have new releases. Before updating a package (especially new major versions), ensure that there are no breaking changes. Avoid updating all of the packages at once by running `npm update` because it could lead to breaking changes. 

### Strapi

This is by far the largest and most important dependency we have. Staying up to date with its [releases](https://github.com/strapi/strapi/releases) is important for bug/security fixes and new features. When it comes to actually upgrading Strapi make sure to follow the [migration guides](https://docs-v3.strapi.io/developer-docs/latest/update-migration-guides/migration-guides.html#v3-guides)!

<br/>

## CI/CD

All of the deployments and releases are handled automatically with [GitHub Actions](https://docs.github.com/en/actions). The workflows implement custom [Actions](https://github.com/STEM-C/CaSMM/actions) that live in the [auto](https://github.com/STEM-C/auto) repo.

<br/>

## Contributing

### Git Flow 

> We will follow this git flow for the most part — instead of individual release branches, we will have one to streamline staging deployment 

![Git Flow](https://nvie.com/img/git-model@2x.png)

### Branches

#### Protected

> Locked for direct commits — all commits must be made from a non-protected branch and submitted via a pull request with one approving review

- **master** - Production application

#### Non-protected

> Commits can be made directly to the branch

- **release** - Staging application
- **develop** - Working version of the application
- **feature/<`scaffold`>-<`feature-name`>** - Based off of develop
  - ex. **feature/cms-strapi**
- **hotfix/<`scaffold`>-<`fix-name`>** - Based off of master
  - ex. **hotfix/client-cors**

### Pull Requests

Before submitting a pull request, rebase the feature branch into the target branch to resolve any merge conflicts.

- PRs to **master** should squash and merge
- PRs to all other branches should create a merge commit
