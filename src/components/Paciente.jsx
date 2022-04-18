
const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {
    
    const handleEliminar = () => {
        const res = confirm('¿Estas seguro de eliminar este paciente?')
        if(res){
            eliminarPaciente(paciente.id)
        }
    }

    return (
        <div className="bg-white shadow-md rounded-lg py-10 px-5 m-3">
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Nombre: {""}
                <span className="font-normal normal-case">{paciente.nombre}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">
                Propietario: {""}
                <span className="font-normal normal-case">{paciente.propietario}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">
                Email: {""}
                <span className="font-normal normal-case">{paciente.email}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">
                Fecha Alta: {""}
                <span className="font-normal normal-case">{paciente.alta}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">
                Sintomas: {""}
                <span className="font-normal normal-case">{paciente.sintomas}</span>
            </p>

            <div className="flex justify-between mt-10">
                <button 
                    type="button"
                    onClick={() => setPaciente(paciente)}
                    className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white 
                              font-bold uppercase rounded-lg"
                    >
                    Editar
                </button>

                <button 
                    type="button"
                    onClick={handleEliminar}
                    className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white 
                              font-bold uppercase rounded-lg"
                    >
                    Eliminar
                </button>
            </div>

        </div>
    )
}

export default Paciente
