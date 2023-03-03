import { clock, people } from "../../assets";

const formattedDate = (updatedAt) => {
  const dateUpdated = new Date(updatedAt);
  const month = dateUpdated.toLocaleString("default", { month: "short" });

  return (
    <span>
      {dateUpdated.getDay()} {month} {dateUpdated.getFullYear()},{" "}
      {dateUpdated.getHours()}.{dateUpdated.getMinutes()}{" "}
    </span>
  );
};

const CarItem = ({ id, image, name, price, category, updatedAt }) => {
  const formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  });

  const formattedPrice = formatter.format(price);
  let peopleCap;

  switch (category.toLowerCase()) {
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

  return (
    <div className="card" style={{ width: "350px" }}>
      <div className="card-body">
        <div className="d-flex px-3 py-2 justify-content-center mb-4">
          <img
            src={image}
            alt={name}
            width={270}
            style={{ borderRadius: "4px" }}
          />
        </div>
        <div className="d-flex flex-column gap-2 mb-4">
          <p className="mb-0">{name}</p>
          <p className="mb-0 fw-bold">{formattedPrice} / hari</p>
          <div className="d-flex gap-2">
            <img src={people} alt="people" />
            <p className="mb-0">{peopleCap}</p>
          </div>
          <div className="d-flex gap-2">
            <img src={clock} alt="clock" />
            <p className="mb-0">Updated at {formattedDate(updatedAt)}</p>
          </div>
        </div>
        <div className="d-flex gap-3">
          <button className="w-100 py-2 bg-transparent">Delete</button>
          <button className="w-100 py-2">Edit</button>
        </div>
      </div>
    </div>
  );
};
export default CarItem;
