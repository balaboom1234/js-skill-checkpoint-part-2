const alphaTech = [
    { name: 'Alice', age: 23, department: 'Engineering' ,company: 'alphaTech' },
    { name: 'Bob', age: 19, department: 'Design' ,company: 'alphaTech'}
  ];
  
  const betaSoft = [
    { name: 'Charlie', age: 28, department: 'Engineering', company: 'betaSoft'},
    { name: 'David', age: 17, department: 'Support' , company: 'betaSoft'}
  ];
  
  const gammaDev = [
    { name: 'Eve', age: 25, department: 'Marketing' ,company: 'gammaDev'},
    { name: 'Faythe', age: 18, department: 'Engineering' ,company: 'gammaDev'},
    { name: 'Grace', age: 20, department: 'Engineering' ,company: 'gammaDev'}
  ];
  

const allEmployees = alphaTech.concat(betaSoft, gammaDev);

const result = allEmployees.filter((employee) => {
  return employee.department === 'Engineering' && employee.age > 20;
}).map((employee) => {
  return {
    name: employee.name,
    company: employee.company
  };
});

console.log(result);
// [
//     { name: 'Alice', company: 'alphaTech' },
//     { name: 'Charlie', company: 'betaSoft' },
//     { name: 'Grace', company: 'gammaDev' }
// ]
  

