function Image(props) {
  return (
    <img
      src={props.sauce}
      name={props.name}
      className={props.class}
      onClick={props.click}
    />
  );
}

export default Image;
