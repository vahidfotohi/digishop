/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

export default function Home() {
  console.log('test');
  //eslint
  const renderName = () => {
    const name = 'ali';
    return <span>{name}</span>;
  };
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div>first page</div>
      {renderName()}
    </div>
  );
}
