import { defineConfig } from '@umijs/max';
import {HomeOutlined, MenuOutlined} from '@ant-design/icons';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '五凌电力有限公司',
  },
  routes: [
    {
      path: '/',
      redirect: '/peak-overview',
    },
    {
      name: '调峰总览',
      path: '/peak-overview',
      component: './PeakOverview',
      icon: 'MenuOutlined',
    },
    { name: '分时分析', path: '/page1', component: './Page1' },
    { name: '相似日分析', path: '/page2', component: './Page2' },
    //backups
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    {
      name: '权限演示',
      path: '/access',
      component: './Access',
    },
    {    
      name: ' CRUD 示例',
      path: '/table',
      component: './Table',
    },
  ],
  npmClient: 'yarn',
});

