import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

import { Breadcrumb, InnerSidebar } from "../../components";
import { editCar } from "../../services/carServices";
import useCar from "../../store/carList";

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  min-height: 100vh;
  top: 54px;
  background-color: var(--background);
`;

const EditCar = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const carList = useCar((state) => state.carList);
  const currentCar = carList.find((car) => car.id.toString() === id);

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    editCar(data, id);
    navigate("/cars");
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
          <form className="bg-white p-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="">
              <label htmlFor="name">Nama/Tipe Mobil</label>
              <input
                type="text"
                id="name"
                {...register("name")}
                defaultValue={currentCar?.name}
              />
            </div>
            <div>
              <label htmlFor="price">Harga</label>
              <input
                type="text"
                id="price"
                {...register("price")}
                defaultValue={currentCar?.price}
              />
            </div>
            <div>
              <label htmlFor="image">Foto</label>
              <input type="file" id="image" {...register("image")} />
            </div>
            <div>
              <label htmlFor="category">Kategori</label>
              <select
                id="category"
                {...register("category")}
                defaultValue={currentCar?.category}
              >
                <option value="" hidden>
                  Kategori
                </option>
                <option value="small">2 - 4 orang</option>
                <option value="medium">4 - 6 orang</option>
                <option value="large">6 - 8 orang</option>
              </select>
            </div>
            <div>
              <p>Created at</p>
              <span>-</span>
            </div>
            <div>
              <p>Updated at</p>
              <span>-</span>
            </div>
            <div>
              <button type="submit">Save</button>
              <button type="button">Cancel</button>
            </div>
          </form>
        </div>
      </Wrapper>
    </section>
  );
};
export default EditCar;
