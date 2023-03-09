import { Col, Layout, Row } from 'antd';
import { Content } from 'antd/es/layout/layout';
import React, { } from 'react'

function Wrapper({ children }) {
    return (
        <Layout className="layout">
            <Content style={{ padding: '0 50px', marginBlock: 20 }}  >
                <Row justify="center" align="center">
                    <Col flex={1} style={{ background: '#fff', padding: 20 }}>
                        <div className="site-layout-content">
                            {children}
                        </div>
                    </Col>
                </Row>
            </Content>
        </Layout>
    )
}

export default Wrapper;