/* eslint-disable react/prop-types */
export default function SingleProduct({ product }) {
  return (
    <div className="col">
      <div className="card h-100">
        <img src={product.imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.description}</p>
          <p>$ {product.price}</p>
          <div className="text-center">
            <button className="btn btn-primary">Click here to Buy!</button>
          </div>
        </div>
      </div>
    </div>
  );
}
