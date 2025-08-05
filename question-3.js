async function getUsers() {
    try {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const user = await response.json();

  const name = user
        .map(user => user.name)
        .filter(name => name.length > 17);

        console.log(name);
}
catch (error) {
    console.error();
}
}
getUsers();

