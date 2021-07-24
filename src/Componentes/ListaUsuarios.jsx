import React, { Component } from 'react';
import {Button, Container, Row, Table } from 'react-bootstrap';
import UsuarioServices from '../Servicos/UsuarioServices';


class ListaUsuarios extends Component {
    
    constructor (props){
        super(props);
        this.state = {
            usuarios : []
        }

        this.voltar = this.voltar.bind(this);
        this.excluir = this.excluir.bind(this);
        this.editar  = this.editar.bind(this);
        this.novoUsuario = this.novoUsuario.bind(this);
    }

    componentDidMount(){
        this.getUsuarios();

    }
    getUsuarios(){
        UsuarioServices.getUsuario().then(
            (resposta) =>
                this.setState({usuarios:resposta.data})
        );
    }

    voltar(){
        this.props.history.push("/");


    }
    excluir(id){
        UsuarioServices.deleteUsuario(id).then(
            res => {
                alert(res.data);
                this.getUsuarios();
            }
        );
    }
    editar(id){
        this.props.history.push("/usuario/"+id);
    }
    novoUsuario(){
        this.props.history.push("/usuario/_add");
    }
    

    render() {
        return (
            <Container>
                <Row>
                <h1> Usuarios </h1>
                </Row>
                <Row>
                <Button variant="link" onClick={this.voltar}> Voltar </Button>
                </Row>
                <Row>
                    <Table striped bordered haver size="sm">
                        <thead>
                            <tr>
                                <th>
                                    Nome
                                </th>
                                <th>
                                    Sobrenome
                                </th>
                                <th>
                                    Email
                                </th>
                                <th>
                                    Ações
                                </th>

                            </tr>

                        </thead>
                        <tbody>
                            {
                               this.state.usuarios.map(
                                   usuario =>
                                   <tr key = {usuario.id_usuario}>
                                        <td>
                                            {usuario.nome}
                                        </td>
                                        <td>
                                            {usuario.carro}
                                        </td>
                                        <td>
                                            {usuario.placa}
                                        </td>
                                        <td>
                                            {usuario.tempo}
                                        </td>
                                        <td> 
                                            <Button variant="warning" onClick={this.editar(usuario.id_usuario)}> Editar </Button>
                                            <Button variant="danger" onClick={this.excluir(usuario.id_usuario)}> Excluir</Button>
                                        </td>
                                   </tr>
                               )

                            }

                        </tbody>

                    </Table>

                </Row>
                <Row >
                    <col>
                    <Button className="float-left" variant="link" onClick={this.voltar}> Voltar </Button>
                    </col>
                    <col>
                    <Button className="float-right" variant="secondary" onClick={this.novoUsuario}> Novo Usuario </Button>
                    </col>
                </Row>
            </Container>
        );
    }
}

export default ListaUsuarios;