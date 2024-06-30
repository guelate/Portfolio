import { AlignJustify, House } from 'lucide-react';

export default function HeaderLayout(){
  return (
    <div className='bg-gray-100 flex pl-48 pr-6 pt-5 justify-between'>
      <House size={32}/>
      <AlignJustify size={32}/>
    </div>
  );
};

