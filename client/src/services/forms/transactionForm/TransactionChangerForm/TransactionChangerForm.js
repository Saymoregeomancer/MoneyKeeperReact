import DeleteElement from "../../utils/DeleteElement";
import { request } from "../../../request.service";
import { useDispatch } from "react-redux";
import { fetchTransactions } from "../../../../store/ActionCreators";
import apiConfig from "../../../../config/api.json";

const { url, method, headers, token } = apiConfig.RemoveTransaction;

const TransactionChangerForm = ({ id }) => {
  const dispatch = useDispatch();

  const removeFunction = async () => {
    await request({
      url,
      method,
      body: { id },
      headers,
      token,
    });
    dispatch(fetchTransactions());
  };

  return (
    <DeleteElement
      removeFunction={removeFunction}
      customStyle={{ mx: "auto" }}
    />
  );
};

export default TransactionChangerForm;
