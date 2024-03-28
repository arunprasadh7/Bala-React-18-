const Content = () => {
  const handleClick = () => console.log(`Subscribed`);

  const clickedBy = (name) => console.log(`Clicked by ${name}`);

  const clickEvent = (e) => console.log(e.target.innerText);

  const doubleTap = () => console.log(`You have double clicked`);

  return (
    <main>
      <p>Content Space</p>
      <button onClick={handleClick}>Subscribe</button>
      <button onClick={() => clickedBy("Arun")}>Clicked By</button>
      <button onClick={(e) => clickEvent(e)}>Click Event Text</button>
      <button onDoubleClick={doubleTap}>Double Click</button>
    </main>
  );
};

export default Content;
