import React from 'react';
import { PageContainer } from '@ant-design/pro-components';
import { ProForm, ProFormSelect, ProFormDatePicker, ProFormTimePicker } from '@ant-design/pro-components';
import ReactECharts from 'echarts-for-react';
import styles from './index.less';

const Page2: React.FC = () => {
  const barOption = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'bar'
    }]
  };

  return (
    <PageContainer
      header={{ title: '页面3' }}
    >
      <ProForm
        layout="horizontal"
        submitter={{ 
          resetButtonProps: { style: { display: 'none' } },
          submitButtonProps: { style: { display: 'none' } }
        }}
      >
        <ProFormSelect
          name="type"
          label="类型"
          valueEnum={{ 
            '1': '类型A',
            '2': '类型B',
            '3': '类型C'
          }}
        />
        <ProFormDatePicker name="date" label="日期" />
        <ProFormTimePicker name="time" label="时间" />
      </ProForm>

      <div  className={styles.echartsRow}>
        <div style={{ marginTop: 24 }}>
          <ReactECharts option={barOption} style={{ height: 400 }} />
        </div>

        <div style={{ marginTop: 24 }}>
          <ReactECharts option={barOption} style={{ height: 400 }} />
        </div>
      </div>
      
    </PageContainer>
  );
};

export default Page2;