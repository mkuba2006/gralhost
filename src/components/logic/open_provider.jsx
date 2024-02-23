const OpenProvider = (props) => {
  const initialState = { isOpen: false, isHover: false, isCart: false, isELVisible: false, isFavhover: false };
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'TOGGLE':
        return { ...state, [action.payload]: !state[action.payload] };
      case 'OPEN':
        return { ...state, [action.payload]: true };
      case 'CLOSE':
        return { ...state, [action.payload]: false };
      default:
        return state;
    }
  }, initialState);

  const toggle = (key) => () => dispatch({ type: 'TOGGLE', payload: key });
  const close = (key) => () => dispatch({ type: 'CLOSE', payload: key });
  const open = (key) => () => dispatch({ type: 'OPEN', payload: key });

  const OpenCTX = {
    ...state,
    toggle,
    close,
    open,
  };

  return (
    <OpenContext.Provider value={OpenCTX}>
      {props.children}
    </OpenContext.Provider>
  );
};