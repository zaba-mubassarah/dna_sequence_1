import './HomeLayout.css';
import { Breadcrumb, Layout, Menu } from 'antd';
import DnaSequence from '../pages/DnaSequenceList/DnaSequence';
import Home from '../pages/Home/Home';
import BarChart from '../pages/BarChart/BarChart';
import { NavLink, withRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
const { Header, Content, Footer } = Layout;
const items = [
    { label: 'Home', key: '1' }, // remember to pass the key prop
    { label: 'DNA Sequence', key: '2' }, // which is required
    {
        label: 'Bar Chart',
        key: '3'
    }

];
const HomeLayout = () => (
    <Layout className="layout">
        <Header>
            <div className="logo" />
            {/* <Menu.Item  >
                <Link to="/">Dashboard</Link>
            </Menu.Item> */}
            <Menu theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['1']}>
                <Menu.Item key="/">
                    <NavLink to="/">

                        <span>Home</span>
                    </NavLink>
                </Menu.Item>
                <Menu.Item key="2"> <NavLink to="/dna-sequence">

                    <span>DNA Sequence</span>
                </NavLink></Menu.Item>
                <Menu.Item key="3"><NavLink to="/bar-chart">

                    <span>Bar Chart</span>
                </NavLink></Menu.Item>

            </Menu>

        </Header>
        <Content
            style={{
                padding: '0 50px',
            }}
        >
            <Breadcrumb
                style={{
                    margin: '16px 0',
                }}
            >
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-content">
                <Routes>
                    <Route
                        path="/"
                        element={<Home />}
                    />
                    <Route
                        path="/dna-sequence"
                        element={<DnaSequence />}
                    />
                    <Route
                        path="/bar-chart"
                        element={<BarChart />}
                    />

                </Routes>
            </div>
        </Content>
        <Footer
            style={{
                textAlign: 'center',
            }}
        >
            Developed By MD. Anin Naeem
        </Footer>
    </Layout>
);

export default HomeLayout;
