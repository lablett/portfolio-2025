import './Card.css';

export const Card = ({ children, type = 'text', borderColor = 'green'}) => {
  return (
    <div className={`card ${type === 'photo' ? 'photo' : ''} border-${borderColor}`}>
      {children}
    </div>
  );
}

export default Card;
