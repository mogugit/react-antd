import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined  } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Header,Content,Sider } = Layout


function Welcome(props){
    return (
        <Layout>
            <Header className="header">
                <div className="logo"/>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                    {
                        [1,2,3].map(item=>{
                            return (<Menu.Item key={item}>{`Nav${item}`}</Menu.Item>)
                        })
                    }
                </Menu>
            </Header>
            <Layout>
                <Sider width="200" className="site-layout-background">
                    <Menu 
                        mode="inline"
                        defaultOpenKeys={['sub1']}
                        defaultSelectedKeys={['1']}
                        style={{ height:'100%', borderRight:0 }}
                    >
                        <SubMenu key="sub1" icon={<UserOutlined/>} title="subnav1">
                            {
                                [1,2,3].map(item=>{
                                    return (
                                        <Menu.Item key={item}>{`sunbmenu${item}`}</Menu.Item>
                                    )
                                })
                            }
                        </SubMenu>
                        <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
                            {
                                [4,5,6].map(item=>{
                                    return (
                                        <Menu.Item key={item}>{`sunbmenu${item}`}</Menu.Item>
                                    )
                                })
                            }
                        </SubMenu>
                        <SubMenu key="sub3" icon={<NotificationOutlined  />} title="subnav 3">
                            {
                                [7,8,9,10].map(item=>{
                                    return (
                                        <Menu.Item key={item}>{`sunbmenu${item}`}</Menu.Item>
                                    )
                                })
                            }
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout style={{padding: "0 24px 24px"}}>
                    <Breadcrumb style={{margin: "16px 0"}}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content
                        className="site-layout-background"
                        style={{
                            padding:24,
                            margin: 0,
                            minHeight:280
                        }}
                    >
                        Context
                    </Content>
                </Layout>
            </Layout>  
        </Layout>
    )
}
export default Welcome;