import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Button, Col, Row, Tooltip } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';

class MyHeader extends Component {
  render() {
    return (
      <div>
        <Row justify={'space-between'}>
          <Col span={4}>
            <h1 style={{ color: 'white', fontWeight: 'border' }}>Store</h1>
          </Col>
          <Col span={1}>
            <Tooltip title={'购物车'}>
              <Button
                size={'large'}
                shape={'circle'}
                icon={<ShoppingCartOutlined />}
              />
            </Tooltip>
          </Col>
        </Row>
      </div>
    );
  }
}

export default MyHeader;
