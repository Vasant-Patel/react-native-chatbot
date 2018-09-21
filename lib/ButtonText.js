import styled from 'styled-components/native';

const Button = styled.Text`
  color: ${props => props.invalid ? '#FFF' : props.fontColor};;
  font-size: 12;
  font-family: 'SuisseIntl-SemiBold';
`;

export default Button;
