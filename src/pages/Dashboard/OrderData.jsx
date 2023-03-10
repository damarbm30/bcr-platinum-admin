import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import moment from "moment/moment";

const OrderData = ({
  id,
  email,
  car,
  startRent,
  finishRent,
  price,
  category,
}) => {
  moment.locale("en");

  return (
    <TableRow key={id}>
      <TableCell align="left" id={id}>
        {id}
      </TableCell>
      <TableCell align="left">{email}</TableCell>
      <TableCell align="left">{car}</TableCell>
      <TableCell align="left">
        {moment(startRent).format("D MMMM YYYY, HH.mm")}
      </TableCell>
      <TableCell align="left">
        {moment(finishRent).format("D MMMM YYYY, HH.mm")}
      </TableCell>
      <TableCell align="left">{price}</TableCell>
      <TableCell align="left">{category}</TableCell>
    </TableRow>
  );
};
export default OrderData;
