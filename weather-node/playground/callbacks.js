var getUser = (id, callback) => {
  var user = {
    id: id,
    name: "neal"
  };

  setTimeout(() => {
    callback(user);
  }, 3000);
};

getUser(123, (user) => {
  console.log(user);
});
