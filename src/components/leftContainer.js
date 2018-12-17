import React, { Component } from 'react';
import { Menu, Icon, Row, Col } from 'antd';
import { Link } from 'react-router';

const Container = Inner => {
  return class RefsHOC extends React.Component {
    render() {
      const props = {
        ...this.props
      };
      console.log(this.props,'this.props是')
      return (
        <div>
          <Row>
            <Col span={4}>
              <Menu>
                <Menu.Item>
                  <Link to={'/home'}>首页</Link>
                </Menu.Item>
                <Menu.Item>
                  <Link to={'/baidu'}>列表页</Link>
                </Menu.Item>
                <Menu.Item>
                  <Link to={'/lianxin'}>详细页</Link>
                </Menu.Item>
              </Menu>
            </Col>
            <Col span={20}>
              <Inner {...props} />
            </Col>
        </Row>
        </div>
      );
    }
  };
};
export default Container;