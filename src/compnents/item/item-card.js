import React, { Component } from 'react';
import Placeholder from '../../assets/product_image_placeholder.png';
import { Button, Col, Row } from 'antd';
import 'antd/dist/antd.css';
import PropTypes from 'prop-types';

class ItemCard extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.name}</h3>
        <img
          alt={'image'}
          src={Placeholder}
          style={{ width: '170px', height: '170px' }}
        />
        <Row style={{ marginTop: '10px' }}>
          <Col span={12}>{this.props.price}</Col>
          <Col span={12}>
            <Button type={'primary'} size={'small'}>
              add to cart
            </Button>{' '}
          </Col>
        </Row>
      </div>
    );
  }
}

ItemCard.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
};

export default ItemCard;
