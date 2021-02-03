import React from 'react';
import { Layout, Menu } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined  } from '@ant-design/icons';

import Breadcrumb from '../../components/Breadcrumb'

const { SubMenu } = Menu;
const { Header,Content,Sider } = Layout

function CustomizeMenu(props){
    let itemArr = props.arr;
    let defaulMenu = {

    }
    let MenuList = itemArr.map(item=>{
        return (
            <Menu.Item>{  } </Menu.Item>
        )
    })


    return (
        <Menu >
            {MenuList}
        </Menu>
    )
}



function Welcome(props){
    return (
        <Layout id="componentLayout">
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
                    <Breadcrumb value={['Home','List','App']}></Breadcrumb>
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