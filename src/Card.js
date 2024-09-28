import './Card.css';

const Card = ({ title, description, id, deleteIdea }) => {
  return (
    <div className='card'>
      <h3>{title}</h3>
      <p>{description}</p>
      <button>🗑</button>
    </div>
  )
}
export default Card;