import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col, List, Row } from 'antd';
import 'antd/dist/antd.css';
import ItemCard from './item-card';

class Category extends Component {
  render() {
    return (
      <div style={{ marginBottom: '20px' }}>
        <Row>
          <Col span={4} offset={1}>
            <h1 style={{ fontWeight: 'border' }}>{this.props.name}</h1>
          </Col>
        </Row>
        <Row justify={'center'}>
          <Col span={21}>
            <List
              dataSource={this.props.list}
              grid={{ gutter: 20, column: 3 }}
              renderItem={(item) => (
                <ItemCard
                  name={item.name}
                  price={item.price}
                  addItem={(o) => () => this.props.addItem(o)}
                  key={item.name}
                />
              )}
            />
          </Col>
        </Row>
      </div>
    );
  }
}

Category.propTypes = {
  name: PropTypes.string,
  list: PropTypes.array,
  addItem: PropTypes.func,
};

export default Category;
