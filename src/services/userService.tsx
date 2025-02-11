const URL_BASE = "http://localhost:3000/api/"
export const getUsers = async ()=>{
    try{
        const response = await fetch(URL_BASE+ "users/",{
            method:'GET',
            headers:{
                'Content-Type':'application/json'
            },
            credentials: 'include'
        })
        if(!response.ok) throw new Error("Fallo al obtener todos los usuarios")
        const json = await response.json()
        return json.Usuarios
    }catch(error){
        if(error instanceof Error)
        throw new Error(error.message)
    }


}