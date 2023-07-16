import { useState } from "react"

export const useSignup = () => {
    const [error, setError] = useState(null)
    const [isLoading,setIsLoading]= useState(null)



    const signup = async(email, password) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch('/auth/signup', {
            method: 'POST',
            headers: {'Content-Type': 'application/json' },
            body: JSON.stringify({email, password})
        })
        const json = await response.json()
        
        if(!response.ok){
            setIsLoading(false)
            setError(json.error)
        }
        if(response.ok){
            localStorage.setItem('user', JSON.stringify(json))

            dispatchEvent({type: 'LOGIN',  payload: json})

            setIsLoading(false)
        }
    }
    return {signup, isLoading, error}
}