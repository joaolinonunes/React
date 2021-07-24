import { Button } from 'bootstrap';
import React, { Component } from 'react';
import {Container, Form } from 'react-bootstrap';
import UsuarioServicos from '../Servicos/UsuarioServicos';

class CrateUpdateUsuario extends Component {

    constructor (props){
            super(props);
                this.state = {
                    id : this.props.match.param.id,
                    nome :"",
                    carro : "",
                    placa : "",
                    tempo :"",
                }
            

            this.changeNomeHandler = this.changeNomeHandler.bind(this);
            this.changeCarroHandler = this.changeCarroHandler.bind(this);
            this.changePlacaHandler = this.changePlacaHandler.bind(this);
            this.changeTempoHandler = this.changeTempoHandler.bind(this);
            this.salvarUsuario = this.salvarUsuario.bind(this);
    }

    componenteDidMount(){

    }

    salvarUsuario(){

        let usuario = {
            nome : this.state.nome,
            carro : this.state.carro,
            placa : this.state.placa,
            tempo : this.state.tempo

        }

        UsuarioServicos.createUsuario(usuario).then(
            (res) => {
                alert(res.data);
                this.props.history.push("/usuarios")
            }
        )
    }

    changeNomeHandler(event){
        this.setState({nome : event.target.value})
    }
    changeCarroHandler(event){
        this.setState({carro : event.target.value})
    }
    changePlacaHandler(event){
        this.setState({placa : event.target.value})
    }
    changeTempoHandler(event){
        this.setState({tempo : event.target.value})
    }
    cancelar(){
        this.props.history.push("/usuarios");
    }


    render() {
        return (
            <Container>
                <Row className="justify-content-md-center">
                    <h1>Cadastro usuario</h1>
                </Row>
                <Form>
                    <Form.Group controlId="formNome">
                        <Form.Control type="text" placeholder="Nome" value={this.state.nome} onChange={this.changeNomeHandler} />
                        <Form.Text className="text-muted">
                            Digite seu nome
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formCarro">
                        <Form.Control type="text" placeholder="Carro" value={this.state.carro} onChange={this.changeCarroHandler} />
                        <Form.Text className="text-muted">
                            Digite seu carro
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formPlaca">
                        <Form.Control type="text" placeholder="Placa" value={this.state.placa} onChange={this.changePlacaHandler} />
                        <Form.Text className="text-muted">
                            Digite a placa do carro
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formTempo">
                        <Form.Control type="text" placeholder="Tempo" value={this.state.tempo} onChange={this.changeTempoHandler} />
                        <Form.Text className="text-muted">
                            Digite o tempo de uso da vaga
                        </Form.Text>
                    </Form.Group>
                    <Row className="float-right">
                            <Button variant="success" style={{margin:"10px 0px 10px 0px"}} className="btnSubmit"
                            onClick={this.salvarUsuario}>
                                Inserir
                            </Button>
                            <Button variant="warning" style={{margin:"10px"}} className="btnSubmit"
                            onClick={this.cancelar.bind(this)}>
                                Cancelar
                            </Button>

                    </Row>

                </Form>

            </Container>

        );
    }
}

export default CrateUpdateUsuario;