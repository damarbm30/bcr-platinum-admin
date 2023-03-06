import { carVector } from "../../assets";

const DeleteModal = ({ carId, onDelete }) => {
  return (
    <div
      className="modal fade"
      id="deleteModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content d-flex justify-content-center align-items-center p-4 gap-4 w-75 mx-auto">
          <div className="d-flex justify-content-center align-items-center">
            <img src={carVector} alt="car-vector" width={150} height={120} />
          </div>
          <h6 className="mb-0">Menghapus Data Mobil</h6>
          <p className="mb-0 text-center">
            Setelah dihapus, data mobil tidak dapat dikembalikan. Yakin ingin
            menghapus?
          </p>
          <div className="d-flex justify-content-center gap-3">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={() => onDelete(carId)}
              style={{ backgroundColor: "var(--primaryBlue)" }}
            >
              Ya
            </button>
            <button type="button" className="btn" data-bs-dismiss="modal">
              Tidak
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DeleteModal;
