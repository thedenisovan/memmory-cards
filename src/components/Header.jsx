export default function Header({ currScore, highScore }) {
  return (
    <header className='fixed h-[6vh] top-0 w-full flex flex-col items-end justify-center pr-[2rem] bg-blue-500 text-white font-medium'>
      <p>Score: {currScore}</p>
      <p>Highest Score: {highScore}</p>
    </header>
  );
}
