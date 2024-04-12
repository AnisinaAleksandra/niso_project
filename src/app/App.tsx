import './styles/index.scss';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';
import {classNames} from "shared/lib/classNames/classNames";

import { Layout, theme } from 'antd';
import { Sidebar } from 'widgets/Sidebar';
import { useTheme } from 'app/providers/ThemeProvider';
import { Suspense } from 'react';




const App = () => {
  
  const { Header, Content, Footer } = Layout;

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

    return (
        <div className={classNames('app', {}, [useTheme().theme])}>
        <Suspense>
                       <Layout style={{ minHeight: '100vh' }}>
                <Navbar />
          <Sidebar theme={useTheme().theme} />  
       

      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: '0 16px', padding:'016px'}}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
              >
                     <AppRouter/>
           
          </div>
            </Content>
            
        <Footer style={{ textAlign: 'center' }}>
          Portfolio Anisina ©{new Date().getFullYear()} Created by Anisina Aleksandra
        </Footer>
          </Layout>
          
    </Layout>
</Suspense>
            
        
</div>
   
    );
};

export default App;
