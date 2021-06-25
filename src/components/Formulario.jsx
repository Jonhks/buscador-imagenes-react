import {useState} from 'react';

import Error from './Error';

const Formulario = ({setBusqueda}) => {

  const [termino, setTermino] = useState('');
  const [error, setError] = useState(false);

  const buscarImagenes = e => {
    // prevenir el refresh
    e.preventDefault();
    // validar el form
    if(termino.trim() === ''){
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 1500)
      return;
    }
    // setError(false);
    // enviar esta informacion al componente principal
    setBusqueda(termino);

    // limpiar el formulario
    setTermino('');
  }

  return (
    <form
      onSubmit={buscarImagenes}
    >
      <div className="row">
        <div className="form-group col-md-8">
          <input 
            type="text"
            className="form-control form-control-lg"
            placeholder="Busca una imagen por ejemplo: Café, Futbol, Sopa"
            onChange={e => setTermino(e.target.value)}
            value={termino}
          />
        </div>
        <div className="form-group col-md-4">
          <input 
            type="submit"
            className="btn btn-lg btn-danger btn-block"
            value="Buscar"
          />
        </div>
      </div>
      {error && <Error mensaje="El campo el obligatorio" />}
    </form>
  );
};

export default Formulario;