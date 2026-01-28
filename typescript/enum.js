var Status;
(function (Status) {
    Status[Status["Pending"] = 0] = "Pending";
    Status[Status["Success"] = 1] = "Success";
    Status[Status["Failed"] = 2] = "Failed";
})(Status || (Status = {}));
var currentStatus = Status.Pending;
var Role;
(function (Role) {
    Role["ADMIN"] = "admin";
    Role["USER"] = "user";
    Role["GUEST"] = "guest";
})(Role || (Role = {}));
function checkAccess(role) {
    if (role === Role.ADMIN) {
        console.log("Full access");
    }
    else {
        console.log("User Excess");
    }
}
checkAccess(Role.GUEST);
