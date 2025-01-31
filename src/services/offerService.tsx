const URL_BASE = "http://localhost:3000/api/"
export const getOffers = async ()=>{
    try{
        const response = await fetch(URL_BASE+ "offers/",{
            method:'GET',
            headers:{
                'Content-Type':'application/json'
            },
            credentials: 'include'
        })
        if(!response.ok) throw new Error("Fallo al obtener todas las ofertas")
        const json = await response.json()
        console.log(json);
        
        return json
    }catch(error){
        if(error instanceof Error)
        throw new Error(error.message)
    }


}