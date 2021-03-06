import "antd/dist/antd.css";
import { Table, Button, message, Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const { Header, Content, Footer } = Layout;
const { Column } = Table;

export default function ListarInvestimentos() {
    const [investimentos, setInvestimentos] = useState([]);

    function remove(record) {
        message.success('Investimento removido com sucesso!');
    }
    return (
        <div className="container">
            <Layout className="layout">
                <Header>
                    <div className="logo" />
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>

                        <Menu.Item key="1">
                            <Link to="/cadastrar-investimentos">
                                Listar Investimentos
            </Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link to="/listar-investimentos">
                                Listar Investimentos
                </Link>
                        </Menu.Item>
                    </Menu>
                </Header>
                <Content style={{ padding: '0 50px' }}>
                    <div className="site-layout-content">
                        <h2>INVESTIMENTOS</h2>
                        <Table dataSource={investimentos}>
                            <Column title="Código do ativo" dataIndex="codigoAtivo" key="codigoAtivo" />
                            <Column title="Valor" dataIndex="vaor" key="valor" />
                            <Column title="Quantidade de Cotas" dataIndex="quantidadeCotas" key="quantidadeCotas" />
                            <Column title="Data da Compra" dataIndex="dataCompra" key="dataCompra" />
                            <Button title="Remover" key="atualizar"
                                render={(text, record) => (<Button onClick={() => remove(record)}
                                    type="primary">Remover</Button>)}
                            />

                        </Table>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>My invest 2021</Footer>
            </Layout>
        </div>
    );
}