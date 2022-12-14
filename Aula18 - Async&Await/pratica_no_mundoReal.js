// Pratica

function getUser(id){

  return fetch(`https://regres.in/api/user?id=${id}`) //esta api é online para acessar;
  .then(data => data.json())
  .catch(err => console.log(err))

}


async function showUserName(id){

try {

  const user = await getUser(id);
  console.log(`O nome do usuario é:${user.data.first_name}`);
  
} catch (error) {
   console.log("Erro:"+ error);
}

}

showUserName(3);