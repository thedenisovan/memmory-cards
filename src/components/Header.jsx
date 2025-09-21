export default function Header({ currScore, highScore, setScore }) {
  return (
    <header className='w-full h-[3rem] bg-blue-500 flex justify-center'>
      <div className='w-[1100px] flex relative'>
        {currScore === null ? (
          <button
            className='absolute left-15 top-2 text-blue-500 font-bold cursor-pointer hover:scale-[1.01] transition bg-white rounded-[.5rem] w-24'
            onClick={() => setScore(0)}
          >
            Start Game
          </button>
        ) : (
          ''
        )}
        <div className='absolute right-0 text-white font-medium pr-[2rem] flex flex-col items-end justify-center'>
          <p>Score: {currScore}</p>
          <p>Highest Score: {highScore}</p>
        </div>
      </div>
    </header>
  );
}
