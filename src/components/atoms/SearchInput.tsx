import React, { useState } from 'react';
import { CloseOutlined, SearchOutlined } from '@ant-design/icons';

export const SearchInput: React.FC = () => {
  const [value, setValue] = useState('');

  return (
    <div className="relative w-[400px] h-10">
      <input
        type="text"
        placeholder="Знайти"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-full h-full pl-10 pr-10 text-sm border border-[#D9D9D9] rounded bg-white placeholder:text-neutral-400 focus:outline-none"
      />
      <SearchOutlined className="absolute left-3 top-1/2 -translate-y-1/2  w-6 h-6" />
      {value && (
        <button
          onClick={() => setValue('')}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-700"
        >
          <CloseOutlined className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};
