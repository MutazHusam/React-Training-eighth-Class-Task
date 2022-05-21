// import './style.css'
import * as StyledComponents from './styles.js';

function Button({ isWhite, ...props }) {
  return (
    <StyledComponents.StyledButton {...props} isWhite={isWhite}>
      {props.children}
    </StyledComponents.StyledButton>
  );
}

export default Button;