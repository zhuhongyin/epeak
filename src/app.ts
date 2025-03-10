// 运行时配置

import { LoginForm } from "@ant-design/pro-components";

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<{ name: string }> {
  return { name: 'Admin' };
}

export const layout = () => {
  return {
    logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
    menu: {
      locale:  true,
      defaultSelectedKeys: ['/peak-overview'],
      defaultOpenKeys: ['/peak-overview'],
    },
    layout: 'mix',
    header: {
      title: '五凌电力有限公司',
      style: {
        backgroundColor: '#072F64F6',
        color: '#fff',
      },
      actions: [
        {
          key: 'search',
          title: '搜索',
          component: `<Input.Search placeholder="请输入搜索内容" style={{ width: 200 }} />`,
        }
      ],
      user: {
        name: 'Admin',
        avatar: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
      },
    },
    content: {
      padding: 24,
      minHeight: 'calc(100vh - 64px)',
      backgroundColor: '#f0f2f5',
    },
  };
};
