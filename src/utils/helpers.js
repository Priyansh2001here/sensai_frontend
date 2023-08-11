export function matchPath(path, key) {
  return path.split("/").includes(key);
};

export const updateLoginAlertMessageState = (error, stateSetter) => {
  console.log(error.response.status)
  if (error.response.status === 400){
    stateSetter('Malformed email or password')
  }
  else if (error.response.status === 401){
    stateSetter('Invalid Credentials')
  }
  // error.response.status === 500
  else{
    stateSetter('Something wrong on our end, please contact admin')
  }
}

export const updateRegisterAlertMessageState = (error, stateSetter) => {
  if (error.response.status === 400){
    stateSetter('Malformed email or password')
  }
  else if (error.response.status === 404){
    stateSetter('Invalid Invite Code')
  }
  else if (error.response.status === 409){
    stateSetter('User with this email already exists')
  }
  else{
    stateSetter('Something wrong on our end, please contact admin')
  }
}