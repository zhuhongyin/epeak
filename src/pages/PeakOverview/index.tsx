import React from 'react';
import { PageContainer } from '@ant-design/pro-components';
import { ProForm, ProFormSelect, ProFormDatePicker, ProFormTimePicker } from '@ant-design/pro-components';
import ReactECharts from 'echarts-for-react';

const PeakOverviewPage: React.FC = () => {
  const option = {
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['度电分摊费用', '原始上网电量', '免分摊电量', '市场度电分摊费用'],
      bottom: 10
    },
    xAxis: {
      type: 'category',
      data: ['厂站1', '厂站2', '厂站3', '厂站4', '厂站5']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: '度电分摊费用',
        type: 'line',
        data: [120, 132, 101, 134, 90],
        markArea: {
          itemStyle: {
            color: 'rgba(255, 173, 177, 0.4)'
          }
        }
      },
      {
        name: '原始上网电量',
        type: 'bar',
        stack: '总量',
        barWidth: 16,
        data: [220, 182, 191, 234, 290]
      },
      {
        name: '免分摊电量',
        type: 'bar',
        stack: '总量',
        barWidth: 16,
        data: [150, 232, 201, 154, 190]
      },
      {
        name: '市场度电分摊费用',
        type: 'line',
        data: [80, 80, 80, 80, 80],
        markLine: {
          data: [{ type: 'average', name: '平均值' }],
          label: {
            position: 'end',
            formatter: '加权平均'
          }
        }
      }
    ]
  };

  return (
    <PageContainer
      header={{ title: ' ' }}
      
    >
      <ProForm
        style={{ backgroundColor: "#fff", padding: 24 }}
        layout="inline"
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

      <div style={{ marginTop: 24, backgroundColor: "#fff", padding: 24 }}>
        <div style={{ fontSize: 24 }}>分摊费用总览</div>
        <ReactECharts option={option} style={{ height: 400 }} />
      </div>
    </PageContainer>
  );
};

export default PeakOverviewPage;