type SelectSettings = {
    explicacion: string,
    setPage: (val: number)=> void
}
export const ProjectSelect =({setPage, explicacion} :SelectSettings)=>{

    return (
        <>
        <div className="selectp  my-4">
                <select className="form-select form-select-lg mb-3" 
                        aria-label="Large select example"
                        onChange={(e)=>{setPage(Number(e.target.value))}}
                        >
                        <option  defaultValue="0">Perdidos</option>
                        <option value="3">Encontrados</option>
                        <option value="6">En adopcion</option>
                </select>
                <p className="explicacion">{explicacion}</p>
              </div>
        </>
    )
}