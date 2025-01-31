import { useEffect, useState } from 'react'
import { getOffers } from '../services/offerService'

function OfferList() {
    interface Offer{
        id: number
        title: string
        description: string
        active: boolean
        contactEmail: string
        location: string
        published: Date
        expired: Date
        
    }

    const [offers,setOffers] = useState<Offer[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [message,setMessage] = useState("")


    useEffect(()=>{
        async function call() {
            try{
                const offerList : Offer[]= await getOffers()
                offerList.length>0&&setOffers(offerList)
            }catch(error){
                if(error instanceof Error)
                setMessage(error.message)
            }finally{
                setIsLoading(false)
            }
        }


        call()
    },[])


    if(isLoading) return <> <div> Is loading...</div> </>

    return (
        <div className="relative overflow-x-auto">
            {message}
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Title
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Description
                        </th>
                        <th scope="col" className="px-6 py-3">
                            ContactEmail
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {offers.map(offer =>
                        <tr key={offer.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {offer.title}
                            </th>
                            <td className="px-6 py-4">
                                {offer.description}
                            </td>
                            <td className="px-6 py-4">
                                {offer.contactEmail}
                            </td>
                        </tr>
                    )}

                </tbody>
            </table>
        </div>

    )

}

export default OfferList