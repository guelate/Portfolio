import Menu from './Menu';
import HomeButton from './HomeButton';

export default function HeaderLayout(){
  return (
    <div className='bg-gray-100 flex pl-48 pr-6 pt-5 justify-between'>
      <HomeButton />
      <Menu />
    </div>
  );
};

