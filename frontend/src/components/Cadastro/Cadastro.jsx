import { useState, useEffect } from "react";
import API from "../../api/api"

function Cadastro() {
    const [categorias, setCategorias] = useState([
        { _id: 0, name: "Carregando categorias..."},
    ]);

    async function loadCategorias(){
        const categoriasDoBanco = await API.category.list()
        const categoriasCarregadas = await categoriasDoBanco.json()
        setCategorias(categoriasCarregadas);
    }

    useEffect(function(){
        loadCategorias();
    },[])

    async function cadastraItem(event){
        event.preventDefaut()

        const formEl = event.target;

        formEl.submit.disable = true;

        // criar o body da requisicao
        const body = {
            name: formEl.nome.value,
            url: formEl.url.value,
            categoria: formEl.categoria.value,
        };

        const request = await API.item.create(body);
        formEl.submit.disable = false;

        if (request.status == 201) {
            alert("Item cadastrado com sucesso!")
            formEl.nome.value = ""
            formEl.url.value = ""
        } else {
            alert("Impossível de cadastrar :(")
        }
    };

    return (
        <form className="container" onSubmit={cadastraItem}>
            <h1>Cadastro  de itens</h1>
            <div className="form-group mt-2">
                <label>Nome:</label>
                <input className="form-control" name="nome" type="text" />
            </div>

            <div className="form-group mt-2">
                <label>Url:</label>
                <input className="form-control" name="url" type="url" />
            </div>

            <div className="form-group mt-2">
                <select className="form-control" name="categoria">
                    {categorias.map(
                        el => <option key={el._id} value={el._id}>{el.name}</option>
                    )}
                </select>
            </div>

            <div className="form-group mt-3">
                <button type="submit" name="submit" className="btn btn-primary">Cadastrar</button>
            </div>
        </form>
    );
}

export default Cadastro;