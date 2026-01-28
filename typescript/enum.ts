enum Status {
  Pending,
  Success,
  Failed
}

let currentStatus: Status = Status.Pending;

enum Role {
  ADMIN = "admin",
  USER = "user",
  GUEST = "guest"
}


function checkAccess(role: Role) {
  if (role === Role.ADMIN) {
    console.log("Full access");
  }
  else{
    console.log("User Excess")
  }
}

checkAccess(Role.GUEST)
