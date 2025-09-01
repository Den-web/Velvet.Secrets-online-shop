import React from 'react';
import { Feedbacks } from '../molecules/Feedbacks';

const FeedbacksSection: React.FC = () => {
  return (
    <section className=" bg-white mb-[50px] md:mb-[80px] lg:mb-[100px]">
      <Feedbacks />
    </section>
  );
};

export default FeedbacksSection;
