#!/bin/bash

npx sequelize db:migrate
npx sequelize db:seed --seed 20230917143001-Default-Roles
npx sequelize db:seed --seed 20230927223403-Default-admin
npx sequelize db:seed --seed 20230927225317-Default-user-roles
npx sequelize db:seed --seed 20231003130628-projects_for_default_user
npx sequelize db:seed --seed 20231003133538-plc_for_default_user
npm run start:dev
