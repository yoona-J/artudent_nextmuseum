import React from 'react'
import { Col, Row, Statistic, Card, Button } from 'antd'

function AdminPage() {
  return (
    <div style={{ width: '100%', height: '100%', background: '#282828', padding: '50px'}}>
      <div style={{ width: '80%', height: '100%', background: '#343434', margin: '0px auto', padding: '50px', borderRadius: '30px'}}>
        <div style={{ padding: '100px'}}>
          <p style={{ fontSize: '30px', textAlign: 'center', color: '#FFF' }}>
            ARTUDENT X NFT ADMIN PAGE
          </p>
          <div style={{background: 'none', padding: '30px', width: '60%', margin: '0px auto', borderRadius: '30px'}}>
            <Row gutter={16}>
              <Col span={12}>
                <Card
                    style={{borderRadius: '30px', marginRight: '10px'}}
                >
                  <Statistic
                    title="일 사용자 수"
                    value={10}
                    valueStyle={{
                      color: '#000',
                    }}
                    suffix="명"
                  />
                </Card>
              </Col>
              <Col span={12}>
                <Card
                    style={{borderRadius: '30px', marginLeft: '10px'}}
                >
                  <Statistic
                    title="총 사용자 수"
                    value={100}
                    valueStyle={{
                      color: '#000',
                    }}
                    suffix="명"
                  />
                </Card>
              </Col>
            </Row>
          </div>
          <a href='/auth/admin/upload'>
            <Button style={{width: '100%', margin: '3rem auto'}}>
              ART UPLOAD
            </Button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default AdminPage