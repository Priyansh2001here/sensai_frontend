export function matchPath(path, key) {
  return path.split("/").includes(key);
};

export const updateLoginAlertMessageState = (error, stateSetter) => {
  if (error.status === 400){
    stateSetter('Malformed email or password')
  }
  else if (error.status === 401){
    stateSetter('Invalid Credentials')
  }
  // error.response.status === 500
  else{
    stateSetter('Something wrong on our end, please contact admin')
  }
}

export const updateRegisterAlertMessageState = (error, stateSetter) => {
  if (error.status === 400){
    stateSetter('Malformed email or password')
  }
  else if (error.status === 404){
    stateSetter('Invalid Invite Code')
  }
  else if (error.status === 409){
    stateSetter('User with this email already exists')
  }
  else{
    stateSetter('Something wrong on our end, please contact admin')
  }
}