// เริ่มเขียนโค้ดตรงนี้
const getUsers = () => {
  return fetch("https://jsonplaceholder.typicode.com/users");
};

  const asynchronousFunction = async () => {
    try {
        const executeGetUsers = await getUsers()
        const convertToJson = await executeGetUsers.json()
        const filterString = await convertToJson.filter((data) => data.name.length > 17).map((data) => data.name)
        console.log(filterString);
    } catch(error) {
        console.log(error);
    }
}
asynchronousFunction()