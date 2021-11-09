## First time setup local wordpress development enviroment

- Host a blank Wordpress locally -- we use LocalWP
- Install WP-migration-assistant
- Sign in to www.oururl/wp-admin
- Download a new backup via WP-migration
- install backup on your locally hosted WP
- Open theme-folder in code-editor
- Pull this repo
- Run npm install
- Use LocalWP as live-server

_Be aware that this setup uses the plugin "PODS" for content._

## COMMANDS:

This repo automatically deploys to server, on push to master branch.

_npm run watch_
--- builds to dist on save. Used for development.

_npm run prod_
--- build, minify & bundle to dist. please use this command before deploy on push.
