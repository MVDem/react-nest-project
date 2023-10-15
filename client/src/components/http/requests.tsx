import axios from 'axios';

export function getUserDetales(bodySent: {}, token: string, cb: any) {
  const url = 'http://localhost:5000/users/detales';
  axios
    .post(url, bodySent, {
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      cb(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}

//=========ROLE====================

export function deleteUserRole(bodySent: {}, token: string, cb: any) {
  const url = 'http://localhost:5000/users/role/remove';

  axios
    .post(url, bodySent, {
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      cb();
    })
    .catch((error) => {
      console.log(error);
    });
}

export function addUserRole(bodySent: {}, token: string, cb: any) {
  const url = 'http://localhost:5000/users/role/add';

  axios
    .post(url, bodySent, {
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      cb();
    })
    .catch((error) => {
      console.log(error);
    });
}

//=========BAN=====================

export function banAddUser(bodySent: {}, token: string, cb: any) {
  const url = 'http://localhost:5000/users/ban/add';

  axios
    .post(url, bodySent, {
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      cb();
    })
    .catch((error) => {
      console.log(error);
    });
}

export function banRemoveUser(bodySent: {}, token: string, cb: any) {
  const url = 'http://localhost:5000/users/ban/remove';

  axios
    .post(url, bodySent, {
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      cb();
    })
    .catch((error) => {
      console.log(error);
    });
}

//=========PROJECT====================

export function addProjectUser(bodySent: {}, token: string, cb: any) {
  const url = 'http://localhost:5000/projects';

  axios
    .post(url, bodySent, {
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      cb();
    })
    .catch((error) => {
      console.log(error);
    });
}

export function removeProjectUser(bodySent: {}, token: string, cb: any) {
  const url = 'http://localhost:5000/projects';

  axios
    .delete(url, {
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      data: bodySent,
    })
    .then((response) => {
      cb();
    })
    .catch((error) => {
      console.log(error);
    });
}

export function getProjectUser(bodySent: {}, token: string, cb: any) {
  const url = 'http://localhost:5000/projects/detales';

  axios
    .post(url, bodySent, {
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      cb(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}

export function getAllProjectsUser(bodySent: {}, token: string, cb: any) {
  const url = 'http://localhost:5000/projects/allforone';

  axios
    .post(url, bodySent, {
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      cb(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}

//=========PLC====================

export function addPlcProject(bodySent: {}, token: string, cb: any) {
  const url = 'http://localhost:5000/plc';

  axios
    .post(url, bodySent, {
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      cb();
    })
    .catch((error) => {
      console.log(error);
    });
}

export function removePlcProject(bodySent: {}, token: string, cb: any) {
  const url = 'http://localhost:5000/plc';

  axios
    .delete(url, {
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      data: bodySent,
    })
    .then((response) => {
      cb();
    })
    .catch((error) => {
      console.log(error);
    });
}

export function getPlc(bodySent: {}, token: string, cb: any) {
  const url = 'http://localhost:5000/plc/detales';

  axios
    .post(url, bodySent, {
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      cb(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}
