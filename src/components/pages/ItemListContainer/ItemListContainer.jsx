import Counter from "../../common/counter/Counter";

export const ItemListContainer = ({ nombre, edad }) => {
  //const { nombre, edad } = props;

  return (
    <>
      <h1>productos</h1>
      <h3>hola {nombre}</h3>
      <h4>mi edad es {edad}</h4>
      <Counter />
    </>
  );
};
