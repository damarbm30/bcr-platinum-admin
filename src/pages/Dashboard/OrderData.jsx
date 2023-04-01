import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import moment from "moment/moment";

const OrderData = ({
  id,
  email,
  car,
  start_rent_at,
  finish_rent_at,
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
        {moment(start_rent_at).format("D MMMM YYYY, HH.mm")}
      </TableCell>
      <TableCell align="left">
        {moment(finish_rent_at).format("D MMMM YYYY, HH.mm")}
      </TableCell>
      <TableCell align="left">{price}</TableCell>
      <TableCell align="left">{category}</TableCell>
    </TableRow>
  );
};
export default OrderData;
