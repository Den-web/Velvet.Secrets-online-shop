import { ConfigProvider, Button } from 'antd';
import React from 'react';

export const ButtonConfig: React.FC = () => (
  <>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#c31f5c',
          colorBorder: '#c31f5c',
          borderRadius: 8,
          colorText: '#grey6',
          fontSize: 20,
          fontFamily: 'manrope',
          controlHeight: 48,
          paddingContentHorizontal: 26,
          paddingContentVertical: 14,
          boxShadow: '0 2px 0 0 rgba(0, 0, 0, 0.02)',
        },
      }}
    >
      <Button type="default" className="font-bold transition delay-150 duration-300 ease-in-out">
        Подивитись все
      </Button>
    </ConfigProvider>
  </>
);
