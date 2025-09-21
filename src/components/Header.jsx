export default function Header({ currScore, highScore }) {
  return (
    <header className='w-full bg-blue-500 flex justify-center'>
      <div className='w-[1100px] text-white font-medium pr-[2rem] flex flex-col items-end justify-center'>
        <p>Score: {currScore}</p>
        <p>Highest Score: {highScore}</p>
      </div>
    </header>
  );
}
