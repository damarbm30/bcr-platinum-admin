import { Link } from "react-router-dom";
import moment from "moment/moment";
import "moment/locale/id";

import { clock, edit, people, trash } from "../../assets";

const CarItem = ({ id, image, name, price, category, updatedAt, onGetId }) => {
  const formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  });

  const formattedPrice = formatter.format(price);
  let peopleCap;

  switch (category?.toLowerCase()) {
    case "small":
      peopleCap = "2 - 4 people";
      break;
    case "medium":
      peopleCap = "4 - 6 people";
      break;
    case "large":
      peopleCap = "6 - 8 people";
      break;
  }

  moment.locale("id");

  return (
    <div className="card w-100">
      <div className="card-body">
        <div className="d-flex px-3 py-2 justify-content-center mb-4">
          <img
            src={image}
            alt={name}
            width={270}
            h={160}
            style={{
              borderRadius: "4px",
              objectFit: "fill",
              width: "270px",
              height: "160px",
            }}
          />
        </div>
        <div className="d-flex flex-column gap-2 mb-4">
          <p className="">{name}</p>
          <p className=" fw-bold">{formattedPrice} / hari</p>
          <div className="d-flex gap-2">
            <img src={people} alt="people" />
            <p className="">{peopleCap}</p>
          </div>
          <div className="d-flex gap-2">
            <img src={clock} alt="clock" />
            <p className="">
              Updated at {moment(updatedAt).format("D MMM YYYY, HH.mm")}
            </p>
          </div>
        </div>
        <div className="d-flex gap-3">
          <button
            className="btn btn-outline-danger w-100 d-flex justify-content-center align-items-center gap-2"
            data-bs-toggle="modal"
            data-bs-target="#deleteModal"
            onClick={() => onGetId(id)}
          >
            <img src={trash} alt="trash" />
            <p className="">Delete</p>
          </button>
          <Link to={`/edit-car/${id}`} className="w-100">
            <button className="btn btn-success w-100 d-flex justify-content-center align-items-center gap-2">
              <img src={edit} alt="trash" />
              <p className="">Edit</p>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default CarItem;
