import Axios from "axios";
//LUEGO PARA LLAMARLOS EN CADA COMPONENTE

//if( event.target.value.length!==0)//limpiar el arreglo de heroes cuando no estemos buscando nada

//setHeroes(GetByName(token,string))
/****
 *function:GetByName
 *parameters:
 *           heroName:nombre del heroe o palabras que contenga el nombre del heroe a buscar
 *return:array de heroes encontrados
 */

const GetByName =async (heroName)=> {

  let tokenAPI = "587224415651618";
 
  return await  Axios.get(
    "https://www.superheroapi.com/api.php/" + tokenAPI + "/search/" + heroName
  );


}
/****
 *function:GetById
 *parameters:
 *           id:id de heroe a buscar
 *return:heroe encontrado
 */

//if GetById(id)!==null
//setHero(GetById(id))

  const GetById =async (id)=> {

  let tokenAPI = "587224415651618";

  
  return await Axios.get("https://www.superheroapi.com/api.php/" + tokenAPI + "/" + id);


}
/****
 *function:Post
 *parameters:email:email del usuario
 *           password:contraseña del usuario
 *           handleClick:funcion para saber si hay que redirigir al la seccion myteam
 *return:void
 */

 const loginR =async (email, password)=> {



  
  return await  Axios.post("http://challenge-react.alkemy.org/", {
    email: email,
    password: password,
  })
;


}


export { GetByName, GetById, loginR };
