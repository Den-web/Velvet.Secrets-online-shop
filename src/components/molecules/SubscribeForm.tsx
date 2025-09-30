import React from 'react';
import { Title, Text, Input, Button, Form } from '../atoms/index';
import { useTitleLevels } from '../../helpers/useTitleLevels';
import { footerData } from '../../data/footerData';

export const SubscribeForm: React.FC = () => {
  const { footerTitleFormLevel } = useTitleLevels();

  return (
    <div
      className="
        mb-[50px] w-[275px] h-[254px]
        md:w-[492px] md:h-[253px]  
        lg:w-[492px] lg:h-[266px]
        mx-auto md:mx-0
      "
    >
      <Title
        level={footerTitleFormLevel}
        className="
          font-manrope font-bold !text-white text-center 
          sm:text-[20px] 
          md:text-[28px] md:text-left mb-[10px]
          lg:text-[36px] lg:text-left
        "
      >
        {footerData.subscribe.title}
      </Title>

      <Text
        className="
          font-manrope text-white text-center flex 
          sm:text-[14px] 
          md:text-[16px] md:text-left 
          lg:text-[18px] lg:text-left
        "
      >
        {footerData.subscribe.text}
      </Text>

      <Form
        className="flex flex-col items-start mt-[30px]"
        onFinish={(values) => console.log(values)}
      >
        <Form.Item
          name="email"
          rules={[
            { required: true, message: footerData.subscribe.requiredMessage },
          ]}
          className="flex-1 w-full"
        >
          <Input
            placeholder={footerData.subscribe.inputPlaceholder}
            className="
              border !border-white rounded-md 
              px-[12px] h-[52px] text-[#ccc] placeholder:text-[#ccc]
              sm:w-[275px] md:w-[439px] lg:w-[394px]
            "
          />
        </Form.Item>
        <Button
          htmlType="submit"
          className="
            custom-btn-form
            bg-pink5 text-white font-bold rounded-lg
            sm:w-[132px] sm:h-[42px]
            md:w-[143px] md:h-[44px]
            lg:w-[166px] lg:h-[48px]
          "
        >
          {footerData.subscribe.buttonText}
        </Button>
      </Form>
    </div>
  );
};
