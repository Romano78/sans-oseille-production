import { ModeToggle } from '@/components/ModeToggle';

export default function Header() {
  return (
    <header className='flex justify-between items-center'>
      <ModeToggle />
    </header>
  );
}
