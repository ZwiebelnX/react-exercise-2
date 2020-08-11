import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Badge, Button, Col, Row, Tooltip } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';

class MyHeader extends Component {
  render() {
    return (
      <div>
        <Row justify={'space-between'}>
          <Col span={4}>
            <h1 style={{ color: 'white', fontWeight: 'border' }}>Store</h1>
          </Col>
          <Col span={1}>
            <Badge count={this.props.cartCount}>
              <Tooltip title={'购物车'}>
                <Button
                  size={'large'}
                  shape={'circle'}
                  icon={<ShoppingCartOutlined />}
                />
              </Tooltip>
            </Badge>
          </Col>
        </Row>
      </div>
    );
  }
}

MyHeader.propTypes = {
  cartCount: PropTypes.number,
};

export default MyHeader;
