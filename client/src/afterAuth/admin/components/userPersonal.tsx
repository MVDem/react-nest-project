import { useSelector } from 'react-redux';
import { IStateUser, User } from '../../../assets/types/type';
import { useState } from 'react';
import {
  addUserRole,
  banAddUser,
  banRemoveUser,
  deleteUserRole,
} from '../../../assets/http/requests';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  OutlinedInput,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import styles from './scss/userPersonal.module.scss';

export default function UserPersonal(props: {
  id: string | undefined;
  getuserDetailed: any;
  userDetailed: User | undefined;
}) {
  const [roleWillAdd, setroleWillAdd] = useState('');
  const [statusWillAdd, setstatusWillAdd] = useState('');
  const [openRole, setOpenRole] = useState(false);
  const [openStatus, setOpenStatus] = useState(false);
  const user = useSelector((state: IStateUser) => state.user);

  //=======MUI===========

  const handleChangeStatus = (event: SelectChangeEvent) => {
    setstatusWillAdd(event.target.value as string);
  };

  const handleClickOpenStatus = () => {
    setOpenStatus(true);
  };

  const handleSendStatus = (
    event: React.SyntheticEvent<unknown>,
    reason?: string
  ) => {
    if (reason !== 'backdropClick' && event.type === 'click') {
      setOpenStatus(false);
      if (statusWillAdd === 'Banned') {
        const bodySent = {
          userId: props.userDetailed?.id,
          banReason: 'Нет оплаты',
        };
        banAddUser(bodySent, user.token, props.getuserDetailed);
      } else if (statusWillAdd === 'Active') {
        const bodySent = {
          userId: props.userDetailed?.id,
        };
        banRemoveUser(bodySent, user.token, props.getuserDetailed);
      }
    }
  };

  const handleCloseStatus = (
    event: React.SyntheticEvent<unknown>,
    reason?: string
  ) => {
    if (reason !== 'backdropClick' && event.type === 'click') {
      setOpenStatus(false);
    }
  };

  const handleChangeRole = (event: SelectChangeEvent) => {
    setroleWillAdd(event.target.value as string);
  };

  const handleClickOpenRole = () => {
    setOpenRole(true);
  };

  const handleDeleteRole = () => {
    const bodySent = {
      value: props.userDetailed!.roles![0].value,
      userId: props.userDetailed?.id,
    };

    deleteUserRole(bodySent, user.token, props.getuserDetailed);
  };

  const handleSendRole = (
    event: React.SyntheticEvent<unknown>,
    reason?: string
  ) => {
    if (reason !== 'backdropClick' && event.type === 'click') {
      setOpenRole(false);
      if (props.userDetailed!.roles![0].value !== roleWillAdd) {
        handleDeleteRole();
        const bodySent = {
          value: roleWillAdd,
          userId: props.userDetailed?.id,
        };
        addUserRole(bodySent, user.token, props.getuserDetailed);
      }
    }
  };

  const handleCloseRole = (
    event: React.SyntheticEvent<unknown>,
    reason?: string
  ) => {
    if (reason !== 'backdropClick' && event.type === 'click') {
      setOpenRole(false);
    }
  };
  return (
    <>
      <section className={styles.userPersonal}>
        <div className={styles.userPersonal__avatar}>
          <img src="/img/avatar.jpg" alt="avatar" />
        </div>
        <div className={styles.userPersonal__info}>
          <h3 className={styles.userDetails__title}>Personal</h3>
          <div className={styles.userPersonal__row}>
            <p className={styles.userPersonal__text}>Id :</p>
            <p className={styles.userPersonal__text}>
              {props.userDetailed?.id}
            </p>
          </div>
          <div className={styles.userPersonal__row}>
            <p className={styles.userPersonal__text}>Email :</p>
            <p className={styles.userPersonal__text}>
              {props.userDetailed?.email}
            </p>
          </div>
          <div className={styles.userPersonal__row}>
            <p className={styles.userPersonal__text}>Name :</p>
            <p className={styles.userPersonal__text}>
              {props.userDetailed?.name}
            </p>
          </div>
          <div className={styles.userPersonal__row}>
            <p className={styles.userPersonal__text}>Last name :</p>
            <p className={styles.userPersonal__text}>
              {props.userDetailed?.lastName}
            </p>
          </div>
          <div className={styles.userPersonal__row}>
            <p className={styles.userPersonal__text}>Phone :</p>
            <p className={styles.userPersonal__text}>
              {props.userDetailed?.phone}
            </p>
          </div>
          <div className={styles.userPersonal__row}>
            <p className={styles.userPersonal__text}>Status :</p>
            <button
              className={styles.userPersonal__btn}
              onClick={handleClickOpenStatus}
            >
              {props.userDetailed?.banned ? 'Bunned' : 'Active'}
              <img src="/img/edit.png" alt="edit" />
            </button>
            <Dialog
              disableEscapeKeyDown
              open={openStatus}
              onClose={handleCloseStatus}
            >
              <DialogTitle>Select a status</DialogTitle>
              <DialogContent>
                <Box
                  component="form"
                  sx={{ display: 'flex', flexWrap: 'wrap' }}
                >
                  <FormControl sx={{ m: 1, minWidth: 10 }}>
                    <InputLabel htmlFor="demo-dialog-native">Status</InputLabel>
                    <Select
                      native
                      value={statusWillAdd}
                      onChange={handleChangeStatus}
                      input={
                        <OutlinedInput label="Age" id="demo-dialog-native" />
                      }
                    >
                      <option aria-label="None" value="" />
                      <option value={'Active'}>Active</option>
                      <option value={'Banned'}>Banned</option>
                    </Select>
                  </FormControl>
                </Box>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleCloseStatus}>Cancel</Button>
                <Button onClick={handleSendStatus}>Ok</Button>
              </DialogActions>
            </Dialog>
          </div>
          <div className={styles.userPersonal__row}>
            <p className={styles.userPersonal__text}>Roles :</p>
            <button
              className={styles.userPersonal__btn}
              onClick={handleClickOpenRole}
            >
              {props.userDetailed?.roles.map((e, i) => {
                return <p key={i}>{e.value}</p>;
              })}
              <img src="/img/edit.png" alt="edit" />
            </button>
            <Dialog
              disableEscapeKeyDown
              open={openRole}
              onClose={handleCloseRole}
            >
              <DialogTitle>Select a role</DialogTitle>
              <DialogContent>
                <Box
                  component="form"
                  sx={{ display: 'flex', flexWrap: 'wrap' }}
                >
                  <FormControl sx={{ m: 1, minWidth: 10 }}>
                    <InputLabel htmlFor="demo-dialog-native">Role</InputLabel>
                    <Select
                      native
                      value={roleWillAdd}
                      onChange={handleChangeRole}
                      input={<OutlinedInput label="Role" />}
                    >
                      <option aria-label="None" value="" />
                      <option value={'ADMIN'}>ADMIN</option>
                      <option value={'USER'}>USER</option>
                      <option value={'OBSERVER'}>OBSERVER</option>
                    </Select>
                  </FormControl>
                </Box>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleCloseRole}>Cancel</Button>
                <Button onClick={handleSendRole}>Ok</Button>
              </DialogActions>
            </Dialog>
          </div>
        </div>
      </section>
    </>
  );
}
