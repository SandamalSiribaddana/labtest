import { Link } from "react-router-dom";

function ItemCard({ item, onDelete }) {
  return (
    <div className="card">
      <img
        src={item.imageUrl || "https://via.placeholder.com/400x220?text=Item"}
        alt={item.name}
        className="card-image"
      />
      <div className="card-content">
        <h3>{item.name}</h3>
        <p><strong>Category:</strong> {item.category}</p>
        
        {/* Displaying the new Manufacturer Country field */}
        <p><strong>Manufacturer:</strong> {item.manufacturerCountry}</p>
        
        <p><strong>Price:</strong> ${item.price}</p>
        <p className="description">{item.description}</p>

        <div className="card-actions">
          <Link className="btn secondary" to={`/edit-item/${item._id}`}>
            Edit
          </Link>
          <button className="btn danger" onClick={() => onDelete(item._id)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;