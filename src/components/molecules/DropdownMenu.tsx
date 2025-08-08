import React from 'react';
import { dropdownMenu } from '../../data/dropdownMenu';
import { Link } from '../atoms/Link';

const DropdownMenu: React.FC = () => {
  return (
    <div className="w-screen bg-white shadow-xl px-6 md:px-12 py-6 md:py-8 animate-fade-in-down rounded-bl-[20px] rounded-br-[20px]">
      <div className="flex flex-col md:flex-row justify-between max-w-[1200px] mx-auto gap-6 md:gap-8">
        {dropdownMenu.map((block, index) => (
          <div
            key={index}
            className="flex gap-4 md:gap-6 w-full md:w-1/3 items-stretch"
          >
            <img
              src={block.image}
              alt={`dropdown-${index}`}
              className="rounded-[4px] object-cover min-w-[100px] max-w-[140px] h-auto"
            />

            <ul className="space-y-2 text-sm">
              {block.links.map((linkText, i) => (
                <li key={i}>
                  <Link href="#">{linkText}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DropdownMenu;
