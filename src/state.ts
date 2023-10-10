const state = {
  data: [],

  listeners: [], //array de funciones

  getState() {
    return this.data;
    //Te devuelve la ultima version del estado
  },

  suscribe(callback: (any) => any) {
    this.listeners.push(callback);
    // te avisa cuando algun componente cambia el estado
  },

  setState(newState) {
    this.data = newState;
    for (const callback of this.listeners) {
      callback();
    }
  },

  addItem(item: string[] = []) {
    const currentState = this.getState(); ///Obtengo la ultima version del state
    console.log("addItem currenState:", currentState);
    console.log("item", item);

    //Aca se está tomando el contenido del array currentState, copiándolo en newState, y luego agregando item al final de newState
    const newState = [...currentState, item];
    this.setState(newState); // Actualiza el estado con el nuevo valor
  },
};

export { state };
