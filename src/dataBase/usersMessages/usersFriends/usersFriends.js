class UsersFriends {
  list = {}
  add(id, info) {
    this.list[id] = info;
  }
}
const UsersFriends = new UsersFriends;