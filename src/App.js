import React from 'react';
import './App.css';
import { Layout,Avatar, Menu, Breadcrumb} from 'antd';
import Title from 'antd/lib/typography/Title';
import SubMenu from 'antd/lib/menu/SubMenu';
import Icon from '@ant-design/icons';

const { Header, Footer, Sider, Content } = Layout;

function App() {

  return (
    <div className="App">
      <Layout>
        <Header style={{padding:10}}>
          <Avatar style={{float:'right'}} src='./dp.png' />
          <Title style={{color:'white'}} level={3}>Priya</Title>
        </Header>
        <Layout>
            <Sider>
              <Menu
              defaultSelectedKeys={['dashboard']}
              mode='inline'
              >
                <Menu.Item key='dashboard'>
                  Dasboard
                </Menu.Item>
                <SubMenu
                title={
                  <span> 
                    <Icon type="smile"/>
                    <span>About Us</span>
                    </span>
                }>
                  <Menu.ItemGroup key='aboutus' title="Country 1">
                    <Menu.Item key='location1'>Location 1</Menu.Item> 
                    <Menu.Item key='location2'>Location 2</Menu.Item> 
                  </Menu.ItemGroup>
                </SubMenu>
              </Menu>
            </Sider>  
            <Layout>
            <Content style={{ padding: '0 50px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>DashBoard</Breadcrumb.Item>
              </Breadcrumb>
      <div style={{background:'#fff',padding:24, minHeight: 500}}>Content</div>
        </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design Example Created by PRIYA</Footer>
            </Layout>
         </Layout>
     </Layout>   
    </div>
  );
}

export default App;
