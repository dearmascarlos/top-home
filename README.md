# top-home


### ENDPOINTS

### USER Signup

METHOD | ENDPOINT                    | DESCRIPTION           | POST PARAMS                   | RETURNS
-------|-----------------------------|-----------------------|-------------------------------|-----------------------------
POST   | /user/register              | User Signup           | name, email                    | id, name, email

### HOME controllers

METHOD | ENDPOINT                    | DESCRIPTION           | POST PARAMS                   | RETURNS
-------|-----------------------------|-----------------------|-------------------------------|-----------------------------
POST   | /home/post                  | Post home             | title, image (direccion url)  | id, title, image
GET    | /home/get                   | Get All homes         |                               | [ Homes ]
PUT    | /home/put/:id               | Update home           | title, image (direccion url)  | id, title, image
DELETE | /home/delete/:id            | Delete home           |                               |
