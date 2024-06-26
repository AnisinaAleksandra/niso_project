import React, { useState } from 'react'
import { Layout, Menu} from 'antd';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';


type MenuItem = Required<MenuProps>['items'][number];
import type { MenuProps } from 'antd';
import { Theme } from 'app/providers/ThemeProvider';
const { Sider } = Layout;
function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Option 1', '1', <PieChartOutlined />),
  getItem('Option 2', '2', <DesktopOutlined />),
  getItem('User', 'sub1', <UserOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Files', '9', <FileOutlined />),
];

export const Sidebar = ({theme}:any) => {
  const [collapsed, setCollapsed] = useState(false);
    
    return (
       <Sider theme={theme}   collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
            <Menu theme={theme} defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider> 
    )

    
}
