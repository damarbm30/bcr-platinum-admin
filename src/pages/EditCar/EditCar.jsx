import { useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";

import { Breadcrumb, InnerSidebar } from "../../components";
import { editCar } from "../../services/carServices";
import useCar from "../../store/carList";
import { upload } from "../../assets";
import moment from "moment/moment";

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  min-height: calc(100vh - 54px);
  top: 54px;
  background-color: var(--background);
`;

const SaveButton = styled.button`
  background-color: var(--primaryBlue);
  color: white;
  border: 1px solid var(--primaryBlue);
`;

const CancelButton = styled.button`
  background-color: transparent;
  color: var(--primaryBlue);
  border: 1px solid var(--primaryBlue);
`;

const EditCar = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const carList = useCar((state) => state.carList);
  const current = carList.find((car) => car.id.toString() === id);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const result = await editCar(data, id);

    if (result.status === 200) {
      navigate("/cars");
      toast("Data Berhasil Disimpan", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light",
        className: "text-center bg-success text-white",
      });
    }
  };

  return (
    <section
      className="d-flex min-h-100"
      style={{
        position: "relative",
        left: "280px",
        width: "calc(100% - 280px)",
      }}
    >
      <InnerSidebar />
      <Wrapper>
        <div className="d-flex flex-column p-4 gap-4">
          <Breadcrumb editCar />
          <h3 className="fw-bold">Edit Car</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="d-flex flex-column gap-3 bg-white p-4">
              <div className="row align-items-center">
                <label htmlFor="name" className="col-2">
                  Nama/Tipe Mobil
                </label>
                <input
                  type="text"
                  id="name"
                  {...register("name", { required: true })}
                  placeholder="Input Nama/Tipe Mobil"
                  className="col-4 border border-dark border-opacity-25 p-1 rounded"
                  defaultValue={current?.name}
                />
                {errors.name && (
                  <span className="text-danger">This field is required</span>
                )}
              </div>
              <div className="row align-items-center">
                <label htmlFor="price" className="col-2">
                  Harga
                </label>
                <input
                  type="text"
                  id="price"
                  {...register("price", { required: true })}
                  placeholder="Input Harga Sewa Mobil"
                  className="col-4 border border-dark border-opacity-25 p-1 rounded"
                  defaultValue={current?.price}
                />
                {errors.price && (
                  <span className="text-danger">This field is required</span>
                )}
              </div>
              <div className="row align-items-center">
                <label htmlFor="image" className="col-2">
                  Foto
                </label>
                <label
                  htmlFor="image"
                  className="d-flex justify-content-between col-4 border border-dark border-opacity-25 p-2 rounded"
                >
                  {!watch("image") || watch("image").length === 0 ? (
                    <p className="text-muted">Upload Foto Mobil</p>
                  ) : (
                    <p className="text-muted">
                      {watch("image")[0].name.substring(0, 20)}...
                    </p>
                  )}
                  <input
                    type="file"
                    id="image"
                    {...register("image", { required: true })}
                    className="d-none"
                  />
                  <img src={upload} alt="upload" />
                </label>
                {errors.image && (
                  <span className="text-danger">This field is required</span>
                )}
              </div>
              <div className="row align-items-center">
                <label htmlFor="category" className="col-2">
                  Kategori
                </label>
                <select
                  id="category"
                  {...register("category", { required: true })}
                  className="col-4 border border-dark border-opacity-25 p-1 rounded"
                  style={{ color: "gray" }}
                  defaultValue={current?.category}
                >
                  <option value="" hidden>
                    Pilih Kategori Mobil
                  </option>
                  <option value="small">2 - 4 orang</option>
                  <option value="medium">4 - 6 orang</option>
                  <option value="large">6 - 8 orang</option>
                </select>
                {errors.category && (
                  <span className="text-danger">This field is required</span>
                )}
              </div>
              <div className="row align-items-center">
                <p className="col-2">Created at</p>
                <span className="col-4 px-0">
                  {moment(current?.createdAt).format("DD MMM YYYY, HH.mm")}
                </span>
              </div>
              <div className="row align-items-center">
                <p className="col-2">Updated at</p>
                <span className="col-4 px-0">
                  {moment(current?.updatedAt).format("DD MMM YYYY, HH.mm")}
                </span>
              </div>
            </div>
            <div
              className="d-flex position-absolute gap-3"
              style={{ bottom: "40px" }}
            >
              <Link to="/cars">
                <CancelButton className="btn px-3 fw-bold" type="button">
                  Cancel
                </CancelButton>
              </Link>
              <SaveButton
                className="btn btn-primary border-0 px-3 fw-bold"
                type="submit"
              >
                Save
              </SaveButton>
            </div>
          </form>
        </div>
      </Wrapper>
    </section>
  );
};
export default EditCar;
