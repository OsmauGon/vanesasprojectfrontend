import { useEffect, useState } from "react"

export function useGetInfo<T>(url: string) {
  const [data,setData] = useState<T | null>(null)
  const [loading,setLoading] = useState<boolean>(true)
  const [error,setError] = useState<string | null>(null)

  useEffect(()=>{
    if(!url) return ;

    const fetchData = async ()=>{
      try{
        setLoading(true)
        setError(null)

        const res = await fetch(url)
        if(!res.ok) throw new Error (`Error ${res.status}: ${res.statusText}`)

        const json = await res.json()
        if(json.message != "todo bien"){
          throw new Error (`Recibimos respuesta pero no es la que corresponde`)
        }
        setData(json.data)
      } catch(error: unknown){
        console.error(error)
        if(error instanceof Error) {
          setError(error.message)
        } else{
          setError(String(error))
        }
      } finally{
        setLoading(false)
      }

      fetchData()
    }
  },[url])

  return {data, loading, error};
}